import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section style={{ textAlign: 'center', padding: '8rem 2rem' }} ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="section-eyebrow"
          style={{ justifyContent: 'center', display: 'inline-flex' }}
        >
          💙 Bot premium · gratuit
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="section-title"
          style={{ textAlign: 'center', marginInline: 'auto', marginBottom: '2rem' }}
        >
          Yunari t'attend. <em>Donne-lui un serveur à aimer.</em>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <MagneticButton strength={0.3}>
            <a href="#install" className="btn-primary">
              <span>Ajouter à mon serveur</span>
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </a>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <a href="#features" className="btn-ghost">
              ✨ Voir les modules
            </a>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
