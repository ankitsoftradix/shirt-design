import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ModelSkeleton from "../ModalSkeleton";
import styles from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.modalWrap}>
      <Canvas camera={{ position: [0, 1, 4] }}>
        <ModelSkeleton />
        <OrbitControls />
        {/* <gridHelper /> */}
      </Canvas>
    </div>
  );
};

export default Modal;
