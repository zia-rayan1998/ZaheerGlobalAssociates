import { createContext, useContext, type MutableRefObject, type ReactNode } from "react";

interface OpacityContextValue {
  globeOpacity: MutableRefObject<number>;
  mapOpacity: MutableRefObject<number>;
}

const OpacityContext = createContext<OpacityContextValue | null>(null);

export function OpacityProvider({
  children,
  globeOpacity,
  mapOpacity,
}: {
  children: ReactNode;
  globeOpacity: MutableRefObject<number>;
  mapOpacity: MutableRefObject<number>;
}) {
  return <OpacityContext.Provider value={{ globeOpacity, mapOpacity }}>{children}</OpacityContext.Provider>;
}

export function useOpacityRefs() {
  const ctx = useContext(OpacityContext);
  if (!ctx) throw new Error("useOpacityRefs must be used within OpacityProvider");
  return ctx;
}