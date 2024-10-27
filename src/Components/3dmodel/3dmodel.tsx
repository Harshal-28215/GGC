"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";
import { CustomDrawer } from "./drawer";
import Popup from "./Popup";

interface LocationMarkerProps {
  lat: number;
  lng: number;
  camera: THREE.Camera | null;
  onClick: () => void;
}

function latLngToVector3(lat: number, lng: number, radius = 2.5) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}

function LocationMarker({ lat, lng, camera, onClick }: LocationMarkerProps) {
  const position = latLngToVector3(lat, lng, 2.7);
  const texture = useLoader(TextureLoader, "/assets/location.avif");
  const markerRef = useRef<THREE.Mesh>(null);

  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(1);

  useFrame(() => {
    if (hovered) {
      setScale((prev) => THREE.MathUtils.lerp(prev, 1.5, 0.1));
    } else {
      setScale((prev) => THREE.MathUtils.lerp(prev, 1, 0.1));
    }

    if (markerRef.current && camera) {
      markerRef.current.lookAt(camera.position);
    }
  });

  return (
    <mesh
      position={position}
      onClick={onClick}
      ref={markerRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={scale}
    >
      <planeGeometry args={[0.25, 0.3]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

function EarthWithMarkers({
  camera,
  setactive,
  active,
  setLocationName,
}: {
  camera: THREE.Camera | null;
  setactive: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  setLocationName: React.Dispatch<React.SetStateAction<string>>;
}) {
  const earthGroupRef = useRef<THREE.Group>(null);

  const locations = [
    { name: "Australia", lat: -160.8688, lng: -135.2093 },
    { name: "India", lat: -335.5937, lng: -12.9629 },
    { name: "UAE", lat: -333.276987, lng: -34.296249 },
    { name: "Canada", lat: -312.2827, lng: -195.1207 },
    { name: "Vietnam", lat: -344.0583, lng: -1061.2772 },
  ];

  useFrame(() => {
    if (earthGroupRef.current && !active) {
      earthGroupRef.current.rotation.y += 0.002;
    }
  });

  const handleclick = (name: string) => {
    setactive(true);
    setLocationName(name);
  };
  
  if (active == true) {
    document.body.style.overflow = "hidden";
  }else{
    document.body.style.overflow = "auto";
  }
  return (
    <group ref={earthGroupRef}>
      <EarthModel />

      {locations.map((location, index) => (
        <LocationMarker
          key={index}
          lat={location.lat}
          lng={location.lng}
          camera={camera}
          onClick={() => handleclick(location.name)}
        />
      ))}
    </group>
  );
}

function EarthModel() {
  const gltf = useGLTF("/assets/earth/scene.gltf");
  return <primitive object={gltf.scene} scale={0.5} />;
}

export default function My3DModel() {
  const [cameraRef, setCameraRef] = useState<THREE.Camera | null>(null);
  const [active, setActive] = useState(false);
  const [locationName, setLocationName] = useState("");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Canvas
        shadows
        camera={{ position: [10, 5, 10], fov: 22 }}
        // screenWidth > 1024 ? 25 :
        onCreated={({ camera }) => setCameraRef(camera)}
      >
        <Suspense fallback={null}>
          <hemisphereLight groundColor={new THREE.Color(0x1a1a1a)} intensity={0.9} />
          <ambientLight intensity={0.5} />

          <EarthWithMarkers
            camera={cameraRef}
            active={active}
            setactive={setActive}
            setLocationName={setLocationName}
          />

          <OrbitControls
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            enableZoom={false}
          />
        </Suspense>
      </Canvas>

      {screenWidth > 720 ? <Popup active={active} setactive={setActive} location={locationName} /> 
      : <CustomDrawer location={locationName} active={active} setactive={setActive} />}
    </>
  );
}
