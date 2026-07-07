import { useSceneStore } from "@/hooks/useSceneStore";
import { districts } from "@/data/locations";

export function OverlayUI() {
  const { phase, scrollProgress, activeDistrict, setActiveDistrict } = useSceneStore();

  const selectedDistrict = districts.find((district) => district.id === activeDistrict) ?? null;

  const scrollIndex = Math.min(Math.floor(scrollProgress * districts.length), districts.length - 1);
  const scrollDistrict = phase === "city" ? districts[scrollIndex] : null;

  return (
    <div className="overlay-ui">
      <nav className="overlay-nav">
        <div className="overlay-nav__logo">
          <span className="logo-mark">ZGA</span>
          <span className="logo-text">Zaheer Global Associates</span>
        </div>
        <div className="overlay-nav__links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <button type="button" className="btn-gold">Enquire Now</button>
        </div>
      </nav>

      {phase === "globe" && (
        <div className="hero-copy">
          <p className="hero-copy__eyebrow">Luxury Real Estate • Hyderabad</p>
          <h1 className="hero-copy__title">
            Building Legacies,
            <br />
            <em>Crafting Lifestyles</em>
          </h1>
          <p className="hero-copy__subtitle">
            Discover premium properties across Hyderabad&apos;s most prestigious districts. Click the golden beacon to explore.
          </p>
          <div className="hero-copy__cta">
            <button type="button" className="btn-gold btn-gold--large">
              Enquire Now →
            </button>
          </div>
          <div className="hero-copy__stats">
            <div>
              <strong>20+</strong>
              <span>Years Legacy</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Projects Delivered</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Premium Locations</span>
            </div>
          </div>
        </div>
      )}

      {phase === "globe" && (
        <div className="globe-hint">
          <span className="globe-hint__pulse" />
          Click Hyderabad to explore
        </div>
      )}

      {phase === "city" && scrollDistrict && (
        <div className="scroll-district-label">
          <span className="scroll-district-label__eyebrow">Now Viewing</span>
          <h2>{scrollDistrict.name}</h2>
          <p>{scrollDistrict.description}</p>
        </div>
      )}

      {phase === "city" && selectedDistrict && (
        <div className="selected-district-card">
          <span className="selected-district-card__eyebrow">Selected Location</span>
          <h3>{selectedDistrict.name}</h3>
          <p>{selectedDistrict.description}</p>
          <button
            type="button"
            className="selected-district-card__back"
            onClick={() => {
              setActiveDistrict(null);
              (window as Window & { __transitionToGlobe?: () => void }).__transitionToGlobe?.();
            }}
          >
            Back to Globe
          </button>
        </div>
      )}

      {phase === "city" && (
        <button
          type="button"
          className="hero-back-button"
          onClick={() => {
            setActiveDistrict(null);
            (window as Window & { __transitionToGlobe?: () => void }).__transitionToGlobe?.();
          }}
        >
          Back to Globe
        </button>
      )}

      {phase === "transitioning" && (
        <div className="transition-text">
          <span>Entering Hyderabad</span>
        </div>
      )}

      <div className="overlay-gradient" />
    </div>
  );
}


