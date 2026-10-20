import { useEffect, useRef } from "react";

const SKILLS = [
  "Swift",
  "SwiftUI",
  "SwiftData",
  "Jetpack Compose",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Laravel",
  "PHP",
  "Python",
  "SQL",
  "GraphQL",
  "MongoDB",
  "Tailwind",
  "Figma",
  "Git",
  "Java",
  "iOS",
  "Android",
  "WidgetKit",
  "FTP",
];

// Spreads points evenly over a sphere (golden-angle spiral).
const fibonacciSphere = (count) =>
  Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = Math.PI * (3 - Math.sqrt(5)) * i;
    return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
  });

const SkillSphere = ({ dark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const words = fibonacciSphere(SKILLS.length).map((p, i) => ({
      ...p,
      label: SKILLS[i],
    }));
    const dust = fibonacciSphere(220);

    const ink = dark ? [248, 240, 244] : [43, 30, 38];
    const accent = [247, 120, 160];

    let width = 0;
    let height = 0;
    let radius = 0;
    let frame = 0;
    let rotX = -0.35;
    let rotY = 0;
    let velX = 0.0012;
    let velY = 0.0035;
    let target = { x: 0.0012, y: 0.0035 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * 0.38;
    };

    const onPointer = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      target = { x: ny * 0.012, y: 0.0025 + nx * 0.016 };
    };

    const project = (p) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const x1 = p.x * cosY - p.z * sinY;
      const z1 = p.x * sinY + p.z * cosY;
      const y1 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const scale = 1.6 / (2.6 - z2);
      return {
        x: width / 2 + x1 * radius * scale,
        y: height / 2 + y1 * radius * scale,
        z: z2,
        scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Orbit ring
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-0.35);
      ctx.beginPath();
      ctx.ellipse(0, 0, radius * 1.32, radius * 0.34, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${accent.join(",")},0.28)`;
      ctx.lineWidth = 1;
      ctx.stroke();
      const t = performance.now() / 2400;
      ctx.beginPath();
      ctx.arc(
        Math.cos(t) * radius * 1.32,
        Math.sin(t) * radius * 0.34,
        3.5,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = `rgb(${accent.join(",")})`;
      ctx.fill();
      ctx.restore();

      for (const p of dust) {
        const q = project(p);
        const a = 0.08 + ((q.z + 1) / 2) * 0.35;
        ctx.fillStyle = `rgba(${ink.join(",")},${a})`;
        ctx.fillRect(q.x, q.y, 1.4 * q.scale, 1.4 * q.scale);
      }

      const projected = words
        .map((w) => ({ ...project(w), label: w.label }))
        .sort((a, b) => a.z - b.z);

      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (const q of projected) {
        const depth = (q.z + 1) / 2;
        const size = Math.round((11 + depth * 9) * Math.max(radius / 200, 0.8));
        ctx.font = `${depth > 0.7 ? 700 : 500} ${size}px ui-monospace, "SF Mono", Menlo, monospace`;
        const front = depth > 0.82;
        ctx.fillStyle = front
          ? `rgba(${accent.join(",")},${0.55 + depth * 0.45})`
          : `rgba(${ink.join(",")},${0.12 + depth * 0.7})`;
        ctx.fillText(q.label, q.x, q.y);
      }
    };

    const loop = () => {
      velX += (target.x - velX) * 0.04;
      velY += (target.y - velY) * 0.04;
      rotX += velX;
      rotY += velY;
      draw();
      frame = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) {
      draw();
    } else {
      window.addEventListener("pointermove", onPointer);
      frame = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [dark]);

  return <canvas ref={canvasRef} aria-hidden="true" style={{ width: "100%", height: "100%", display: "block" }} />;
};

export default SkillSphere;
