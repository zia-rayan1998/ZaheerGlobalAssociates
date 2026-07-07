import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { EARTH, HYDERABAD, goldColor } from "@/lib/constants";
import { latLonToVector3 } from "@/lib/geo";
import { useOpacityRefs } from "@/hooks/useOpacityRefs";

interface HyderabadBeaconProps {
  onClick: () => void;
}

export function HyderabadBeacon({ onClick }: HyderabadBeaconProps) {
  const groupRef = useRef<THREE.Group>(null);
  const pulseRef = useRef<THREE.Mesh>(null);
  const pulse2Ref = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const { globeOpacity } = useOpacityRefs();

  useFrame(({ clock }) => {
    const opacity = globeOpacity.current;
    const t = clock.elapsedTime;
    const pulse = (Math.sin(t * 2.2) + 1) * 0.5;
    const pulse2 = (Math.sin(t * 2.2 - 1.2) + 1) * 0.5;

    const pos = latLonToVector3(HYDERABAD.lat, HYDERABAD.lon, EARTH.radius + 0.02);
    const normal = pos.clone().normalize();

    if (groupRef.current) {
      groupRef.current.position.copy(pos);
      groupRef.current.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        normal
      );
      groupRef.current.visible = opacity > 0.05;
    }

    if (pulseRef.current) {
      pulseRef.current.scale.setScalar(1 + pulse * 0.8);
      (pulseRef.current.material as THREE.MeshBasicMaterial).opacity =
        opacity * (0.35 - pulse * 0.2);
    }
    if (pulse2Ref.current) {
      pulse2Ref.current.scale.setScalar(1 + pulse2 * 1.2);
      (pulse2Ref.current.material as THREE.MeshBasicMaterial).opacity =
        opacity * (0.2 - pulse2 * 0.12);
    }
    if (lightRef.current) {
      lightRef.current.intensity = 1.2 + pulse * 1.5;
    }
    if (labelRef.current) {
      labelRef.current.style.opacity = String(opacity);
    }
  });

  return (
    <group ref={groupRef}>
      <pointLight ref={lightRef} color={goldColor} intensity={1.5} distance={3} />

      <mesh
        onClick={(event: any) => {
          event.stopPropagation();
          onClick();
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color={goldColor} transparent opacity={1} />
      </mesh>

      <mesh ref={pulseRef}>
        <ringGeometry args={[0.05, 0.07, 32]} />
        <meshBasicMaterial
          color={goldColor}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={pulse2Ref}>
        <ringGeometry args={[0.06, 0.09, 32]} />
        <meshBasicMaterial
          color={goldColor}
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <mesh
        onClick={(event: any) => {
          event.stopPropagation();
          onClick();
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
      >
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      <Html position={[0, 0.12, 0]} center distanceFactor={4} style={{ pointerEvents: "none" }}>
        <div className="beacon-label" ref={labelRef}>
          <span className="beacon-label__city">Hyderabad</span>
          <span className="beacon-label__country">India</span>
        </div>
      </Html>
    </group>
  );
}