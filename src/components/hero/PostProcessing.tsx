import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";
import { useSceneStore } from "@/hooks/useSceneStore";

export function PostProcessing() {
  // const { phase } = useSceneStore();

  // return (
  //   <EffectComposer multisampling={0}>
  //     <Bloom
  //       luminanceThreshold={phase === "map" ? 0.35 : 0.55}
  //       luminanceSmoothing={0.9}
  //       intensity={phase === "map" ? 1.2 : 0.8}
  //       mipmapBlur
  //     />
  //     <Vignette eskil offset={0.2} darkness={0.7} />
  //   </EffectComposer>
  // );
  return null;
}