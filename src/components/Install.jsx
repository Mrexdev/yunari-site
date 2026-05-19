import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// REMPLACE ce lien par ton vrai lien d'invitation Discord OAuth2
// Format : https://discord.com/oauth2/authorize?client_id=TON_CLIENT_ID&permissions=8&scope=bot+applications.commands
const INVITE_URL = 'https://discord.com/oauth2/authorize?client_id=1504204837997383922&permissions=8&scope=bot+applications.commands';

const STEPS = [
  {
    num: '01',
    title: 'Clique sur le bouton',
    desc: 'Un seul clic, Discord s\'occupe du reste.',
    icon: '👆',
  },
  {
    num: '02',
    title: 'Choisis ton serveur',
    desc: 'Sélectionne le serveur où tu veux ajouter Yunari.',
    icon: '🏠',
  },
  {
    num: '03',
    title: 'Autorise les permissions',
    desc: 'Yunari demande les permissions dont elle a besoin.',
    icon: '✅',
  },
  {
    num: '04',
    title: 'Tape /config',
    desc: 'Une commande, et tu configures tous les modules.',
    icon: '⚙️',
  },
];

const PERMS = [
  { icon: '🛡️', label: 'Modérer les membres' },
  { icon: '📝', label: 'Gérer les salons' },
  { icon: '🎫', label: 'Créer des salons (tickets)' },
  { icon: '🎭', label: 'Gérer les rôles' },
  { icon: '💬', label: 'Envoyer des messages' },
  { icon: '🔗', label: 'Embed links & fichiers' },
];

export default function Install() {
  return (
    <section id="install">
      <div className="container">
        <RevealHeader />

        <div
          className="install-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {STEPS.map((s, i) => (
            <StepCard key={s.num} step={s} index={i} />
          ))}
        </div>

        <InvitePanel />
      </div>
    </section>
  );
}

function RevealHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
    >
      <div className="section-eyebrow">Ajouter au serveur</div>
      <h2 className="section-title">
        Prêt en <em>30 secondes.</em>
      </h2>
      <p className="section-sub">
        Yunari est déjà hébergée et tourne 24/7. Tu n'as rien à installer — clique sur
        le bouton, choisis ton serveur, et c'est joué.
      </p>
    </motion.div>
  );
}

function StepCard({ step, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -50px 0px' });
  return (
    <motion.div
      ref={ref}
      className="step"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -6 }}
      style={{
        position: 'relative',
        padding: '2rem 1.75rem',
        background: 'var(--cream)',
        borderRadius: '24px',
        border: '1px solid rgba(168, 216, 255, 0.25)',
        transition: 'box-shadow 0.4s',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.85rem',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 200,
            fontSize: '3.5rem',
            lineHeight: 1,
            color: 'var(--sky-primary)',
            letterSpacing: '-0.05em',
            fontStyle: 'italic',
            fontVariationSettings: "'opsz' 144",
          }}
        >
          {step.num}
        </div>
        <div style={{ fontSize: '1.6rem', opacity: 0.9 }}>{step.icon}</div>
      </div>
      <h4
        style={{
          fontFamily: 'var(--display)',
          fontWeight: 500,
          fontSize: '1.2rem',
          marginBottom: '0.4rem',
          color: 'var(--navy)',
        }}
      >
        {step.title}
      </h4>
      <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.6 }}>{step.desc}</p>
    </motion.div>
  );
}

function InvitePanel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      style={{
        background: 'var(--navy)',
        borderRadius: '32px',
        overflow: 'hidden',
        boxShadow: '0 30px 60px -20px rgba(14, 27, 51, 0.4)',
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '-30%',
          left: '-10%',
          width: '60%',
          height: '160%',
          background: 'radial-gradient(circle, #5b9fe8 0%, transparent 60%)',
          opacity: 0.12,
          pointerEvents: 'none',
        }}
      />

      <div
        className="invite-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          position: 'relative',
        }}
      >
        <div style={{ padding: '4rem 3rem' }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: 'var(--sky-soft)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <span style={{ width: 30, height: 1, background: 'var(--sky-soft)' }} />
            Invitation
          </div>

          <h3
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 300,
              fontSize: '2.4rem',
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--cream)',
              marginBottom: '1.25rem',
              fontVariationSettings: "'opsz' 144",
            }}
          >
            Ajoute Yunari à <em style={{ color: 'var(--sky-soft)', fontWeight: 400 }}>ton serveur.</em>
          </h3>

          <p
            style={{
              color: 'rgba(250, 246, 242, 0.7)',
              fontSize: '1rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
            }}
          >
            Aucune installation, aucun fichier, aucun VPS. Clique, autorise, profite.
            Yunari rejoint ton serveur instantanément.
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontSize: '0.78rem',
                color: 'rgba(250, 246, 242, 0.5)',
                marginBottom: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                fontFamily: 'var(--mono)',
              }}
            >
              Permissions demandées
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
              }}
            >
              {PERMS.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.82rem',
                    color: 'rgba(250, 246, 242, 0.85)',
                    padding: '0.5rem 0.65rem',
                    background: 'rgba(168, 216, 255, 0.06)',
                    borderRadius: '8px',
                    border: '1px solid rgba(168, 216, 255, 0.1)',
                  }}
                >
                  <span style={{ fontSize: '0.95rem' }}>{p.icon}</span>
                  <span>{p.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1.1rem 2rem',
              background: 'linear-gradient(135deg, #5865F2 0%, #4752C4 100%)',
              color: '#fff',
              borderRadius: '100px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 12px 30px -8px rgba(88, 101, 242, 0.6)',
              fontFamily: 'var(--body)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Ajouter Yunari à mon serveur
          </motion.a>

          <p
            style={{
              marginTop: '1.2rem',
              fontSize: '0.8rem',
              color: 'rgba(250, 246, 242, 0.45)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: '#7FE7A1',
                display: 'inline-block',
                boxShadow: '0 0 8px #7FE7A1',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            Yunari est en ligne · uptime 99.9%
          </p>
        </div>

        <div
          style={{
            padding: '4rem 3rem',
            background: 'rgba(168, 216, 255, 0.03)',
            borderLeft: '1px solid rgba(168, 216, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <DiscordOAuthMockup inView={inView} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .invite-grid {
            grid-template-columns: 1fr !important;
          }
          .invite-grid > div:last-child {
            border-left: none !important;
            border-top: 1px solid rgba(168, 216, 255, 0.1);
            padding: 2.5rem 1.5rem !important;
          }
          .invite-grid > div:first-child {
            padding: 3rem 1.5rem 1.5rem !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

function DiscordOAuthMockup({ inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
      animate={inView ? { opacity: 1, scale: 1, rotate: -1 } : {}}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      style={{
        background: '#36393F',
        borderRadius: '12px',
        overflow: 'hidden',
        width: '100%',
        maxWidth: 340,
        boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(168, 216, 255, 0.08)',
        transition: 'transform 0.4s',
      }}
    >
      <div
        style={{
          background: '#2F3136',
          padding: '0.85rem 1.2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
        <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
        <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
        <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: '#B5BAC1' }}>
          discord.com/oauth2
        </span>
      </div>

      <div style={{ padding: '1.5rem 1.4rem', color: '#DBDEE1' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.2rem',
            padding: '0.85rem',
            background: '#2F3136',
            borderRadius: '8px',
          }}
        >
          <img
            src="/yunari.jpg"
            alt=""
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #A8D8FF',
            }}
          />
          <div>
            <div
              style={{
                fontWeight: 600,
                color: '#fff',
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
              }}
            >
              Yunari
              <span
                style={{
                  background: '#5B9FE8',
                  color: 'white',
                  fontSize: '0.55rem',
                  fontWeight: 700,
                  padding: '0.05rem 0.35rem',
                  borderRadius: '4px',
                  textTransform: 'uppercase',
                }}
              >
                Vérifié
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#80848E' }}>Bot · 100% configurable</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          style={{
            fontSize: '0.75rem',
            color: '#B5BAC1',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '0.4rem',
            letterSpacing: '0.04em',
          }}
        >
          Ajouter à :
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.85 }}
          style={{
            padding: '0.7rem 0.85rem',
            background: '#202225',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.82rem',
            color: '#fff',
            marginBottom: '1rem',
            cursor: 'pointer',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FDDCE5, #A8D8FF)',
                display: 'grid',
                placeItems: 'center',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: '#0e1b33',
              }}
            >
              MS
            </div>
            Mon Serveur
          </div>
          <span style={{ color: '#80848E', fontSize: '0.8rem' }}>▾</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          style={{
            fontSize: '0.72rem',
            color: '#B5BAC1',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '0.5rem',
            letterSpacing: '0.04em',
          }}
        >
          Ceci permettra à Yunari de :
        </motion.div>

        {['Gérer les rôles', 'Gérer les salons', 'Modérer les membres', 'Envoyer des messages'].map(
          (p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.1 + i * 0.06 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.75rem',
                color: '#DBDEE1',
                padding: '0.25rem 0',
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#23A559">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              {p}
            </motion.div>
          ),
        )}

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginTop: '1.2rem',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: '0.5rem 0.8rem',
              borderRadius: '4px',
              background: 'transparent',
              color: '#fff',
              fontSize: '0.78rem',
              textAlign: 'center',
              fontWeight: 500,
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            Annuler
          </div>
          <div
            style={{
              flex: 1,
              padding: '0.5rem 0.8rem',
              borderRadius: '4px',
              background: '#5865F2',
              color: '#fff',
              fontSize: '0.78rem',
              textAlign: 'center',
              fontWeight: 600,
              boxShadow: '0 4px 12px -2px rgba(88, 101, 242, 0.4)',
            }}
          >
            Autoriser
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
