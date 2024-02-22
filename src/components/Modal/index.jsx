import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import styles from "./Modal.module.scss";

const ModalLayout = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

const Modal = () => {
  return (
    <div className={styles.modalWrap}>
      <Canvas camera={{ position: [2, 2, 2], fov: 20 }}>
        <ModalLayout />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -0.8, 0]}
          opacity={0.25}
          scale={10}
          blur={1.5}
          far={0.8}
        />
        <OrbitControls
          minPolarAngle={1}
          maxPolarAngle={1.5}
          enableZoom={false}
          //   enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default Modal;
