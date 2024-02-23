import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "./Modal.module.scss";

const ModalLayout = (props) => {
  const { nodes, materials } = useGLTF("/shirt_design.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-1.5, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["21-tondi_neri_Gabellini-2"]}
        />
        <mesh geometry={nodes.Object_3.geometry} material={materials.Gesso} />
        <points
          geometry={nodes.Object_4.geometry}
          material={materials.diffuse_Black}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.salopette_importati}
        />
      </group>
    </group>
  );
};

const Modal = () => {
  return (
    <div className={styles.modalWrap}>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 2000,
        }}
      >
        <ModalLayout />
        <Environment preset="city" />
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
