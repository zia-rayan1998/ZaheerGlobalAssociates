import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { EARTH, HYDERABAD, TEXTURE_URLS } from "@/lib/constants";
import { latLonToVector3 } from "@/lib/geo";
import { useSceneStore } from "@/hooks/useSceneStore";
import { useOpacityRefs } from "@/hooks/useOpacityRefs";
import { HyderabadBeacon } from "@/components/hero/HyderabadBeacon";

interface EarthProps {
  onHyderabadClick: () => void;
}

export function Earth({ onHyderabadClick }: EarthProps) {
  const groupRef = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const earthMatRef = useRef<THREE.MeshPhongMaterial>(null);
  const nightMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const cloudMatRef = useRef<THREE.MeshPhongMaterial>(null);
  const atmosMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const groupVisible = useRef(true);

  const { controlsEnabled, phase } = useSceneStore();
  const { globeOpacity } = useOpacityRefs();

  const setGlobeCursor = (cursor: string) => {
    document.body.style.cursor = cursor;
  };

  const [dayMap, nightMap, bumpMap, specMap, cloudMap] = useTexture([
    TEXTURE_URLS.earthDay,
    TEXTURE_URLS.earthNight,
    TEXTURE_URLS.earthBump,
    TEXTURE_URLS.earthSpecular,
    TEXTURE_URLS.clouds,
  ]);

  useEffect(() => {
    [dayMap, nightMap, bumpMap, specMap, cloudMap].forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 8;
    });
  }, [dayMap, nightMap, bumpMap, specMap, cloudMap]);

  useEffect(() => {
    if (!groupRef.current) return;

    const hyderabadSurface = latLonToVector3(HYDERABAD.lat, HYDERABAD.lon, EARTH.radius);
    const frontFacing = new THREE.Vector3(0, 0, 1);
    const startQuaternion = new THREE.Quaternion().setFromUnitVectors(
      hyderabadSurface.clone().normalize(),
      frontFacing
    );

    groupRef.current.quaternion.copy(startQuaternion);
    groupRef.current.rotateX(-0.12);
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.cursor = "default";
    };
  }, []);

  useFrame((_, delta) => {
    const opacity = globeOpacity.current;
    groupVisible.current = opacity > 0.01;
    if (groupRef.current) groupRef.current.visible = groupVisible.current;

    if (earthMatRef.current) earthMatRef.current.opacity = opacity;
    if (nightMatRef.current) nightMatRef.current.opacity = opacity * 0.85;
    if (cloudMatRef.current) cloudMatRef.current.opacity = opacity * 0.22;
    if (atmosMatRef.current) atmosMatRef.current.opacity = opacity * 0.08;

    if (groupRef.current && controlsEnabled && phase === "globe") {
      groupRef.current.rotation.y += delta * EARTH.autoRotateSpeed;
    }

    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.012;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        onPointerOver={() => setGlobeCursor("grab")}
        onPointerOut={() => setGlobeCursor("default")}
        onPointerDown={() => setGlobeCursor("grabbing")}
        onPointerUp={() => setGlobeCursor("grab")}
      >
        <sphereGeometry args={[EARTH.radius, 64, 64]} />
        <meshPhongMaterial
          ref={earthMatRef}
          map={dayMap}
          bumpMap={bumpMap}
          bumpScale={0.04}
          specularMap={specMap}
          specular={new THREE.Color("#333333")}
          shininess={12}
          transparent
          opacity={1}
        />
      </mesh>

      <mesh
        onPointerOver={() => setGlobeCursor("grab")}
        onPointerOut={() => setGlobeCursor("default")}
        onPointerDown={() => setGlobeCursor("grabbing")}
        onPointerUp={() => setGlobeCursor("grab")}
      >
        <sphereGeometry args={[EARTH.radius + 0.002, 64, 64]} />
        <meshBasicMaterial
          ref={nightMatRef}
          map={nightMap}
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh
        ref={cloudsRef}
        onPointerOver={() => setGlobeCursor("grab")}
        onPointerOut={() => setGlobeCursor("default")}
        onPointerDown={() => setGlobeCursor("grabbing")}
        onPointerUp={() => setGlobeCursor("grab")}
      >
        <sphereGeometry args={[EARTH.radius + 0.015, 64, 64]} />
        <meshPhongMaterial
          ref={cloudMatRef}
          map={cloudMap}
          transparent
          opacity={0.22}
          depthWrite={false}
        />
      </mesh>

      <mesh
        scale={1.12}
        onPointerOver={() => setGlobeCursor("grab")}
        onPointerOut={() => setGlobeCursor("default")}
        onPointerDown={() => setGlobeCursor("grabbing")}
        onPointerUp={() => setGlobeCursor("grab")}
      >
        <sphereGeometry args={[EARTH.radius, 32, 32]} />
        <meshBasicMaterial
          ref={atmosMatRef}
          color="#4a90d9"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      <HyderabadBeacon onClick={onHyderabadClick} />
    </group>
  );
}