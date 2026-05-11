import { useEffect, useRef } from 'react';

// 軽量な紙吹雪エフェクト（canvasベース、外部依存なし）。
// 全レッスン完了時のお祝い用。引数の active が true の間だけ発火する。

type Props = {
  active: boolean;
  durationMs?: number;
};

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rot: number;
  vr: number;
};

const COLORS = ['#f59e0b', '#10b981', '#3b82f6', '#ef4444', '#a855f7', '#22d3ee'];

export function Confetti({ active, durationMs = 4000 }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    const particles: Particle[] = [];
    const burst = (count: number, originX: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: originX,
          y: h * 0.2,
          vx: (Math.random() - 0.5) * 8,
          vy: -Math.random() * 6 - 3,
          size: Math.random() * 6 + 3,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.3,
        });
      }
    };

    burst(80, w * 0.5);
    setTimeout(() => burst(60, w * 0.25), 250);
    setTimeout(() => burst(60, w * 0.75), 450);

    const start = Date.now();
    let raf = 0;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const elapsed = Date.now() - start;
      particles.forEach((p) => {
        p.vy += 0.18; // gravity
        p.vx *= 0.995;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        ctx.restore();
      });

      if (elapsed < durationMs) {
        raf = requestAnimationFrame(tick);
      } else {
        ctx.clearRect(0, 0, w, h);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [active, durationMs]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[70] pointer-events-none"
      aria-hidden
    />
  );
}
