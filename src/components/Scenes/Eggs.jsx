import {
  CameraControls,
  MeshPortalMaterial,
  RoundedBox,
  Text,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useEffect, useRef, useState } from "react";
import { BackSide } from "three";

const EggsSkeleton = () => {
  const meshPortalMaterialRef = useRef();
  const cameraControlRef = useRef();
  const [active, setActive] = useState(false);
  const model = useGLTF("./modal/eggs.glb");
  const texture = useTexture("./texture/1.png");

  const doubleClickHandler = () => {
    setActive(!active);
  };

  useFrame((_, delta) => {
    easing.damp(
      meshPortalMaterialRef.current,
      "blend",
      active ? 1 : 0,
      0.2,
      delta
    );
  });

  useEffect(() => {
    if (active) {
      cameraControlRef?.current?.setLookAt(0, 0, 3, 0, 0, 0, true);
    } else {
      cameraControlRef?.current?.setLookAt(0, 0, 5, 0, 0, 0, true);
    }
  }, [active]);

  return (
    <Suspense>
      <CameraControls ref={cameraControlRef} />

      <Text font="./font/bold.ttf" position={[0, 1.5, 0.1]} fontSize={0.6}>
        Eggs
        <meshBasicMaterial toneMapped={false} />
      </Text>

      <RoundedBox args={[3, 4, 0.1]} radius={0.1}>
        <MeshPortalMaterial ref={meshPortalMaterialRef}>
          <primitive object={model.scene} scale={0.6} position-y={0.6} />
          <mesh onDoubleClick={doubleClickHandler}>
            <sphereGeometry args={[5, 64, 64]} />
            <meshBasicMaterial map={texture} side={BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </Suspense>
  );
};

export default EggsSkeleton;
