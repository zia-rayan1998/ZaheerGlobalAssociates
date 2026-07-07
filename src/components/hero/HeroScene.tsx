import { Suspense, useCallback, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
import { CAMERA, COLORS } from "@/lib/constants";
import { useSceneStore } from "@/hooks/useSceneStore";
import { OpacityProvider } from "@/hooks/useOpacityRefs";
import { Earth } from "@/components/hero/Earth";
import { HyderabadMap } from "@/components/hero/HyderabadMap";
import { CameraController } from "@/components/hero/CameraController";
import { SceneLighting } from "@/components/hero/SceneLighting";
import { PostProcessing } from "@/components/hero/PostProcessing";

function SceneContent() {
  const globeOpacity = useRef(1);
  const mapOpacity = useRef(0);
  const { scrollProgress } = useSceneStore();

  const handleHyderabadClick = useCallback(() => {
    const fn = (window as Window & { __transitionToMap?: () => void }).__transitionToMap;
    fn?.();
  }, []);

  return (
    <OpacityProvider globeOpacity={globeOpacity} mapOpacity={mapOpacity}>
      <SceneLighting />
      <CameraController />

      <Earth onHyderabadClick={handleHyderabadClick} />
      <HyderabadMap scrollProgress={scrollProgress} />
      <PostProcessing />
      <Preload all />
    </OpacityProvider>
  );
}

interface HeroSceneProps {
  className?: string;
}

export function HeroScene({ className }: HeroSceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{
          position: CAMERA.globe.position,
          fov: CAMERA.globe.fov,
          near: 0.1,
          far: 200,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.1,
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor(0x000000, 0);
          gl.setClearAlpha(0);
          scene.background = null;
        }}
      >
        <fog attach="fog" args={[COLORS.bg, 10, 80]} />
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}



