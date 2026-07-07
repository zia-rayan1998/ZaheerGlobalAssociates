import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";
import { EARTH, HYDERABAD, CAMERA } from "@/lib/constants";
import { latLonToVector3, cameraOrbitForSurfacePoint } from "@/lib/geo";
import { useSceneStore } from "@/hooks/useSceneStore";
import { useOpacityRefs } from "@/hooks/useOpacityRefs";
import { scrollWaypoints } from "@/data/locations";

interface CameraControllerProps {
  onTransitionComplete?: () => void;
}

export function CameraController({ onTransitionComplete }: CameraControllerProps) {
  const { camera } = useThree();
  const targetParallax = useRef({ x: 0, y: 0 });
  const currentParallax = useRef({ x: 0, y: 0 });
  const scrollTarget = useRef(new THREE.Vector3());
  const scrollPosition = useRef(new THREE.Vector3(...CAMERA.map.position));
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));
  const transitioning = useRef(false);
  const transitionFn = useRef<(() => void) | null>(null);
  const reverseTransitionFn = useRef<(() => void) | null>(null);

  const { globeOpacity, mapOpacity } = useOpacityRefs();
  const {
    phase,
    controlsEnabled,
    scrollProgress,
    setPhase,
    setControlsEnabled,
  } = useSceneStore();

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      if (phase !== "globe") return;
      targetParallax.current.x = (event.clientX / window.innerWidth - 0.5) * 0.4;
      targetParallax.current.y = (event.clientY / window.innerHeight - 0.5) * 0.2;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [phase]);

  useEffect(() => {
    transitionFn.current = () => {
      if (phase !== "globe" || transitioning.current) return;
      transitioning.current = true;
      setPhase("transitioning");
      setControlsEnabled(false);

      const surface = latLonToVector3(HYDERABAD.lat, HYDERABAD.lon, EARTH.radius);
      const startPos = camera.position.clone();
      const midPos = cameraOrbitForSurfacePoint(surface, 2.6);
      const endPos = new THREE.Vector3(...CAMERA.map.position);

      gsap.to({ t: 0 }, {
        t: 1,
        duration: 2.8,
        ease: "power3.inOut",
        onUpdate: function () {
          const progress = this.targets()[0].t as number;
          if (progress < 0.65) {
            camera.position.lerpVectors(startPos, midPos, progress / 0.65);
            camera.lookAt(0, 0, 0);
          } else {
            camera.position.lerpVectors(midPos, endPos, (progress - 0.65) / 0.35);
            camera.lookAt(0, 0, 0);
          }
          globeOpacity.current = Math.max(0, 1 - progress * 1.4);
          mapOpacity.current = Math.min(1, Math.max(0, (progress - 0.5) * 2));
        },
        onComplete: () => {
          setPhase("city");
          setControlsEnabled(true);
          transitioning.current = false;
          globeOpacity.current = 0;
          mapOpacity.current = 1;
          onTransitionComplete?.();
          window.dispatchEvent(new CustomEvent("map-transition-complete"));
        },
      });
    };

    reverseTransitionFn.current = () => {
      if (phase !== "city" || transitioning.current) return;
      transitioning.current = true;
      setPhase("transitioning");
      setControlsEnabled(false);

      const globePos = new THREE.Vector3(...CAMERA.globe.position);
      const startPos = camera.position.clone();

      gsap.to({ t: 0 }, {
        t: 1,
        duration: 2.2,
        ease: "power3.inOut",
        onUpdate: function () {
          const progress = this.targets()[0].t as number;
          camera.position.lerpVectors(startPos, globePos, progress);
          camera.lookAt(0, 0, 0);
          globeOpacity.current = Math.min(1, progress * 1.4);
          mapOpacity.current = Math.max(0, 1 - progress * 1.5);
        },
        onComplete: () => {
          setPhase("globe");
          setControlsEnabled(true);
          transitioning.current = false;
          globeOpacity.current = 1;
          mapOpacity.current = 0;
          onTransitionComplete?.();
        },
      });
    };

    (window as Window & { __transitionToMap?: () => void }).__transitionToMap = () =>
      transitionFn.current?.();
    (window as Window & { __transitionToGlobe?: () => void }).__transitionToGlobe = () =>
      reverseTransitionFn.current?.();
  }, [
    camera,
    phase,
    setPhase,
    setControlsEnabled,
    onTransitionComplete,
    globeOpacity,
    mapOpacity,
  ]);

  useFrame(() => {
    currentParallax.current.x += (targetParallax.current.x - currentParallax.current.x) * 0.04;
    currentParallax.current.y += (targetParallax.current.y - currentParallax.current.y) * 0.04;

    if (phase === "globe" && controlsEnabled) {
      camera.position.x = CAMERA.globe.position[0] + currentParallax.current.x * 0.25;
      camera.position.y = CAMERA.globe.position[1] + currentParallax.current.y * 0.15;
    }

    if (phase === "city") {
      const total = scrollWaypoints.length - 1;
      const scaled = scrollProgress * total;
      const index = Math.min(Math.floor(scaled), total - 1);
      const fraction = scaled - index;
      const from = scrollWaypoints[index];
      const to = scrollWaypoints[Math.min(index + 1, total)];

      scrollPosition.current.set(
        THREE.MathUtils.lerp(from.position[0], to.position[0], fraction),
        THREE.MathUtils.lerp(from.position[1], to.position[1], fraction),
        THREE.MathUtils.lerp(from.position[2], to.position[2], fraction)
      );
      scrollTarget.current.set(
        THREE.MathUtils.lerp(from.target[0], to.target[0], fraction),
        THREE.MathUtils.lerp(from.target[1], to.target[1], fraction),
        THREE.MathUtils.lerp(from.target[2], to.target[2], fraction)
      );

      if (scrollProgress > 0) {
        camera.position.lerp(scrollPosition.current, 0.06);
        lookTarget.current.lerp(scrollTarget.current, 0.08);
        camera.lookAt(lookTarget.current);
      }
    }
  });

  return (
    <OrbitControls
      enabled={controlsEnabled}
      enablePan={phase === "city"}
      enableZoom={true}
      enableRotate
      minDistance={phase === "globe" ? EARTH.minDistance : 8}
      maxDistance={phase === "globe" ? EARTH.maxDistance : 45}
      minPolarAngle={phase === "city" ? 0.2 : 0}
      maxPolarAngle={phase === "city" ? Math.PI / 2.2 : Math.PI}
      rotateSpeed={phase === "globe" ? 0.22 : 0.45}
      zoomSpeed={1.2}
      dampingFactor={0.08}
      enableDamping
    />
  );
}