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

    var camera = new BABYLON.ArcRotateCamera(
      "Camera",
      Math.PI / -2,
      Math.PI / 2,
      30,
      new BABYLON.Vector3(0, 0, 0),
      scene
    );

    BABYLON.Effect.ShadersStore.colorifyVertexShader =
      "precision highp float;attribute vec3 position;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec2 vUV;void main(){gl_Position=worldViewProjection*vec4(position,1.),vUV=uv;}";
    BABYLON.Effect.ShadersStore.colorifyPixelShader =
      "precision highp float;varying vec2 vUV;uniform sampler2D textureSampler;uniform vec3 color;void main(){vec4 texel=texture2D(textureSampler,vUV);vec3 luma=vec3(.299,.587,.114);float v=dot(texel.xyz,luma);gl_FragColor=vec4(v*color,texel.w);}";

    var light = new BABYLON.HemisphericLight(
      "hemiLight",
      new BABYLON.Vector3(-30, -100, -100),
      scene
    );
    light.intensity = 3;

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
    };

    planes.forEach(plane => {
      plane.physicsImpostor = new BABYLON.PhysicsImpostor(
        plane,
        BABYLON.PhysicsImpostor.MeshImpostor,
        { mass: 3, friction: 1, restitution: 0.8 },
        scene
      );
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
    });

    engine.runRenderLoop(() => {
      if (scene) {
        scene.render();
      }
    });
  };

  render() {
    return <BabylonScene onSceneMount={this.onSceneMount} />;
  }
}
