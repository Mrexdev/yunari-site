import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const FEATURES_LIST = [
  'Interface 100% interactive avec select menus & boutons',
  'Sélecteurs de salons et de rôles natifs Discord',
  'Modals pour les champs texte longs',
  'Sauvegarde automatique par serveur (SQLite)',
  'Toggle ON/OFF par module en un clic',
];

const MOCK_MODULES = [
  { name: '⚖️ Modération', enabled: true },
  { name: '🎫 Tickets', enabled: true },
  { name: '👋 Welcome', enabled: false },
  { name: '📈 Niveaux', enabled: true },
];

export default function Showcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section id="showcase" style={{ padding: '4rem 0' }} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        style={{
          background: 'var(--navy)',
          color: 'var(--cream)',
          borderRadius: '40px',
          margin: '0 auto',
          padding: '5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
          width: 'var(--container)',
        }}
        className="showcase-card"
      >
        {/* Glow rotatif d'ambiance */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '80%',
            height: '200%',
            background: 'radial-gradient(circle, var(--accent) 0%, transparent 60%)',
            opacity: 0.15,
            pointerEvents: 'none',
          }}
        />

        <div
          className="showcase-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '4rem',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {/* Texte */}
          <div>
            <div
              className="section-eyebrow"
              style={{ color: 'var(--sky-primary)' }}
            >
              <span
                style={{
                  width: 30,
                  height: 1,
                  background: 'var(--sky-primary)',
                }}
              />
              /config
            </div>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>
              Tout se configure <em style={{ color: 'var(--sky-primary)' }}>dans Discord.</em>
            </h2>
            <p
              style={{
                color: 'rgba(250, 246, 242, 0.7)',
                fontSize: '1.05rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Plus besoin d'éditer un dashboard externe ou de retenir 50 commandes. Un seul{' '}
              <code className="inline" style={{ background: 'rgba(168,216,255,0.15)', color: 'var(--sky-primary)' }}>/config</code>, et tout s'ouvre sous tes yeux : boutons, menus, modals. Tu actives, tu modifies, tu sauvegardes — instantané.
            </p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {FEATURES_LIST.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    fontSize: '0.95rem',
                    color: 'rgba(250, 246, 242, 0.85)',
                  }}
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.5 + i * 0.1,
                      type: 'spring',
                    }}
                    style={{
                      flexShrink: 0,
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'var(--sky-primary)',
                      color: 'var(--navy)',
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      marginTop: 2,
                    }}
                  >
                    ✓
                  </motion.span>
                  {feat}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* MOCKUP DISCORD */}
          <DiscordMockup inView={inView} />
        </div>

        <style>{`
          @media (max-width: 900px) {
            .showcase-card { padding: 3rem 1.5rem !important; border-radius: 28px !important; }
            .showcase-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          }
        `}</style>
      </motion.div>
    </section>
  );
}

function DiscordMockup({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
      animate={inView ? { opacity: 1, rotate: -1, scale: 1 } : {}}
      transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ rotate: 0, y: -8 }}
      style={{
        background: '#2B2D31',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow:
          '0 40px 80px -20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(168, 216, 255, 0.1)',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Header */}
      <div
        style={{
          background: '#1E1F22',
          padding: '0.85rem 1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Dot color="#FF5F57" />
        <Dot color="#FEBC2E" />
        <Dot color="#28C840" />
        <span
          style={{
            marginLeft: 'auto',
            fontSize: '0.85rem',
            color: '#B5BAC1',
            fontWeight: 600,
          }}
        >
          <span style={{ color: '#80848E', marginRight: '0.3rem' }}>#</span>
          config
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem', color: '#DBDEE1', fontSize: '0.85rem' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{ display: 'flex', gap: '0.85rem', marginBottom: '1.2rem' }}
        >
          <img
            src="/yunari.jpg"
            alt=""
            style={{
              width: 38,
              height: 38,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(168, 216, 255, 0.2)',
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
              <span style={{ fontWeight: 600, color: '#A8D8FF', fontSize: '0.9rem' }}>Yunari</span>
              <span
                style={{
                  background: '#5B9FE8',
                  color: 'white',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  padding: '0.05rem 0.35rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                App
              </span>
              <span style={{ fontSize: '0.7rem', color: '#80848E' }}>aujourd'hui à 14:32</span>
            </div>

            {/* Embed */}
            <div
              style={{
                borderLeft: '4px solid #A8D8FF',
                background: '#2B2D31',
                borderRadius: '4px',
                padding: '0.85rem 1rem',
                maxWidth: '100%',
                marginTop: '0.4rem',
                overflow: 'hidden',
              }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 }}
                style={{
                  fontFamily: 'var(--display)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: 'white',
                  marginBottom: '0.4rem',
                  letterSpacing: '-0.01em',
                }}
              >
                ⚙️ Panneau de configuration
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.9 }}
                style={{
                  fontSize: '0.78rem',
                  color: '#B5BAC1',
                  lineHeight: 1.5,
                  marginBottom: '0.85rem',
                }}
              >
                Sélectionne un module ci-dessous pour le configurer.
              </motion.div>

              {/* Pills modules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem' }}>
                {MOCK_MODULES.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                  >
                    <Pill>{m.name}</Pill>
                    <Pill enabled={m.enabled}>{m.enabled ? 'Activé' : 'Désactivé'}</Pill>
                  </motion.div>
                ))}
              </div>

              {/* Select menu */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 1.5 }}
                style={{
                  marginTop: '0.85rem',
                  padding: '0.55rem 0.85rem',
                  background: '#1E1F22',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  color: '#B5BAC1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  border: '1px solid #3F4248',
                }}
              >
                🔧 Choisis un module à configurer...
                <span style={{ color: '#80848E' }}>▾</span>
              </motion.div>

              {/* Boutons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 1.6 }}
                style={{ display: 'flex', gap: '0.4rem', marginTop: '0.85rem', flexWrap: 'wrap' }}
              >
                <DiscordBtn variant="secondary">🔄 Rafraîchir</DiscordBtn>
                <DiscordBtn variant="danger">✖️ Fermer</DiscordBtn>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

const Dot = ({ color }) => (
  <div style={{ width: 12, height: 12, borderRadius: '50%', background: color }} />
);

const Pill = ({ children, enabled = true }) => (
  <span
    style={{
      padding: '0.1rem 0.5rem',
      background: enabled ? 'rgba(168, 216, 255, 0.15)' : 'rgba(255, 139, 139, 0.15)',
      color: enabled ? '#A8D8FF' : '#FF8B8B',
      borderRadius: '100px',
      fontSize: '0.7rem',
      fontWeight: 600,
    }}
  >
    {children}
  </span>
);

const DiscordBtn = ({ children, variant }) => {
  const colors = {
    primary: { bg: '#5865F2', hover: '#4752C4' },
    secondary: { bg: '#4E5058', hover: '#6D6F78' },
    danger: { bg: '#DA373C', hover: '#A22D33' },
  };
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      style={{
        padding: '0.45rem 0.85rem',
        borderRadius: '4px',
        fontSize: '0.75rem',
        fontWeight: 600,
        background: colors[variant].bg,
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '0.35rem',
      }}
    >
      {children}
    </motion.button>
  );
};
