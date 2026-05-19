import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';

const FEATURES = [
  { icon: '⚖️', title: 'Modération', desc: 'Ban, kick, timeout, warn avec sanction auto au seuil. Lock, slowmode, clear. Tout est tracé.' },
  { icon: '🛡️', title: 'Automod', desc: 'Anti-spam, anti-lien, anti-invite, anti-caps et mots interdits. Tout configurable par serveur.' },
  { icon: '📝', title: 'Logs détaillés', desc: 'Messages, membres, vocal, rôles, salons : chaque action est journalisée avec un embed soigné.' },
  { icon: '🎫', title: 'Tickets', desc: 'Système de support complet avec claim par le staff et transcripts automatiques.' },
  { icon: '👋', title: 'Welcome / Au revoir', desc: 'Messages personnalisés avec variables ({user}, {server}…), MP optionnel.' },
  { icon: '🎭', title: 'Auto-rôles & Reaction-rôles', desc: 'Rôles à l\'arrivée (humains/bots séparés) et panneaux à boutons.' },
  { icon: '📈', title: 'Niveaux & XP', desc: 'Système d\'XP, récompenses de rôles automatiques, leaderboard du serveur.' },
  { icon: '💰', title: 'Économie', desc: 'Monnaie virtuelle, wallet, banque, /daily, /work — entièrement customisable.' },
  { icon: '🎉', title: 'Giveaways & Sondages', desc: 'Giveaways persistants avec scheduler. Sondages avec barres en temps réel.' },
  { icon: '🎨', title: 'Embed Builder', desc: 'Crée des embeds personnalisés directement dans Discord via une modal interactive.' },
  { icon: '⚙️', title: 'Panel /config', desc: 'Une seule commande pour tout configurer. Select menus, boutons, modals.' },
  { icon: '🔧', title: '100% extensible', desc: 'Architecture modulaire. Ajoute une commande en un fichier. Tout est commenté.' },
];

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <RevealBlock>
          <div className="section-eyebrow">Modules</div>
          <h2 className="section-title">
            Tout ce dont ton serveur a besoin, <em>réuni dans un seul bot.</em>
          </h2>
          <p className="section-sub">
            Active les modules qui t'intéressent, configure-les en quelques clics, et laisse Yunari
            s'occuper du reste. Chaque module a été pensé pour être beau, intuitif, et configurable.
          </p>
        </RevealBlock>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RevealBlock({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });

  // Tilt 3D au hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [8, -8]), {
    damping: 25,
    stiffness: 200,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-8, 8]), {
    damping: 25,
    stiffness: 200,
  });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="feature"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.08,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{ y: -8 }}
      style={{
        position: 'relative',
        padding: '2rem',
        background: 'var(--cream)',
        border: '1px solid rgba(168, 216, 255, 0.25)',
        borderRadius: '28px',
        overflow: 'hidden',
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        transformPerspective: 1000,
      }}
    >
      {/* Glow background au hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, var(--sky-soft) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <span
        style={{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          color: 'var(--slate-soft)',
          letterSpacing: '0.05em',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <motion.div
        whileHover={{ scale: 1.15, rotate: -8 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        style={{
          width: 56,
          height: 56,
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.8rem',
          background: 'linear-gradient(135deg, var(--sky-soft), var(--rose-cream))',
          marginBottom: '1.5rem',
          boxShadow: '0 8px 20px rgba(168, 216, 255, 0.4)',
          position: 'relative',
        }}
      >
        {feature.icon}
      </motion.div>

      <h3
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 500,
          fontSize: '1.4rem',
          letterSpacing: '-0.02em',
          marginBottom: '0.6rem',
          color: 'var(--navy)',
          position: 'relative',
        }}
      >
        {feature.title}
      </h3>
      <p style={{ fontSize: '0.95rem', color: 'var(--slate)', lineHeight: 1.6, position: 'relative' }}>
        {feature.desc}
      </p>
    </motion.div>
  );
}
