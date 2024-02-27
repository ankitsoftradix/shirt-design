import { Sky, useAnimations, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";

const ModelSkeleton = (props) => {
  const group = useRef();
  const { nodes, animations } = useGLTF("./modal/dog.glb");
  const { actions } = useAnimations(animations, group);
  useEffect(() => {
    actions.Embarrassed.play();
  }, []);
  return (
    <Suspense>
      <ambientLight intensity={4} />
      <Sky />
      <group ref={group} {...props} dispose={null}>
        <group>
          <group name="Geometry">
            <group name="Rover_Props">
              <skinnedMesh
                name="Rover_travel_bag"
                geometry={nodes.Rover_travel_bag.geometry}
                material={nodes.Rover_travel_bag.material}
                skeleton={nodes.Rover_travel_bag.skeleton}
              />
              {/* <skinnedMesh
                name="Rover_footprint"
                geometry={nodes.Rover_footprint.geometry}
                material={nodes.Rover_footprint.material}
                skeleton={nodes.Rover_footprint.skeleton}
              /> */}
            </group>
            <skinnedMesh
              name="Rover"
              geometry={nodes.Rover.geometry}
              material={nodes.Rover.material}
              skeleton={nodes.Rover.skeleton}
            />
          </group>
          <primitive object={nodes.Root} />
        </group>
      </group>
    </Suspense>
  );
};

useGLTF.preload("./modal/dog.glb");

export default ModelSkeleton;
