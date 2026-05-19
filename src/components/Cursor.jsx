import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Curseur personnalisé : un point qui suit la souris exactement,
 * et un anneau plus lent (spring) qui grossit au-dessus des éléments interactifs.
 */
export default function Cursor() {
  const [hovering, setHovering] = useState(false);

  // Position brute de la souris (motion values pour perf)
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  // Spring pour l'anneau (effet de retard élastique)
  const ringX = useSpring(x, { damping: 25, stiffness: 200, mass: 0.5 });
  const ringY = useSpring(y, { damping: 25, stiffness: 200, mass: 0.5 });

  useEffect(() => {
    const onMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    // Détecte le hover sur tous les éléments interactifs
    const onOver = (e) => {
      if (e.target.closest('a, button, .feature, .cmd, .cat-btn, .step')) {
        setHovering(true);
      }
    };
    const onOut = (e) => {
      if (e.target.closest('a, button, .feature, .cmd, .cat-btn, .step')) {
        setHovering(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
    };
  }, [x, y]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div
        className={`cursor-ring ${hovering ? 'hover' : ''}`}
        style={{ x: ringX, y: ringY }}
      />
    </>
  );
}
