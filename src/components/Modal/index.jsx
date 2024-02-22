import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.modalWrap}>
      <Canvas camera={{ position: [2, 2, 2] }}>
        <mesh>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default Modal;
