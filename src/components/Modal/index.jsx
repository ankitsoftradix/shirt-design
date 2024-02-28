import { Canvas } from "@react-three/fiber";
import DogSkeleton from "../Scenes/Dog";
import styles from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.modalWrap}>
      <Canvas camera={{ position: [0, 1, 4] }}>
        <DogSkeleton />
      </Canvas>
    </div>
  );
};

export default Modal;
