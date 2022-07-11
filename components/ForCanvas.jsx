import {
  PerspectiveCamera,
  Preload,
  Scroll,
  ScrollControls,

} from "@react-three/drei";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Suspense, useEffect, useRef, useMemo, useState } from "react";
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { Vector2 } from "three";
import * as React from 'react';
import styles from "../styles/Component.module.scss";
import Model from "./ModelLoad";
import Image from 'next/image';
import { Html, useProgress } from '@react-three/drei'
import ScrollButton from './Shared/ScrollButton'
extend({ EffectComposer, RenderPass, FilmPass, UnrealBloomPass });

const Effect = () => {
  const composer = useRef();
  const { scene, gl, size, camera } = useThree();
  useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
  const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);
  useFrame(() => composer.current.render(), 1);
  return (
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <unrealBloomPass attachArray="passes" args={[aspect, 1.6, 1.3, 0.02]} />
      <filmPass attachArray="passes" args={[0.2, 0.8, 1500, false]} />
    </effectComposer>
  )
};

export default function ForCanvas() {

  const [showMenu, setShowMenu] = useState(false);
  const onHamburgerClick = () => {
    setShowMenu(true);
  }

  const onButtonClick = (options) => {
    if (options === 'close') {
    }
    setShowMenu(false);
  }



  return (
    <>
      <div
        className={styles.scene} id="div1">
        <Canvas
          shadows
        >
          <PerspectiveCamera />
          <fog attach="fog" args={["#050505", 280, 350]} />
          <ambientLight position={[-38.1183, -269.879, 175.15]} scale={1} />
          <Suspense fallback={<Html center><div className={styles.loading} /></Html>}>
            <ScrollControls pages={15} distance={3}>
              <Scroll>
                <Model scale={1} />
              </Scroll>
            </ScrollControls>
            <Preload all />
            <Effect />
          </Suspense>
        </Canvas>
      </div>
      {
        showMenu ?
          <div className={styles.menu}  >
            <div className={styles.buttons}>
              <div className={styles.button} onClick={() => { onButtonClick('about') }}>
                ABOUT
              </div>
              <div className={styles.button} onClick={() => { onButtonClick('team') }}>
                TEAM
              </div>
              <div className={styles.button} onClick={() => { onButtonClick('roadmap') }}>
                ROADMAP
              </div>
              <div className={styles.button} onClick={() => { onButtonClick('sifter') }}>
                MEET YOUR SIFTER
              </div>
            </div>
            <div className={styles.closeButton} onClick={() => { onButtonClick('close') }}>
              <Image
                src="/Assets/close.png"
                alt=""
                width={50}
                height={50}
              />
            </div>
          </div>
          :
          <div className={styles.menuButton} >
            <div className={styles.hamburger} onClick={() => { onHamburgerClick() }} >
              <Image
                src="/Assets/hamburger.png"
                alt=""
                width={60}
                height={60}
              />
            </div>
            <div className={styles.options}>
              <div className={styles.button} >
                <Image
                  src="/Assets/logo-mark.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.button}>
                <Image
                  src="/Assets/twitter.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <div className={styles.button}>
                <Image
                  src="/Assets/discord.png"
                  alt=""
                  width={30}
                  height={30}
                />
              </div>
              <ScrollButton />
            </div>
          </div>
      }
    </>
  );
}
// function Loader() {
//   const { progress } = useProgress()
//   // return <Html center>{progress} % loaded</Html>
//   return 
// }
