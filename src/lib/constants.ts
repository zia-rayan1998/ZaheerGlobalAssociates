import * as THREE from "three";

export const COLORS = {
  bg: "#0a0a0b",
  charcoal: "#141416",
  gold: "#c9a962",
  goldBright: "#e8d5a3",
  goldDim: "#8a7340",
  white: "#f5f0e8",
  whiteMuted: "rgba(245, 240, 232, 0.65)",
} as const;

export const HYDERABAD = { lat: 17.385, lon: 78.487 } as const;

export const EARTH = {
  radius: 1.4,
  autoRotateSpeed: 0.05,
  minDistance: 2.8,
  maxDistance: 6,
} as const;

export const MAP = {
  size: 24,
  buildingCount: 420,
  fogNear: 8,
  fogFar: 45,
} as const;

export const CAMERA = {
  globe: { position: [0, 0.4, 5.2] as [number, number, number], fov: 45 },
  map: { position: [0, 14, 18] as [number, number, number], fov: 42 },
} as const;

export const TEXTURE_URLS = {
  earthDay:
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg",
  earthNight:
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_lights_2048.png",
  earthBump:
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg",
  earthSpecular:
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg",
  clouds:
    "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png",
} as const;

export const goldColor = new THREE.Color(COLORS.gold);