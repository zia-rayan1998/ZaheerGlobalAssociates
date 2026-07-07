import { Stars } from "@react-three/drei";
import { useSceneStore } from "@/hooks/useSceneStore";

export function SceneLighting() {
  const { phase } = useSceneStore();
  const isGlobe = phase === "globe" || phase === "transitioning";

  return (
    <>
      <ambientLight intensity={isGlobe ? 0.04 : 0.12} color="#ffffff" />
      <directionalLight
        position={[6, 4, 6]}
        intensity={isGlobe ? 1.35 : 0.65}
        color="#fff4df"
        castShadow={!isGlobe}
        shadow-mapSize={[1024, 1024]}
      />
      {isGlobe && (
        <>
          <directionalLight position={[-5, -2, -4]} intensity={0.1} color="#4a90d9" />
          <Stars radius={80} depth={50} count={1600} factor={2.2} saturation={0} fade speed={0.18} />
        </>
      )}
    </>
  );
}