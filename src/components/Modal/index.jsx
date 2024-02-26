import { Canvas, useFrame } from "@react-three/fiber";
import styles from "./Modal.module.scss";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { DoubleSide } from "three";

const ModalLayout = () => {
  const cubeRef = useRef();
  useFrame((state) => {
    cubeRef.current.rotation.y += 0.01;
    cubeRef.current.position.y =
      Math.sin(2 * state.clock.elapsedTime - Math.PI) + 1.5;
  });
  return (
    <>
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <mesh
        position={[0, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1, 1, 1]}
      >
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial side={DoubleSide} />
      </mesh>
    </>
  );
};

const Modal = () => {
  return (
    <div className={styles.modalWrap}>
      <Canvas
        camera={{
          position: [3, 3, 3],
        }}
      >
        <ModalLayout />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Modal;
