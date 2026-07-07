"use client";

import { useRouter } from "next/navigation";
import { SceneProvider } from "@/hooks/useSceneStore";
import { HeroScene } from "@/components/hero/HeroScene";
import { useSceneStore } from "@/hooks/useSceneStore";

function HeroContent() {
  const { phase, setActiveDistrict } = useSceneStore();
const router = useRouter();

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#0a0a0b] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_38%,rgba(24,48,82,0.38),transparent_28%),radial-gradient(circle_at_30%_40%,rgba(201,169,98,0.08),transparent_26%),linear-gradient(180deg,#080809_0%,#09090a_58%,#050505_100%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zz48Y2lyY2xlIGN4PSIyOCIuNSIgY3k9IjM4LjUiIHI9IjEuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjQ1Ii8+PGNpcmNsZSBjeD0iNzIiIGN5PSI1NSIgcj0iMS4yIiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMzUiLz48Y2lyY2xlIGN4PSI5MiIgY3k9IjMyIiByPSIxLjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4yMiIvPjxjaXJjbGUgY3g9IjU1IiBjeT0iODMiIHI9IjEuNSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjI4Ii8+PC9zdmc+')] opacity-35" />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
          <div className="max-w-xl">
            <p className="mb-5 text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#c9a962]">
              Luxury Real Estate • Hyderabad
            </p>
            <h1 className="text-4xl font-normal leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Building Legacies,
              <span className="block italic text-[#ead7a2]">Crafting Lifestyles</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/70 sm:text-lg">
              Discover premium properties across Hyderabad&apos;s most prestigious districts.
              Click the golden beacon to explore.
            </p>
            <div className="mt-8">
              <button
  type="button"
  onClick={() => router.push("/contact")}
  className="inline-flex items-center gap-2 border border-[#c9a962] px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#c9a962] transition-colors duration-300 hover:bg-[#c9a962] hover:text-[#0a0a0b]"
>
  Enquire Now →
</button>
            </div>

            <div className="mt-10 border-t border-white/10 pt-8">
              <div className="grid grid-cols-3 gap-6 text-left sm:gap-8">
                {/* <div>
                  <strong className="block font-serif text-2xl text-[#c9a962] sm:text-3xl">20+</strong>
                  <span className="mt-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/45">
                    Years Legacy
                  </span>
                </div> */}
                {/* <div>
                  <strong className="block font-serif text-2xl text-[#c9a962] sm:text-3xl">50+</strong>
                  <span className="mt-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/45">
                    Projects Delivered
                  </span>
                </div> */}
                {/* <div>
                  <strong className="block font-serif text-2xl text-[#c9a962] sm:text-3xl">12</strong>
                  <span className="mt-1 block text-[0.7rem] font-medium uppercase tracking-[0.22em] text-white/45">
                    Premium Locations
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[28rem] items-center justify-center lg:min-h-[42rem] lg:justify-end">
            {phase === "city" && (
              <button
                type="button"
                className="absolute right-6 top-6 z-20 border border-[#c9a962]/55 bg-black/70 px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#e8d5a3] backdrop-blur-md transition-colors duration-300 hover:bg-[#c9a962]/12"
                onClick={() => {
                  setActiveDistrict(null);
                  (window as Window & { __transitionToGlobe?: () => void }).__transitionToGlobe?.();
                }}
              >
                Back to Globe
              </button>
            )}

            <div className="absolute -inset-20 flex items-center justify-center overflow-visible">
              <HeroScene className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-white/28">
        <span className="h-2 w-2 rounded-full bg-[#c9a962] shadow-[0_0_0_6px_rgba(201,169,98,0.14)]" />
        Click Hyderabad to explore
      </div>
    </section>
  );
}

export function Hero() {
  return (
    <SceneProvider>
      <HeroContent />
    </SceneProvider>
  );
}
