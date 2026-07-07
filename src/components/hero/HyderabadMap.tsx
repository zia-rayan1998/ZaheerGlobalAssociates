import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { MAP, COLORS } from "@/lib/constants";
import { districts } from "@/data/locations";
import { useSceneStore } from "@/hooks/useSceneStore";
import { useOpacityRefs } from "@/hooks/useOpacityRefs";
import { LocationPin } from "@/components/hero/LocationPin";

interface HyderabadMapProps {
  scrollProgress: number;
}

function Buildings() {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  const { positions, scales } = useMemo(() => {
    const pos: number[] = [];
    const scl: number[] = [];
    const rng = (seed: number) => {
      const x = Math.sin(seed * 127.1) * 43758.5453;
      return x - Math.floor(x);
    };

    for (let i = 0; i < MAP.buildingCount; i++) {
      const x = (rng(i) - 0.5) * MAP.size * 0.85;
      const z = (rng(i + 100) - 0.5) * MAP.size * 0.85;
      const h = 0.3 + rng(i + 200) * 2.8;
      pos.push(x, h / 2, z);
      scl.push(0.15 + rng(i + 300) * 0.25, h, 0.15 + rng(i + 400) * 0.25);
    }

    return { positions: pos, scales: scl };
  }, []);

  useEffect(() => {
    if (!meshRef.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < MAP.buildingCount; i++) {
      dummy.position.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      dummy.scale.set(scales[i * 3], scales[i * 3 + 1], scales[i * 3 + 2]);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [positions, scales]);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, MAP.buildingCount]} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={COLORS.charcoal}
        metalness={0.6}
        roughness={0.45}
        emissive={new THREE.Color("#1a1510")}
        emissiveIntensity={0.15}
      />
    </instancedMesh>
  );
}

function Roads() {
  const geometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    const step = 1.2;
    const half = MAP.size / 2;

    for (let x = -half; x <= half; x += step) {
      points.push(new THREE.Vector3(x, 0.02, -half), new THREE.Vector3(x, 0.02, half));
    }
    for (let z = -half; z <= half; z += step) {
      points.push(new THREE.Vector3(-half, 0.02, z), new THREE.Vector3(half, 0.02, z));
    }
    for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
      points.push(
        new THREE.Vector3(0, 0.02, 0),
        new THREE.Vector3(Math.cos(angle) * half * 0.9, 0.02, Math.sin(angle) * half * 0.9)
      );
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={COLORS.goldDim} transparent opacity={0.35} />
    </lineSegments>
  );
}

export function HyderabadMap({ scrollProgress }: HyderabadMapProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { mapOpacity } = useOpacityRefs();
  const { phase, activeDistrict, setActiveDistrict } = useSceneStore();

  const activeIndex = Math.min(
    Math.floor(scrollProgress * districts.length),
    districts.length - 1
  );

  useFrame(() => {
    const opacity = mapOpacity.current;
    if (groupRef.current) {
      groupRef.current.visible = opacity > 0.01 || phase === "city";
    }
  });

  return (
    <group ref={groupRef} visible={false} scale={0.50}>
      <Roads />
      <Buildings />

      {districts.map((district, i) => (
        <LocationPin
          key={district.id}
          district={district}
          isHighlighted={i === activeIndex || i === activeIndex + 1}
          scrollVisible={phase === "city"}
          showLabel={phase === "city"}
          onSelect={setActiveDistrict}
        />
      ))}

      <pointLight position={[0, 4, 0]} color="#c9a962" intensity={2} distance={20} />
      <spotLight
        position={[8, 20, 8]}
        angle={0.35}
        penumbra={0.8}
        intensity={3}
        color="#e8d5a3"
        castShadow
      />
    </group>
  );
}


