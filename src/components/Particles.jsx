import { useMemo } from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#A8D8FF', '#FDDCE5', '#E5DCFF'];

/** Champ de particules pastel qui flottent en boucle. */
export default function Particles({ count = 30 }) {
  // On génère les particules une seule fois (pas à chaque render)
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
        color: COLORS[i % COLORS.length],
        duration: 15 + Math.random() * 15,
        delay: Math.random() * 5,
        dx: (Math.random() - 0.5) * 60,
        dy: (Math.random() - 0.5) * 80,
      })),
    [count]
  );

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, p.dx, -p.dx / 2, 0],
            y: [0, p.dy, -p.dy / 2, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            filter: 'blur(1px)',
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
