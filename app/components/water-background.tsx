"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import GUI from "lil-gui";
import vertexShader from "@/app/components/shaders/vertexShader.glsl";
import fragmentShader from "@/app/components/shaders/fragmentShader.glsl";

const MAX_DROPS = 8;
const DROP_INACTIVE = -1e9;

export function WaterBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gui = new GUI({ width: 300 });
    gui.show(false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 0.5);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const seabedMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffffff"),
    });
    const seabedMesh = new THREE.Mesh(geometry, seabedMaterial);
    seabedMesh.position.z = -0.06;
    seabedMesh.renderOrder = 0;
    scene.add(seabedMesh);

    const clock = new THREE.Clock();
    const dropUvs = Array.from({ length: MAX_DROPS }, () => new THREE.Vector2(0.5, 0.5));
    const dropStarts = new Float32Array(MAX_DROPS);
    dropStarts.fill(DROP_INACTIVE);
    const dropWaveScales = new Float32Array(MAX_DROPS);
    dropWaveScales.fill(0.55);
    const rippleScaleRange = { min: 1.0, max: 1.0 };
    let ringWrite = 0;

    const registerDrop = (uv: THREE.Vector2) => {
      dropUvs[ringWrite].copy(uv);
      dropStarts[ringWrite] = clock.getElapsedTime();
      const lo = Math.min(rippleScaleRange.min, rippleScaleRange.max);
      const hi = Math.max(rippleScaleRange.min, rippleScaleRange.max);
      dropWaveScales[ringWrite] = lo + Math.random() * Math.max(hi - lo, 1e-6);
      ringWrite = (ringWrite + 1) % MAX_DROPS;
    };

    const waterMaterial = new THREE.RawShaderMaterial({
      glslVersion: THREE.GLSL3,
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      uniforms: {
        u_time: { value: 0 },
        u_cycle: { value: 26.2 },
        u_rippleLifeSpan: { value: 9 },
        u_calmBefore: { value: 0.01 },
        u_riseBlend: { value: 0.01 },
        u_attackSec: { value: 0.01 },
        u_eventDecay: { value: 10.06 },
        u_endFade: { value: 8.15 },
        u_centerFadeDelay: { value: 2.92 },
        u_centerFadeRate: { value: 1.62 },
        u_centerFadeSoft: { value: 0.01 },
        u_centerDeadMax: { value: 0.01 },
        u_timeFadeEase: { value: 0.25 },
        u_endFadeEase: { value: 0.53 },
        u_dropUv: { value: dropUvs },
        u_dropStart: { value: dropStarts },
        u_dropWaveScale: { value: dropWaveScales },
        u_stackBlend: { value: 0.35 },
        u_stackSquash: { value: 1.2 },
        u_background: { value: new THREE.Vector4(0.961, 0.976, 1.0, 0.25) },
        u_waveAmp: { value: 0.84 },
        u_dropImpact: { value: 12 },
        u_waveFreq: { value: 18 },
        u_waveSpeed: { value: 19.8 },
        u_waveDecay: { value: 40 },
        u_ringTighten: { value: 8 },
        u_distFadeEase: { value: 0.57 },
      },
    });

    const waterUi = {
      color: "#f5f9ff",
      opacity: 0.25,
    };
    const seabedUi = {
      color: "#d1d8e0",
    };
    const syncWaterBackground = () => {
      const c = new THREE.Color(waterUi.color);
      waterMaterial.uniforms.u_background.value.set(c.r, c.g, c.b, waterUi.opacity);
    };
    syncWaterBackground();

    gui.addColor(waterUi, "color").name("水面ティント").onChange(syncWaterBackground);
    gui
      .add(waterUi, "opacity")
      .min(0)
      .max(1)
      .step(0.01)
      .name("水面の不透明度")
      .onChange(syncWaterBackground);

    gui
      .addColor(seabedUi, "color")
      .name("海底の色")
      .onChange(() => {
        seabedMaterial.color.set(seabedUi.color);
      });

    const waterMesh = new THREE.Mesh(geometry, waterMaterial);
    waterMesh.position.z = 0;
    waterMesh.renderOrder = 1;
    scene.add(waterMesh);

    registerDrop(new THREE.Vector2(0.5, 0.5));
    const autoDrop = { enabled: true, intervalMinSec: 1.8, intervalMaxSec: 3.3, margin: 0.2 };
    const sampleAutoIntervalSec = () => {
      const lo = Math.min(autoDrop.intervalMinSec, autoDrop.intervalMaxSec);
      const hi = Math.max(autoDrop.intervalMinSec, autoDrop.intervalMaxSec);
      return lo + Math.random() * Math.max(hi - lo, 1e-6);
    };
    const randomDropUv = () => {
      const m = Math.min(Math.max(autoDrop.margin, 0), 0.48);
      const span = 1 - 2 * m;
      registerDrop(new THREE.Vector2(m + Math.random() * span, m + Math.random() * span));
    };

    const dropFolder = gui.addFolder("水滴シーケンス");
    dropFolder
      .add(waterMaterial.uniforms.u_cycle, "value")
      .min(2)
      .max(45)
      .step(0.1)
      .name("シーケンス周期・次の滴まで（秒）");
    dropFolder
      .add(waterMaterial.uniforms.u_rippleLifeSpan, "value")
      .min(0.2)
      .max(40)
      .step(0.1)
      .name("波紋が続く時間（着水後・秒）");
    dropFolder
      .add(waterMaterial.uniforms.u_calmBefore, "value")
      .min(0)
      .max(3)
      .step(0.01)
      .name("着水までの静止（秒）");
    dropFolder
      .add(waterMaterial.uniforms.u_riseBlend, "value")
      .min(0.01)
      .max(0.8)
      .step(0.01)
      .name("着水の立ち上がり（秒）");
    dropFolder
      .add(waterMaterial.uniforms.u_attackSec, "value")
      .min(0)
      .max(4)
      .step(0.02)
      .name("アタック基準（秒、0＝オフ・大きい波紋ほど長く）");
    dropFolder
      .add(waterMaterial.uniforms.u_eventDecay, "value")
      .min(0)
      .max(12)
      .step(0.01)
      .name("時間による減衰");
    dropFolder
      .add(waterMaterial.uniforms.u_endFade, "value")
      .min(0.1)
      .max(12)
      .step(0.05)
      .name("終わりのフェード（秒）");
    dropFolder
      .add(waterMaterial.uniforms.u_centerFadeDelay, "value")
      .min(0)
      .max(4)
      .step(0.02)
      .name("中心が消えるまでの遅延（秒）");
    dropFolder
      .add(waterMaterial.uniforms.u_centerFadeRate, "value")
      .min(0.05)
      .max(3)
      .step(0.01)
      .name("中心の静まりの広がり速さ");
    dropFolder
      .add(waterMaterial.uniforms.u_centerFadeSoft, "value")
      .min(0.01)
      .max(0.4)
      .step(0.005)
      .name("中心境界のぼかし");
    dropFolder
      .add(waterMaterial.uniforms.u_centerDeadMax, "value")
      .min(0.2)
      .max(1.35)
      .step(0.01)
      .name("静まりの最大半径（外の波を残す）");
    dropFolder
      .add(waterMaterial.uniforms.u_timeFadeEase, "value")
      .min(0.15)
      .max(1.5)
      .step(0.01)
      .name("時間の消え方（小→ゆっくり）");
    dropFolder
      .add(waterMaterial.uniforms.u_endFadeEase, "value")
      .min(0.15)
      .max(1.5)
      .step(0.01)
      .name("終わりの消え方（小→ゆっくり）");
    dropFolder.add({ go: randomDropUv }, "go").name("今すぐ水滴を落とす");
    dropFolder
      .add(autoDrop, "enabled")
      .name("自動で水滴（ランダム位置）")
      .onChange((on: boolean) => {
        if (on) nextAutoDueAt = clock.getElapsedTime() + sampleAutoIntervalSec();
      });
    dropFolder
      .add(autoDrop, "intervalMinSec")
      .min(0.2)
      .max(60)
      .step(0.1)
      .name("自動の間隔ランダム・最小（秒）");
    dropFolder
      .add(autoDrop, "intervalMaxSec")
      .min(0.2)
      .max(60)
      .step(0.1)
      .name("自動の間隔ランダム・最大（秒）");
    dropFolder.add(autoDrop, "margin", 0, 0.45, 0.01).name("落とす範囲の端の余白（UV）");
    dropFolder.open();

    const waveFolder = gui.addFolder("波紋");
    waveFolder
      .add(rippleScaleRange, "min")
      .min(0.15)
      .max(4)
      .step(0.01)
      .name("波紋の大きさランダム・最小（大→細かい）");
    waveFolder
      .add(rippleScaleRange, "max")
      .min(0.15)
      .max(4)
      .step(0.01)
      .name("波紋の大きさランダム・最大（大→細かい）");
    waveFolder
      .add(waterMaterial.uniforms.u_waveAmp, "value")
      .min(0)
      .max(1)
      .step(0.01)
      .name("波の高さ");
    waveFolder
      .add(waterMaterial.uniforms.u_dropImpact, "value")
      .min(1)
      .max(20)
      .step(0.05)
      .name("水滴の初動（大→1番目の輪が小）");
    waveFolder
      .add(waterMaterial.uniforms.u_waveFreq, "value")
      .min(1)
      .max(120)
      .step(1)
      .name("周波数（輪の密度）");
    waveFolder
      .add(waterMaterial.uniforms.u_waveSpeed, "value")
      .min(0)
      .max(20)
      .step(0.1)
      .name("伝わる速さ");
    waveFolder
      .add(waterMaterial.uniforms.u_waveDecay, "value")
      .min(0)
      .max(100)
      .step(0.5)
      .name("距離減衰（大＝早く消える）");
    waveFolder
      .add(waterMaterial.uniforms.u_ringTighten, "value")
      .min(0)
      .max(12)
      .step(0.1)
      .name("輪の狭まり（外ほど細かく）");
    waveFolder
      .add(waterMaterial.uniforms.u_distFadeEase, "value")
      .min(0.15)
      .max(1.5)
      .step(0.01)
      .name("距離の消え方（小→外までゆっくり）");
    waveFolder.open();

    const overlapFolder = gui.addFolder("重なり・干渉");
    overlapFolder
      .add(waterMaterial.uniforms.u_stackBlend, "value")
      .min(0)
      .max(1)
      .step(0.01)
      .name("tanh合成ブレンド（0＝純加算・強い干渉）");
    overlapFolder
      .add(waterMaterial.uniforms.u_stackSquash, "value")
      .min(0.05)
      .max(4)
      .step(0.05)
      .name("重なり時の強さ制限（大→穏やか）");
    overlapFolder.open();

    let nextAutoDueAt = clock.getElapsedTime() + sampleAutoIntervalSec();
    let rafId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      waterMaterial.uniforms.u_time.value = elapsed;

      if (autoDrop.enabled && elapsed >= nextAutoDueAt) {
        randomDropUv();
        nextAutoDueAt = elapsed + sampleAutoIntervalSec();
      }

      renderer.render(scene, camera);
      rafId = window.requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.cancelAnimationFrame(rafId);
      scene.remove(waterMesh);
      scene.remove(seabedMesh);
      geometry.dispose();
      waterMaterial.dispose();
      seabedMaterial.dispose();
      renderer.dispose();
      gui.destroy();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden />;
}
