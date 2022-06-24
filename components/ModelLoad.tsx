import {
  Html,
  PerspectiveCamera,
  SpotLight,
  useAnimations,
  useGLTF,
  useScroll,
  useTexture,
  Cloud,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import {
  EffectComposer,
  Bloom,
  Noise,
  SelectiveBloom,
} from "@react-three/postprocessing";
import { useEffect, useLayoutEffect, useState } from "react";
import THREE, {
  ShaderMaterial,
  MeshStandardMaterial,
  LoopPingPong,
  Vector3,
  DoubleSide,
  FrontSide,
  BackSide,
  AlwaysDepth,
  NotEqualDepth,
  LessEqualDepth,
  LessDepth
} from "three";
import styles from "../styles/Component.module.scss";
import { damp } from "three/src/math/MathUtils";
import { motion } from "framer-motion";
import { FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import Image from "next/image";

const Model = (props) => {


  // const [clicked, setClicked] = useState(false);
  // Load Model
  const { scene, nodes, animations, cameras, materials } = useGLTF("fin.gltf");
  const { actions } = useAnimations(animations, cameras[0]);

  var effect, cube, cube_33, shadow_1, shadow_2, text_1, text_2, text_3, text_4, text_5, text_6, text_7;

  const cube_33_index = nodes.Scene.children.findIndex(x => x.name === "Cube033");
  cube_33 = nodes.Scene.children[cube_33_index];

  const text_index_1 = nodes.Scene.children.findIndex(x => x.name === "Text003");
  text_1 = nodes.Scene.children[text_index_1];

  const text_index_2 = nodes.Scene.children.findIndex(x => x.name === "Text004");
  text_2 = nodes.Scene.children[text_index_2];

  const text_index_3 = nodes.Scene.children.findIndex(x => x.name === "Text005");
  text_3 = nodes.Scene.children[text_index_3];

  const text_index_4 = nodes.Scene.children.findIndex(x => x.name === "Text012");
  text_4 = nodes.Scene.children[text_index_4];

  const text_index_5 = nodes.Scene.children.findIndex(x => x.name === "Text010");
  text_5 = nodes.Scene.children[text_index_5];

  const text_index_6 = nodes.Scene.children.findIndex(x => x.name === "Text009");
  text_6 = nodes.Scene.children[text_index_6];

  const text_index_7 = nodes.Scene.children.findIndex(x => x.name === "Text008");
  text_7 = nodes.Scene.children[text_index_7];

  const shadow_index_1 = nodes.Scene.children.findIndex(x => x.name === "Text014");
  shadow_1 = nodes.Scene.children[shadow_index_1];

  const shadow_index_2 = nodes.Scene.children.findIndex(x => x.name === "Text015");
  shadow_2 = nodes.Scene.children[shadow_index_2];

  const index = nodes.Scene.children.findIndex(x => x.name === "Plane006");
  effect = nodes.Scene.children[index];

  const cubeIndex = nodes.Scene.children.findIndex(x => x.name === "Cube027");
  nodes.Scene.children[cubeIndex].visible = false;

  const PlaneIndex = nodes.Scene.children.findIndex(x => x.name === "Plane057");
  nodes.Scene.children[PlaneIndex].visible = false;
  cube = nodes.Scene.children[PlaneIndex];


  const x = useAnimations(animations, scene);
  // const material2 = new MeshStandardNodeMaterial();
  // console.log(materials["ProceduralScifiPanels"])
  // Load Textures
  const Body = useTexture([
    "/Assets/Final_Sneak_Peek.png",
    "/Assets/ludvig-wiese-d-MfHM-jHwc-unsplash.jpg",
    "/Assets/Asset_4.png",
    "/Assets/Asset_5.png",
    "/Assets/x_alb2x.png",
    "/Assets/love_alb2x.png",
    "/Assets/text2x.png",
    "/Assets/concrete.png",
    "/Assets/metal.png",
    "/Assets/slider.png",
    "/Assets/space_ao.png",
    "/Assets/space_color.png",
    "/Assets/space_displace.png",
    "/Assets/space_normal.png",
    "/Assets/space_roughness.png",
    "/Assets/wood.jpg",
  ]);
  // Create Materials
  let map0, map1, map2, map3, map4, map5, map6, map7, map8;
  const effect_map1 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
    color: "#00ff00",
  });
  let coloronly = new MeshStandardMaterial({
    color: "#cb21ff",
    transparent: true,
    opacity: 0.3,
    side: DoubleSide
  });
  let coloronly1 = new MeshStandardMaterial({
    color: "#bb5500",
    transparent: true,
    side: DoubleSide,
    opacity: 0.35
    // defines: materials.Coffee,
  });
  let coloronly13 = new MeshStandardMaterial({
    // color: "#cf33ff",
    color: "#ffffff",
    transparent: true,
    side: DoubleSide,
    depthFunc: AlwaysDepth,
    opacity: 0.17
    // defines: materials.Coffee,
  });
  let coloronly14 = new MeshStandardMaterial({
    color: "#cf33ff",
    // color: "#ffffff",
    transparent: true,
    side: DoubleSide,
    depthFunc: AlwaysDepth,
    opacity: 1
    // defines: materials.Coffee,
  });
  let coloronly16 = new MeshStandardMaterial({
    color: "#bA3904",
    transparent: true,
    side: DoubleSide,
    opacity: 0.35
    // defines: materials.Coffee,
  });
  let coloronly17 = new MeshStandardMaterial({
    color: "#cf33ff",
    transparent: true,
    side: DoubleSide,
    opacity: 0.35
    // defines: materials.Coffee,
  });
  let coloronly19 = new MeshStandardMaterial({
    color: "#cf33ff",
    // color: "#ffffff",
    transparent: true,
    side: DoubleSide,
    depthFunc: LessDepth,
    opacity: 1
    // defines: materials.Coffee,
  });
  let coloronly20 = new MeshStandardMaterial({
    color: "#040404",
  });
  let coloronly18 = new MeshStandardMaterial({
    color: "#cf33ff",
    transparent: true,
    side: DoubleSide,
    opacity: 0.4
    // defines: materials.Coffee,
  });
  let coloronly15 = new MeshStandardMaterial({
    color: "#b0A0A0",
    transparent: true,
    side: DoubleSide,
    depthFunc: LessDepth,
    opacity: 0.3
    // defines: materials.Coffee,
  });
  let coloronly8 = new MeshStandardMaterial({
    color: "#ff2500",
  });
  let shadow = new MeshStandardMaterial({
    color: "#000000",
    transparent: true,
    opacity: 0.35
  });
  let coloronly9 = new MeshStandardMaterial({
    color: "#ff1500",
  });
  let coloronly2 = new MeshStandardMaterial({
    color: "#0d0d0d",
    map: Body[7],
  });
  let coloronly3 = new MeshStandardMaterial({
    color: "#00ff00",
    // map:
  });
  let coloronly4 = new MeshStandardMaterial({
    color: "#0a0a0a",
    map: Body[8],
  });
  let coloronly5 = new MeshStandardMaterial({
    color: "#000000",
    map: Body[8],
  });
  let coloronly6 = new MeshStandardMaterial({
    color: "#0a0a0a",
    aoMap: Body[10],
    map: Body[11],
    // displacementMap: Body[12],
    normalMap: Body[13],
    roughnessMap: Body[14],
  });
  let coloronly7 = new MeshStandardMaterial({
    map: Body[15],
  });
  let coloronly10 = new MeshStandardMaterial({
    color: "#ffffff",
    side: FrontSide,
    opacity: 0.2,
    transparent: true
  });
  let coloronly11 = new MeshStandardMaterial({
    color: "#000000",
    side: FrontSide,
  });
  let coloronly12 = new MeshStandardMaterial({
    color: "#111111",
    side: FrontSide,
  });
  // let coloronlylvl = materials['ProceduralScifiPanels']
  // map: materials.LVL,;
  map0 = new MeshStandardMaterial({
    map: Body[1],
    // color: "#ff0000",
  });
  map1 = new MeshStandardMaterial({
    map: Body[0],
    color: "#ffffff",
  });
  map2 = new MeshStandardMaterial({
    map: Body[2],
    color: "#0055ff",
    transparent: true,
    opacity: 0.5,
    side: FrontSide
  });
  map3 = new MeshStandardMaterial({
    map: Body[3],
    color: "#0055ff",
    transparent: true,
    opacity: 0.5,
    side: FrontSide
  });
  map4 = new MeshStandardMaterial({
    map: Body[4],
    transparent: true,
    opacity: 1,
    color: "#004422",
  });
  map5 = new MeshStandardMaterial({
    map: Body[5],
    transparent: true,
    opacity: 0.45,
    // side: DoubleSide,
    color: "#00ff33",
  });
  map6 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
  });
  map7 = new MeshStandardMaterial({
    map: Body[6],
    transparent: true,
    color: "#048b95",
  });
  map8 = new MeshStandardMaterial({
    map: Body[9],
    transparent: true,
    opacity: 0.7,
    // depthFunc: NotEqualDepth,
    side: DoubleSide
  });
  const WithoutMAP = [
    { childID: "Plane", mtl: coloronly2 },
    { childID: "Cylinder016", mtl: coloronly3 },
    { childID: "1thfloor", mtl: coloronly4 },
    { childID: "2thfloor", mtl: coloronly4 },
    { childID: "3thfloor", mtl: coloronly4 },
    { childID: "4thfloor", mtl: coloronly4 },
    { childID: "Cube005", mtl: coloronly4 },
    // { childID: "Cylinder021", mtl: coloronly3 },
    { childID: "Cube007", mtl: coloronly4 },
    { childID: "Cube008", mtl: coloronly3 },
    //
    { childID: "Cube014", mtl: coloronly2 },
    { childID: "Cube010", mtl: coloronly2 },
    { childID: "Cube011", mtl: coloronly2 },
    { childID: "Cube013", mtl: coloronly2 },
    { childID: "Cube080", mtl: coloronly2 },
    { childID: "Plane009", mtl: coloronly2 },
    { childID: "Cube076", mtl: coloronly2 },
    { childID: "Cube077", mtl: coloronly2 },
    { childID: "Cube078", mtl: coloronly2 },
    { childID: "Road2", mtl: coloronly2 },
    { childID: "Road3", mtl: coloronly2 },
    { childID: "Road4", mtl: coloronly2 },
    { childID: "Road5", mtl: coloronly2 },
    { childID: "Cube012", mtl: coloronly6 },
    { childID: "Cube014", mtl: coloronly6 },
    { childID: "Cube029", mtl: coloronly6 },
    { childID: "Cube128", mtl: coloronly6 },
    { childID: "Cube121", mtl: coloronly6 },
    { childID: "Cube122", mtl: coloronly6 },
    { childID: "Cube125", mtl: coloronly6 },
    { childID: "Cube127", mtl: coloronly6 },
    { childID: "Cube017", mtl: coloronly4 },
    { childID: "Cube019", mtl: coloronly4 },
    { childID: "Cube006", mtl: coloronly4 },
    { childID: "Cube021", mtl: coloronly4 },
    { childID: "Cube023", mtl: coloronly4 },
    { childID: "Cube053", mtl: coloronly10 },
    { childID: "Cube137_1", mtl: coloronly10 },
    { childID: "Cube084_1", mtl: coloronly10 },
    // { childID: "Cube061_1", mtl: coloronly10 },
    // { childID: "Cube136_1", mtl: coloronly10 },
    { childID: "Cube025", mtl: materials.Metal_Aluminum_Anodized },
    { childID: "Cube074", mtl: materials.Upperfog },
    //
    { childID: "Text003", mtl: coloronly13 },
    { childID: "Text006", mtl: coloronly18 },
    { childID: "Text008", mtl: coloronly17 },
    { childID: "Text019", mtl: coloronly },
    { childID: "Text020", mtl: coloronly },
    { childID: "Text021", mtl: coloronly },
    { childID: "Plane010", mtl: coloronly },
    { childID: "Plane011", mtl: coloronly },
    { childID: "Plane012", mtl: coloronly },
    { childID: "Plane015", mtl: coloronly },
    { childID: "Text", mtl: coloronly1 },
    { childID: "Text001", mtl: coloronly1 },
    { childID: "Text002", mtl: coloronly1 },
    { childID: "Text004", mtl: coloronly1 },
    { childID: "Text005", mtl: coloronly1 },
    { childID: "Text009", mtl: coloronly1 },
    { childID: "Text010", mtl: coloronly16 },
    { childID: "Text011", mtl: coloronly1 },
    { childID: "Text012", mtl: coloronly1 },
    { childID: "Text014", mtl: coloronly8 },
    { childID: "Text015", mtl: coloronly9 },
    { childID: "Text016", mtl: coloronly1 },
    { childID: "Text017", mtl: coloronly1 },
    { childID: "Text013", mtl: coloronly3 },
    { childID: "Text022", mtl: coloronly3 },
    { childID: "G-__556086.005", mtl: coloronly },
    { childID: "G-__557724", mtl: coloronly4 },
    { childID: "Balcony_Strips", mtl: coloronly2 },
    { childID: "G-Difference", mtl: coloronly12 },
    { childID: "G-Difference002", mtl: coloronly12 },
    { childID: "G-__557724", mtl: coloronly7 },
    { childID: "G-__556122", mtl: coloronly7 },
    { childID: "G-__556095", mtl: coloronly7 },
    { childID: "G-__556095001", mtl: coloronly7 },
    { childID: "G-__556095002", mtl: coloronly7 },
    { childID: "G-__556095003", mtl: coloronly7 },
    { childID: "G-__556095004", mtl: coloronly7 },
    { childID: "G-__556095005", mtl: coloronly7 },
    { childID: "G-__556095006", mtl: coloronly7 },
    { childID: "G-__556104", mtl: coloronly7 },
    { childID: "G-__556104001", mtl: coloronly7 },
    { childID: "G-__556104002", mtl: coloronly7 },
    { childID: "G-__556104003", mtl: coloronly7 },
    { childID: "G-__556104004", mtl: coloronly7 },
    { childID: "G-__556104005", mtl: coloronly7 },
    { childID: "G-__556104006", mtl: coloronly7 },
    { childID: "G-__556131", mtl: coloronly7 },
    { childID: "G-__556131001", mtl: coloronly7 },
    { childID: "G-__556131002", mtl: coloronly7 },
    { childID: "G-__556131003", mtl: coloronly7 },
    { childID: "G-__556131004", mtl: coloronly7 },
    { childID: "G-__556131005", mtl: coloronly7 },
    { childID: "G-__556131006", mtl: coloronly7 },
    { childID: "G-__556113", mtl: coloronly7 },
    { childID: "G-__556113001", mtl: coloronly7 },
    { childID: "G-__556113002", mtl: coloronly7 },
    { childID: "G-__556113003", mtl: coloronly7 },
    { childID: "G-__556113004", mtl: coloronly7 },
    { childID: "G-__556113005", mtl: coloronly7 },
    { childID: "G-__556113006", mtl: coloronly7 },
    { childID: "G-__556077", mtl: coloronly7 },
    { childID: "G-__556077001", mtl: coloronly7 },
    { childID: "G-__556077002", mtl: coloronly7 },
    { childID: "G-__556077003", mtl: coloronly7 },
    { childID: "G-__556077004", mtl: coloronly7 },
    { childID: "G-__556077005", mtl: coloronly7 },
    { childID: "G-__556077006", mtl: coloronly7 },
    { childID: "G-__556068", mtl: coloronly7 },
    { childID: "G-__556068001", mtl: coloronly7 },
    { childID: "G-__556068002", mtl: coloronly7 },
    { childID: "G-__556068003", mtl: coloronly7 },
    { childID: "G-__556068004", mtl: coloronly7 },
    { childID: "G-__556068005", mtl: coloronly7 },
    { childID: "G-__556068006", mtl: coloronly7 },
    { childID: "G-__556122", mtl: coloronly7 },
    { childID: "G-__556122001", mtl: coloronly7 },
    { childID: "G-__556122002", mtl: coloronly7 },
    { childID: "G-__556122003", mtl: coloronly7 },
    { childID: "G-__556122004", mtl: coloronly7 },
    { childID: "G-__556122005", mtl: coloronly7 },
    { childID: "G-__556122006", mtl: coloronly7 },
    { childID: "G-__556086001", mtl: coloronly11 },
    { childID: "G-__556167001", mtl: coloronly11 },
    { childID: "G-__556086002", mtl: coloronly11 },
    { childID: "G-__556086003", mtl: coloronly11 },
    { childID: "G-__556086004", mtl: coloronly11 },
    { childID: "G-__556086005", mtl: coloronly11 },
    { childID: "G-__556086006", mtl: coloronly11 },
  ];
  const WithMAP = [
    { childID: "GroundFog", mtl: coloronly5 },
    // beau
    { childID: "Plane001", mtl: map2 },
    // coup
    { childID: "Plane008", mtl: map3 },
    // team1
    { childID: "Plane013", mtl: map0 },
    // team2
    { childID: "Plane014", mtl: map1 },
    // cross
    { childID: "Plane004", mtl: map4 },
    // love
    { childID: "Plane005", mtl: map5 },
    // imgbytext
    { childID: "Plane003", mtl: map1 },
    // txt
    { childID: "Plane006", mtl: map7 },
    // slider
    { childID: "Slider", mtl: map8 },
  ];

  const withTexture = (parent, type, mtl) => {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name == type) {
          o.material = mtl;
          o.material.map.flipY = false;
        }
      }
    });
  };

  const withoutTexture = (parent, type, mtl) => {
    parent.traverse((o) => {
      if (o.isMesh) {
        if (o.name == type) {
          o.material = mtl;
        }
      }
    });
  };

  if (scene) {
    for (let object of WithMAP) {
      withTexture(scene, object.childID, object.mtl);
    }
  }

  if (scene) {
    for (let object of WithoutMAP) {
      withoutTexture(scene, object.childID, object.mtl);
    }
  }

  useLayoutEffect(() =>
    Object.values(nodes).forEach(
      (node) => (node.receiveShadow = node.castShadow = true)
    )
  );

  function animate() {
    requestAnimationFrame(animate);
    nodes.Slider.rotation.z += 0.01;

    // nodes.Text017.position.x += 0.1;
  }

  const scroll = useScroll();

  useEffect(() => {
    void (actions["CameraAction"].play().paused = true), [actions];
  });
  x.actions["Text.017Action"].play();

  useFrame((state, delta) => {
    const action = actions["CameraAction"];
    const offset = scroll.offset;
    action.time = damp(
      action.time,
      action.getClip().duration * offset,
      10,
      delta
    );

    state.camera.position.set(
      cameras[0].position.x,
      cameras[0].position.y,
      cameras[0].position.z
    );
    state.camera.rotation.set(
      cameras[0].rotation.x,
      cameras[0].rotation.y,
      cameras[0].rotation.z
    );
    // {
    //   clicked &&
    //     window.scrollBy(
    //       0,
    //       (action.time = damp(
    //         action.time,
    //         1 - action.getClip().duration,
    //         10,
    //         1
    //       ))
    //     );
    // }
  });

  animate();
  function Nav() {
    const [toggle, setToggle] = useState(false);

    return (
      <Html>
        <div className={styles.nav}>
          <div
            className={styles.toggleContainer}
            onClick={() => {
              setToggle(true);
            }}
          >
            {toggle ? (
              ""
            ) : (
              <>
                <Image
                  src="/Assets/nav/toggle-1.png"
                  alt=""
                  width={60}
                  height={20}
                />
                <Image
                  src="/Assets/nav/toggle-2.png"
                  alt=""
                  width={60}
                  height={20}
                />
              </>
            )}
          </div>
          <div className={styles.menuContainer}>
            <div className={styles.pentagon}>Meet your Sifter</div>
            <div className={styles.social}>
              <FaTwitter size={30} />
            </div>
          </div>
        </div>
        {toggle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            }}
            className={styles.popUp}
          >
            <div className={styles.toggleWrapper}>
              <div className={styles.toggleContent}>
                <div
                // onClick={() => {
                // setClicked(true);
                // scroll2.offset.toFixed(10);
                // }}
                >
                  <p>ABOUT</p>
                </div>
                <div>
                  <p>TEAM</p>
                </div>
                <div>
                  <p>ROADMAP</p>
                </div>
                <div>
                  <p>MEET YOUR SIFTER</p>
                </div>
              </div>
              <div
                className={styles.closeBtn}
                onClick={() => {
                  setToggle(false);
                }}
              ></div>
            </div>
          </motion.div>
        )}
      </Html>
    );
  }

  function Team() {
    function replace(hide, show) {
      document.getElementById(hide).style.display = "none";
      document.getElementById(show).style.display = "block";
    }
    return (
      <Html transform occlude position={[4, -5, 19]} rotation={[1.6, 1.6, 0]}>
        <div className={styles.teamContainer}>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            pagination={{
              clickable: true,
            }}
            creativeEffect={{
              prev: {
                // shadow: true,
                translate: ["-100%", 0, -1],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Pagination]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Lovin.jpeg"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Lovin</h1>
                    <p>
                      Mastermind (Project Manager). First to live and die for
                      the movement Built identities for 15 years. Has worked
                      incognito with Audesser brands: Mercedes, Pepsi, Rockstar;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Bishop.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Bishop</h1>
                    <p>
                      The Black Chapeau (Developer) Beau Coup's shepherd of
                      clever minds. Connects the Sifter channels. Crypto
                      Adaptor, having worked on various Decentralized systems;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Smoke.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Smoke</h1>
                    <p>
                      Orateur extraordinaire (Marketer) Propaganda leader,
                      Audesser's most wanted. Recruited from web 2.0 for his
                      talents.
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Rust.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Rust</h1>
                    <p>
                      Chef Comptroller (Financials) Never shot a gun yet he
                      always has the money shot. Supply and currency manager;
                      Keeps the organization stable Managed a 70 personnel
                      company.
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Gman.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Gman</h1>
                    <p>
                      The White Chapeau (Protection) Builder of walls of fire
                      and brimstone. Security of the Beau Coup servers;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Moon-Bagger.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - Moon-Bagger</h1>
                    <p>
                      Flag Porteur (Community Manager) As long as he's standing,
                      the movement lives on. Raid strategist; Novice trainer
                      Well connected in the Asian space; Web 3.0 adaptor
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/MercedHees.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION ID NAME - MercedHees</h1>
                    <p>
                      Beau Crowd whisperer (Community Manager) He makes your
                      head spin and you're gonna love it. Defense strategist;
                      Leader in diplomacy.
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Insurgents.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION GROUP NAME - Insurgents</h1>
                    <p>
                      Ximads; Direé; Sanchez; EuroSadBoy; Frank Beaucoup Beaus
                      (Artists) Creators of propaganda. The movement paints the
                      world with their hands. Worked with brands such as: Nike;
                      Rebook including many more;
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.collection}>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/Enforcers.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION GROUP NAME - Enforcers</h1>
                    <p>
                      Darkblizzard; DocHuckleberry; Samseo; HarryNiu HKJC; K7;
                      Matei; Siomay; Ganjagymgod; HotmessMellow Moderators; The
                      Beau Coup's Tier 1
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
                <div className={styles.teamWrapper}>
                  <div className={styles.teamImage}>
                    <Image
                      src="/Assets/team/strategist.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className={styles.label}>
                    <h1>ORGANIZATION GROUP NAME - Strategist</h1>
                    <p>
                      Dyno; Ayhth; Haputt; Jfx187; Mike Costache Advisers; The
                      Beau Coup's consultants M.C. has managed Hedge Funds;
                      Haputt part of leading VC Asia Dyno Co-founder of 721club,
                      OpenDAO
                    </p>
                  </div>
                  <div className={styles.line} />
                  <div className={styles.circle} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </Html>
    );
  }

  return (
    <>
      <group>
        <Team />
      </group>
      <group>
        <PerspectiveCamera makeDefault name="Camera" fov={22.89} far={1000} />
        {/* <Nav /> */}
        <SpotLight
          position={[20, -20, 7]}
          distance={14}
          angle={2}
          attenuation={5}
          color={"#ffffff"}
          anglePower={4}
          name={'light_1'}
          castShadow={true}
        />
        <SpotLight
          position={[22.01, -21.380, 7]}
          intensity={0.3}
          distance={14}
          angle={2}
          attenuation={5}
          color={"#ffffff"}
          anglePower={4}
          name={'light_2'}
          castShadow={true}
        />
        <SpotLight
          position={[6, -3.8, 12.3]}
          distance={10}
          angle={3}
          attenuation={4}
          color={"#fb00ff"}
          anglePower={6}
          target={nodes.Plane016}
        />
        <group
          name="spot_light_0_0"
          position={[10.100, -15.860, 4.840]}
        >
          <SpotLight
            distance={5.450}
            angle={1.271}
            intensity={1.453}
            attenuation={4}
            color={"#c9c9c9"}
            anglePower={6}
            penumbra={0.04}
          />
        </group>
        <group
          name="spot_light_0_0_1"
          position={[10.040, -15.580, 2.584]}
        >
          <SpotLight
            distance={3.360}
            angle={1.261}
            intensity={2.590}
            attenuation={4}
            color={"#c9c9c9"}
            anglePower={6}
            penumbra={0.04}
          />
        </group>
        <group
          name="spot_light_0_0_2"
          position={[5.960, -15.800, 2.584]}
        >
          <SpotLight
            distance={1.920}
            angle={1.511}
            intensity={4.000}
            attenuation={4}
            color={"#c9c9c9"}
            anglePower={6}
            penumbra={0.04}
          />
        </group>
        <group
          name="point_light_0_1"
          position={[11, -16, 3.35]}
        >
          <pointLight
            color={"#00ff00"}
            power={50}
            intensity={6}
            distance={2.07}
            decay={2}
          />
        </group>
        <group
          name="point_light_0"
          position={[14.3, -16.6, 4.6]}
        >
          <pointLight
            color={"#00ff00"}
            power={50}
            intensity={6}
            distance={2.07}
            decay={2}
          />
        </group>
        <group
          name="point_light_1"
          position={[15.209, -17.196, 1.846]}
        >
          <pointLight
            color={"#aa3500"}
            power={50}
            intensity={6}
            distance={2.07}
            decay={2}
          />
        </group>
        <group
          name="point_light_2"
          position={[13.659, -17.036, 0.636]}
        >
          <SpotLight
            distance={3}
            angle={3}
            intensity={1.270}
            attenuation={4}
            color={"#fb00ff"}
            anglePower={6}
          />
        </group>
        <group
          name="point_light_3"
          position={[10.439, -17.126, 1.516]}
        >
          <SpotLight
            distance={3}
            angle={3}
            intensity={1}
            attenuation={4}
            color={"#ffa629"}
            anglePower={6}
          />
        </group>
        <group
          name="point_light_4"
          position={[6.670, -18.156, 1.685]}
        >
          <SpotLight
            distance={3}
            angle={3}
            intensity={1.23}
            attenuation={4}
            color={"#fb00ff"}
            anglePower={6}
          />
        </group>
        <pointLight
          color={"#fb00ff"}
          position={[4, -11, 13]}
          power={50}
          distance={10}
          decay={2}
        />
        <pointLight
          color={"#fb00ff"}
          position={[6.5, -15, 30]}
          power={100}
          distance={6}
          decay={2}
        />
        <group rotation={[0, 0.1, 0]}>
          <pointLight
            color={"#fb00ff"}
            position={[-0.5, -9, 25]}
            power={200}
            distance={4}
            decay={2}
          />
        </group>
        <pointLight
          position={[-0.5, 20, 115]}
          color={"#fb00ff"}
          power={100}
          distance={40}
        />

        {/* <EffectComposer> */}
        {/* <SelectiveBloom
          selection={[
            // nodes.Cube008,
            // nodes.Plane001,
            // nodes.Plane008,
            // nodes.Plane005,
            // nodes.Plane004,
            // nodes.Text,
            // nodes.Text001,
            // nodes.Text002,
            // nodes.Text004,
            // nodes.Text005,
            // nodes.Text009,
            // nodes.Text010,
            // nodes.Text011,
            // nodes.Text012,
            // nodes.Text014,
            // nodes.Text015,
            // nodes.Text003,
            // nodes.Text008,
            // nodes.Text017,
            // nodes.Text018,
            // nodes.Text019,
            // nodes.Text020,
            // nodes.Text021,
            // nodes.Plane010,
            // nodes.Plane011,
            // nodes.Plane006,
            // nodes.Plane012,
            // nodes.Plane015,
            // nodes.Cube012,
          ]}
          luminanceThreshold={-0.5}
          luminanceSmoothing={-500}
          height={1000}
        /> */}
        {/* <Noise premultiply={true} opacity={6} /> */}
        <primitive object={scene} {...props}>
          <mesh />
        </primitive>
        {/* <mesh  position={[20.127, -10.159, 7.288]} rotation={[Math.PI / 2, 0, 0]} name="effect_plane_1">
            <planeBufferGeometry attach="geometry" args={[2.770, 5.770]} />
            <meshStandardMaterial attach="material" color={'#00ff00'} map={EffectTexture[0]} />
          </mesh> */}
        <mesh name="effect_plane_1" geometry={effect.geometry} material={effect_map1} position={[20.137, -10.179, 7.283]} rotation={[Math.PI / 2, 0, 0]} scale={[1.361, 2.849, 2.849]} />
        <mesh name="effect_plane_2" geometry={cube.geometry} position={[10.046, -10.179, 11.528]} rotation={[Math.PI / 2, 0, 0]} scale={[1.361, 2.849, 2.849]} />
        <mesh name="shadow_1" geometry={shadow_1.geometry} material={shadow} position={[11.388, -19.92, -0.23]} rotation={[0, 0, - Math.PI / 2]} scale={[2.246, 2.246, 2.246]} />
        <mesh name="shadow_1" geometry={shadow_2.geometry} material={shadow} position={[23.188, -19.92, -0.23]} rotation={[0, 0, - Math.PI / 2]} scale={[2.246, 2.246, 2.246]} />
        <mesh name="text_1" geometry={text_1.geometry} material={coloronly14} position={[5.086, -15.828, 1.195]} rotation={[Math.PI / 2, 0, 0]} scale={[1.182, 1.182, 0.01]} />
        <mesh name="text_2" geometry={text_2.geometry} material={coloronly15} position={[8.094, -15.848, 1.67]} rotation={[Math.PI / 2, 0, 0.054]} scale={[0.623, 0.623, 0.01]} />
        <mesh name="text_3" geometry={text_3.geometry} material={coloronly15} position={[9.641, -15.858, 1.725]} rotation={[Math.PI / 2, 0, -0.019]} scale={[0.902, 0.902, 0.01]} />
        <mesh name="text_4" geometry={text_4.geometry} material={coloronly15} position={[11.455, -15.878, 1.67]} rotation={[Math.PI / 2, 0, 0.041]} scale={[0.771, 0.771, 0.01]} />
        <mesh name="text_6" geometry={text_6.geometry} material={coloronly15} position={[7.578, -16.675, 1.597]} rotation={[0.061, 1.562, 1.514]} scale={[1, 1, 0.01]} />
        <mesh name="text_5" geometry={text_5.geometry} material={coloronly16} position={[15.433, -17.255, 1.504]} rotation={[-2.872, 0.001, 3.035]} scale={[1.126, 1.296, 0.310]} />
        <mesh name="text_7" geometry={text_7.geometry} material={coloronly19} position={[13.179, -15.916, 0.446]} rotation={[Math.PI / 2, 0, 0]} scale={[0.455, 0.455, 0.01]} />
        {/* <mesh name="cube_33" geometry={cube_33.geometry} material={coloronly20} position={[5.757, -15.060, 1.119]} rotation={[0, 0, 0]} scale={[11.106, 0.883, 1.236]} /> */}
        {/* </EffectComposer> */}
      </group>
    </>
  );
};

export default Model;