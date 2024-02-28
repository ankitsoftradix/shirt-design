import { Canvas } from "@react-three/fiber";
import EggsSkeleton from "../Scenes/Eggs";
import styles from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.modalWrap}>
      <Canvas>
        {/* <DogSkeleton /> */}
        <EggsSkeleton />
      </Canvas>
    </div>
  );
};

export default Modal;
