import * as React from "react";
import * as Ammo from "ammojs-typed";

import * as BABYLON from "babylonjs";
import BabylonScene, { SceneEventArgs } from "./Scene";

interface Props {
  accent: string;
}

export default class Background extends React.Component<Props, {}> {
  onSceneMount = (e: SceneEventArgs) => {
    const { canvas, scene, engine } = e;
    var pick: BABYLON.Vector2 = new BABYLON.Vector2(0, 0);
    window.addEventListener("mousemove", function() {
      pick = new BABYLON.Vector2(scene.pointerX, scene.pointerY);
    });
    scene.clearColor = new BABYLON.Color4(0.04, 0.04, 0.04, 1.0);
    scene.fogMode = BABYLON.Scene.FOGMODE_LINEAR;
    scene.fogColor = scene.clearColor;

    scene.fogDensity = 0.02;
    scene.fogStart = -20.0;
    scene.fogEnd = 40.0;
    // scene.forceWireframe = true;
    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      Math.PI / -2,
      Math.PI / 2,
      30,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );
    // add visual effects

    var parameters = {
      edge_blur: 1,
      chromatic_aberration: 1,
      distortion: 1,
      grain_amount: 0.6
      // dof_focus_distance: 18,
      // dof_pentagon: true
      // etc.
    };
    var lensEffect = new BABYLON.LensRenderingPipeline(
      "lensEffects",
      parameters,
      scene,
      1.0,
      camera
    );

    BABYLON.Effect.ShadersStore.colorifyVertexShader =
      "precision highp float;attribute vec3 position;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec2 vUV;void main(){gl_Position=worldViewProjection*vec4(position,1.),vUV=uv;}";
    BABYLON.Effect.ShadersStore.colorifyPixelShader =
      "precision highp float;varying vec2 vUV;uniform sampler2D textureSampler;uniform vec3 color;void main(){vec4 texel=texture2D(textureSampler,vUV);vec3 luma=vec3(.299,.587,.114);float v=dot(texel.xyz,luma);gl_FragColor=vec4(v*color,texel.w);}";

    BABYLON.Effect.ShadersStore.julianVertexShader =
      "precision highp float;attribute vec3 position;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec2 vUV;void main(){gl_Position=worldViewProjection*vec4(position,1.),vUV=uv;}";
    BABYLON.Effect.ShadersStore.julianPixelShader =
      "precision highp float;varying vec2 vUV;uniform sampler2D textureSampler;void main(){float pixel_w=2.,pixel_h=3.,rt_w=2000.,rt_h=2000.;vec3 tc=vec3(1.,0.,0.);float dx=pixel_w*(1./rt_w),dy=pixel_h*(1./rt_h);vec2 coord=vec2(dx*floor(vUV.x/dx),dy*floor(vUV.y/dy));tc=texture2D(textureSampler,coord).xyz;gl_FragColor=vec4(tc,1.);}";

    var julian = new BABYLON.PostProcess(
      "julian",
      "julian",
      null,
      null,
      1,
      camera
    );

    var postProcess = new BABYLON.ImageProcessingPostProcess(
      "processing",
      1.0,
      camera
    );
    var curve = new BABYLON.ColorCurves();
    // curve.globalHue = 200;
    curve.globalDensity = 30;
    curve.globalSaturation = 90;

    // curve.highlightsHue = 20;
    // curve.highlightsDensity = 80;
    // curve.highlightsSaturation = -80;

    // curve.shadowsHue = 2;
    // curve.shadowsDensity = 80;
    // curve.shadowsSaturation = 40;
    postProcess.colorCurvesEnabled = true;
    postProcess.colorCurves = curve;

    // camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight(
      "hemiLight",
      new BABYLON.Vector3(-30, -100, -100),
      scene
    );
    light.intensity = 3;
    // var light = new BABYLON.PointLight("hemiLight", new BABYLON.Vector3(0, 0, -75), scene);
    // light.intensity = 800

    // var light2 = new BABYLON.PointLight("hemiLight", new BABYLON.Vector3(0, 0, 100), scene);
    // light2.intensity = 800

    // var cover = new BABYLON.StandardMaterial("cover", scene);
    // cover.diffuseTexture = new BABYLON.Texture("colors.png");
    // cover.backFaceCulling = false;

    var pbr = new BABYLON.PBRMetallicRoughnessMaterial("pbr", scene);
    pbr.baseColor = new BABYLON.Color3(25 / 255, 25 / 255, 25 / 255);
    pbr.roughness = 0.8; // Let the texture controls the value
    pbr.metallic = 0.1;

    const planes: BABYLON.Mesh[] = [];

    var colors = [
      new BABYLON.Color3(1, 1, 1),
      new BABYLON.Color3(93 / 255, 195 / 255, 165 / 255),
      new BABYLON.Color3(0.2, 0.46, 0.38),
      new BABYLON.Color3(0.0, 0.0, 0.0),
      new BABYLON.Color3(0.32, 0.32, 0.31),
      new BABYLON.Color3(0.4, 0.06, 0.3),
      new BABYLON.Color3(0.6, 0.6, 0.62),
      new BABYLON.Color3(0.2, 0.46, 0.38),
      new BABYLON.Color3(16 / 255, 127 / 255, 33 / 255),
      new BABYLON.Color3(217 / 255, 145 / 255, 233 / 255),
      new BABYLON.Color3(157 / 255, 224 / 255, 159 / 255)
    ];

    for (var i = 0; i < 18; i++) {
      var pbr = new BABYLON.PBRMetallicRoughnessMaterial("pbr", scene);
      pbr.baseColor = colors[1];
      pbr.roughness = 0.2; // Let the texture controls the value
      pbr.metallic = 0;
      pbr.useLogarithmicDepth = true;

      // var plane = BABYLON.MeshBuilder.CreateGround("plane" + i, { width: 120, height: 70, subdivisions: i + 2 }, scene);
      var plane = BABYLON.MeshBuilder.CreatePolyhedron(
        "tk",
        { size: 2.7, type: i % 12 },
        scene
      );

      plane.position.y = Math.random() * 40 - 20;
      plane.position.x = Math.random() * 50 - 25;
      plane.position.z = Math.random() * 20 - 10;
      plane.material = pbr;
      plane.rotation.y = Math.random() * Math.PI;
      plane.rotation.x = Math.random() * Math.PI;
      plane.rotation.z = Math.random() * Math.PI;

      planes.push(plane);
    }

    scene.collisionsEnabled = false;
    camera.checkCollisions = false;

    scene.enablePhysics(
      new BABYLON.Vector3(0, 0, 0),
      new BABYLON.AmmoJSPlugin(undefined, Ammo.default)
    );

    this.componentWillReceiveProps = (props: Props) => {
      light.groundColor = BABYLON.Color3.FromHexString(props.accent);
      // planes.forEach(plane => {
      //   var pbr = new BABYLON.PBRMetallicRoughnessMaterial("pbr", scene);
      //   pbr.baseColor = BABYLON.Color3.FromHexString(props.accent);
      //   pbr.roughness = 0.8; // Let the texture controls the value
      //   pbr.metallic = 0.1;
      //   pbr.useLogarithmicDepth = true;

      //   plane.material = pbr
      // });
    };

    planes.forEach(plane => {
      // plane.physicsImpostor = new BABYLON.PhysicsImpostor(plane, BABYLON.PhysicsImpostor.ParticleImpostor, { damping: 0, mass: 0, friction: 0, restitution: 0, fixedPoints: 15, margin: 0 }, scene);
      // plane.forceSharedVertices();
      // plane.increaseVertices(7);
      plane.physicsImpostor = new BABYLON.PhysicsImpostor(
        plane,
        BABYLON.PhysicsImpostor.MeshImpostor,
        { mass: 3, friction: 1, restitution: 0.8 },
        scene
      );
      // plane.physicsImpostor.pressure = -1;
      plane.physicsImpostor.velocityIterations = 2;
      plane.physicsImpostor.positionIterations = 2;
      plane.checkCollisions = false;
      var spin = 8;
      plane.physicsImpostor.applyImpulse(
        new BABYLON.Vector3(0, 0, spin),
        plane.getAbsolutePosition().add(new BABYLON.Vector3(0.1, 0, 0))
      );
      plane.physicsImpostor.applyImpulse(
        new BABYLON.Vector3(0, 0, -spin),
        plane.getAbsolutePosition().add(new BABYLON.Vector3(-0.1, 0, 0))
      );
      // plane.physicsImpostor.applyImpulse(
      //   new BABYLON.Vector3(
      //     Math.random() * -0.5,
      //     Math.random() * -0.5,
      //     Math.random() * -0.5
      //   ),
      //   plane.getAbsolutePosition()
      // );

      // plane.physicsImpostor.velocityIterations = 2;
      // plane.physicsImpostor.positionIterations = 2;
      // plane.physicsImpostor.stiffness = 0.1;
      // plane.physicsImpostor.unregisterOnPhysicsCollide
      // plane.physicsImpostor.physicsBody.ignoresCollisions = true;
      // plane.physicsImpostor.noCollisionsBetweenLinkedBodies = true;
      // pcs.addSurfacePoints(plane, 1);
    });
    // var ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 100, height: 100, subdivisions: 10 }, scene);
    // ground.material = pbr;
    // ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.PlaneImpostor, { mass: 1, friction: 0.5, restitution: 0 }, scene);
    // ground.position.y = -5;
    // ground.rotate(new BABYLON.Vector3(1, 0, 0), 1)
    // var ground = BABYLON.MeshBuilder.CreateBox("ground", { width: 200, depth: 80, height: 1, sideOrientation: -1 }, scene);
    // ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 5, restitution: 0 }, scene);
    // ground.position.y = -3
    // var pbr = new BABYLON.PBRMetallicRoughnessMaterial("pbr", scene);
    // pbr.alpha = 0
    // ground.material = pbr;

    // var ground = BABYLON.MeshBuilder.CreateBox("ground", { width: 80, depth: 80, height: 1 }, scene);
    // ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.5, restitution: 0 }, scene);

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }

      // if (Math.random() > .9) {
      // scene.gravity = new BABYLON.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5)
      // planes.forEach(plane => {
      //   // if (plane.position.z < -50 - (Math.random() * 10)) {
      //   //   plane.position.z = 20
      //   //   // plane.physicsImpostor!.setLinearVelocity(new BABYLON.Vector3(0, 0, -3))
      //   //   var spin = 2 * -Math.floor(Math.random())
      //   // plane.physicsImpostor!.applyImpulse(new BABYLON.Vector3(-2, 0, 0), plane.getAbsolutePosition().add(new BABYLON.Vector3(0, 1, 0)));
      //   // plane.physicsImpostor!.applyImpulse(new BABYLON.Vector3(2, 0, 0), plane.getAbsolutePosition().add(new BABYLON.Vector3(0, -1, 0)));
      //   plane.physicsImpostor!.applyImpulse(
      //     new BABYLON.Vector3(-pick.x * factor, factor * -pick.y, 0),
      //     plane.getAbsolutePosition()
      //   );
      // });
      // }
    });
  };

  render() {
    return <BabylonScene onSceneMount={this.onSceneMount} />;
  }
}
