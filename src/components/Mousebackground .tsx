"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  opacity: number;
  baseOpacity: number;
  speed: number;
}

export default function MouseBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Colors: black/dark base with pink + white accent particles ──
    const COLORS = [
      "rgba(255,105,180,1)",   // hot pink
      "rgba(255,150,200,1)",   // soft pink
      "rgba(255,255,255,1)",   // white
      "rgba(200,100,160,1)",   // muted rose
      "rgba(255,80,160,1)",    // vivid pink
    ];

    const PARTICLE_COUNT = 110;
    const MOUSE_RADIUS = 180;       // influence radius
    const ATTRACT_STRENGTH = 0.042; // how hard they pull toward cursor
    const RETURN_STRENGTH = 0.028;  // spring back to origin
    const FRICTION = 0.88;          // velocity damping

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initParticles();
    }

    function initParticles() {
      particlesRef.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const x = Math.random() * canvas!.width;
        const y = Math.random() * canvas!.height;
        const size = Math.random() * 3.5 + 0.8;
        const baseOpacity = Math.random() * 0.55 + 0.18;
        particlesRef.current.push({
          x,
          y,
          originX: x,
          originY: y,
          size,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          vx: 0,
          vy: 0,
          opacity: baseOpacity,
          baseOpacity,
          speed: Math.random() * 0.4 + 0.1,
        });
      }
    }

    function drawGlowOrb(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      r: number,
      color: string,
      opacity: number
    ) {
      // Outer soft glow
      const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 5);
      const raw = color.replace(/,\s*[\d.]+\)$/, `,${opacity * 0.18})`);
      const transparent = color.replace(/,\s*[\d.]+\)$/, `,0)`);
      grd.addColorStop(0, raw);
      grd.addColorStop(1, transparent);
      ctx.beginPath();
      ctx.arc(x, y, r * 5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Core bright dot
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = color.replace(/,\s*[\d.]+\)$/, `,${Math.min(opacity * 1.4, 1)})`);
      ctx.fill();
    }

    function tick() {
      const { width, height } = canvas!;
      ctx!.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (const p of particlesRef.current) {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < MOUSE_RADIUS) {
          // Magnetic pull toward cursor — stronger the closer you are
          const force = (1 - dist / MOUSE_RADIUS);
          p.vx += dx * ATTRACT_STRENGTH * force;
          p.vy += dy * ATTRACT_STRENGTH * force;
          // Brighten when near cursor
          p.opacity = Math.min(p.baseOpacity + force * 0.6, 1);
        } else {
          // Spring back to origin point
          p.vx += (p.originX - p.x) * RETURN_STRENGTH;
          p.vy += (p.originY - p.y) * RETURN_STRENGTH;
          p.opacity += (p.baseOpacity - p.opacity) * 0.04;
        }

        // Subtle idle drift
        p.vx += (Math.random() - 0.5) * 0.12;
        p.vy += (Math.random() - 0.5) * 0.12;

        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;

        drawGlowOrb(ctx!, p.x, p.y, p.size, p.color, p.opacity);
      }

      // ── Draw subtle connection lines between nearby particles ──
      const pts = particlesRef.current;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            const alpha = (1 - d / 90) * 0.09;
            ctx!.beginPath();
            ctx!.moveTo(pts[i].x, pts[i].y);
            ctx!.lineTo(pts[j].x, pts[j].y);
            ctx!.strokeStyle = `rgba(255,105,180,${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(tick);
    }

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onTouchMove = (e: TouchEvent) => {
      mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("resize", resize);

    resize();
    tick();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 blur-[0.5px]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}