import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import type { District } from "@/data/locations";
import { COLORS } from "@/lib/constants";

interface LocationPinProps {
  district: District;
  isHighlighted: boolean;
  scrollVisible: boolean;
  showLabel: boolean;
  onSelect: (districtId: string) => void;
}

export function LocationPin({
  district,
  isHighlighted,
  scrollVisible,
  showLabel,
  onSelect,
}: LocationPinProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const pulse = (Math.sin(t * 2) + 1) * 0.5;

    if (groupRef.current) {
      groupRef.current.position.set(district.position[0], 2, district.position[1]);
      groupRef.current.visible = scrollVisible || isHighlighted;
    }

    if (pulseRef.current) {
      pulseRef.current.scale.setScalar(1 + pulse * (isHighlighted ? 0.6 : 0.25));
      (pulseRef.current.material as THREE.MeshBasicMaterial).opacity = isHighlighted
        ? 0.35 - pulse * 0.2
        : 0.15 - pulse * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh
        onClick={(event) => {
          event.stopPropagation();
          onSelect(district.id);
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <cylinderGeometry args={[0.04, 0.04, 0.6, 12]} />
        <meshStandardMaterial color={COLORS.gold} emissive={COLORS.goldDim} emissiveIntensity={0.8} />
      </mesh>
      <mesh
        ref={pulseRef}
        position={[0, 0.35, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(district.id);
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <ringGeometry args={[0.08, 0.12, 32]} />
        <meshBasicMaterial color={COLORS.gold} transparent opacity={0.2} side={THREE.DoubleSide} depthWrite={false} />
      </mesh>
      {showLabel && (
  <Html
    position={[0, 1.2, 0]}
    center
    distanceFactor={8}
    occlude={false}
  >
    <div className="rounded-lg border border-yellow-500/40 bg-black/60 px-3 py-2 backdrop-blur-md shadow-lg">
      <span className="text-sm font-semibold tracking-wide text-yellow-300">
        📍 {district.name}
      </span>
    </div>
  </Html>
)}
    </group>
  );
}