import { createContext, useContext, useState, type ReactNode } from "react";

export type ScenePhase = "globe" | "transitioning" | "city";

interface SceneContextValue {
  phase: ScenePhase;
  controlsEnabled: boolean;
  scrollProgress: number;
  hoveredDistrict: string | null;
  activeDistrict: string | null;
  setPhase: (phase: ScenePhase) => void;
  setControlsEnabled: (enabled: boolean) => void;
  setScrollProgress: (progress: number) => void;
  setHoveredDistrict: (id: string | null) => void;
  setActiveDistrict: (id: string | null) => void;
}

const SceneContext = createContext<SceneContextValue | null>(null);

export function SceneProvider({ children }: { children: ReactNode }) {
  const [phase, setPhase] = useState<ScenePhase>("globe");
  const [controlsEnabled, setControlsEnabled] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [activeDistrict, setActiveDistrict] = useState<string | null>(null);

  return (
    <SceneContext.Provider
      value={{
        phase,
        controlsEnabled,
        scrollProgress,
        hoveredDistrict,
        activeDistrict,
        setPhase,
        setControlsEnabled,
        setScrollProgress,
        setHoveredDistrict,
        setActiveDistrict,
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}

export function useSceneStore() {
  const ctx = useContext(SceneContext);
  if (!ctx) throw new Error("useSceneStore must be used within SceneProvider");
  return ctx;
}