import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Bouton qui "attire" le curseur quand il passe à proximité.
 * Inspiré des sites awwwards/cuberto.
 */
export default function MagneticButton({ children, className = '', strength = 0.4, ...props }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.3 }}
      style={{ display: 'inline-block' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
