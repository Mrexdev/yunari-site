import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const COMMANDS = {
  moderation: {
    label: 'Modération',
    emoji: '⚖️',
    cmds: [
      { name: '/ban', desc: 'Bannit un membre du serveur', badge: 'mod' },
      { name: '/unban', desc: 'Déban un utilisateur (par ID)', badge: 'mod' },
      { name: '/kick', desc: 'Expulse un membre', badge: 'mod' },
      { name: '/timeout', desc: 'Réduit au silence un membre pour une durée donnée', badge: 'mod' },
      { name: '/warn', desc: 'Avertit un membre (sanction auto au seuil)', badge: 'mod' },
      { name: '/warnings', desc: "Liste les avertissements d'un membre", badge: 'mod' },
      { name: '/clear', desc: 'Supprime un nombre de messages', badge: 'mod' },
      { name: '/lock', desc: 'Verrouille un salon', badge: 'channel' },
      { name: '/unlock', desc: 'Déverrouille un salon', badge: 'channel' },
      { name: '/slowmode', desc: 'Définit le mode lent du salon', badge: 'channel' },
    ],
  },
  tickets: {
    label: 'Tickets',
    emoji: '🎫',
    cmds: [{ name: '/ticket-panel', desc: 'Déploie le panneau de création de tickets', badge: 'setup' }],
  },
  leveling: {
    label: 'Niveaux',
    emoji: '📈',
    cmds: [
      { name: '/rank', desc: "Affiche ton niveau (ou celui d'un membre)", badge: 'public' },
      { name: '/leaderboard', desc: 'Classement des niveaux du serveur', badge: 'public' },
    ],
  },
  economy: {
    label: 'Économie',
    emoji: '💰',
    cmds: [
      { name: '/balance', desc: 'Affiche ton solde', badge: 'public' },
      { name: '/daily', desc: 'Récupère ta récompense quotidienne', badge: 'public' },
      { name: '/work', desc: "Travaille pour gagner de l'argent", badge: 'public' },
    ],
  },
  config: {
    label: 'Configuration',
    emoji: '⚙️',
    cmds: [
      { name: '/config', desc: 'Ouvre le panneau de configuration principal', badge: 'admin' },
      { name: '/autorole', desc: 'Gère les rôles attribués automatiquement', badge: 'admin' },
      { name: '/reactionrole', desc: 'Gère les rôles via boutons', badge: 'admin' },
    ],
  },
  utility: {
    label: 'Utilitaires',
    emoji: '🔧',
    cmds: [
      { name: '/help', desc: 'Aide interactive de Yunari', badge: 'public' },
      { name: '/ping', desc: 'Latence du bot', badge: 'public' },
      { name: '/avatar', desc: "Affiche l'avatar d'un membre", badge: 'public' },
      { name: '/serverinfo', desc: 'Infos détaillées sur le serveur', badge: 'public' },
      { name: '/userinfo', desc: 'Infos détaillées sur un membre', badge: 'public' },
      { name: '/embed', desc: 'Crée un embed personnalisé', badge: 'mod' },
      { name: '/say', desc: 'Fait parler le bot dans un salon', badge: 'mod' },
      { name: '/poll', desc: 'Crée un sondage avec barres en temps réel', badge: 'public' },
      { name: '/giveaway', desc: 'Lance/termine/reroll un giveaway', badge: 'admin' },
    ],
  },
};

export default function Commands() {
  const [activeCat, setActiveCat] = useState('moderation');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <section id="commands">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          ref={ref}
        >
          <div className="section-eyebrow">28 commandes</div>
          <h2 className="section-title">
            Toutes les commandes, <em>au bout des doigts.</em>
          </h2>
          <p className="section-sub">
            Explore les commandes par catégorie. Toutes sont des slash commands, donc
            auto-complétées par Discord quand tu tapes <code className="inline">/</code>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '2rem',
            background: 'var(--cream)',
            border: '1px solid rgba(168, 216, 255, 0.3)',
            borderRadius: '32px',
            padding: '2.5rem',
            boxShadow: '0 30px 60px -25px rgba(91, 159, 232, 0.15)',
          }}
          className="commands-grid"
        >
          {/* Catégories */}
          <div
            className="commands-cats"
            style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}
          >
            {Object.entries(COMMANDS).map(([key, cat]) => (
              <CatButton
                key={key}
                active={activeCat === key}
                onClick={() => setActiveCat(key)}
                emoji={cat.emoji}
                label={cat.label}
                count={cat.cmds.length}
              />
            ))}
          </div>

          {/* Liste */}
          <div style={{ position: 'relative', minHeight: 400 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              >
                {COMMANDS[activeCat].cmds.map((c, i) => (
                  <CmdRow key={c.name} cmd={c} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <style>{`
            @media (max-width: 800px) {
              .commands-grid { grid-template-columns: 1fr !important; padding: 1.5rem !important; }
              .commands-cats { flex-direction: row !important; overflow-x: auto; padding-bottom: 0.5rem; }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}

function CatButton({ active, onClick, emoji, label, count }) {
  return (
    <motion.button
      onClick={onClick}
      className="cat-btn"
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.97 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        padding: '0.9rem 1.1rem',
        borderRadius: '14px',
        fontSize: '0.95rem',
        fontWeight: 500,
        color: active ? 'var(--cream)' : 'var(--slate)',
        textAlign: 'left',
        background: active ? 'var(--navy)' : 'transparent',
        position: 'relative',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          display: 'grid',
          placeItems: 'center',
          background: active ? 'rgba(168, 216, 255, 0.3)' : 'rgba(168, 216, 255, 0.2)',
          borderRadius: '8px',
          fontSize: '1rem',
        }}
      >
        {emoji}
      </span>
      <span style={{ flex: 1 }}>{label}</span>
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.75rem',
          color: active ? 'var(--sky-primary)' : 'var(--slate-soft)',
        }}
      >
        {count}
      </span>
    </motion.button>
  );
}

function CmdRow({ cmd, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      whileHover={{ x: 6 }}
      className="cmd"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem 1.25rem',
        borderRadius: '14px',
        background: 'var(--paper-warm)',
        border: '1px solid transparent',
        flexWrap: 'wrap',
        transition: 'background 0.3s, border-color 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'white';
        e.currentTarget.style.borderColor = 'var(--sky-primary)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'var(--paper-warm)';
        e.currentTarget.style.borderColor = 'transparent';
      }}
    >
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.9rem',
          fontWeight: 700,
          color: 'var(--accent)',
          minWidth: 140,
        }}
      >
        {cmd.name}
      </span>
      <span style={{ fontSize: '0.9rem', color: 'var(--slate)', flex: 1 }}>{cmd.desc}</span>
      <span
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '0.7rem',
          padding: '0.2rem 0.55rem',
          borderRadius: '100px',
          color: 'var(--slate)',
          background: 'rgba(168, 216, 255, 0.2)',
          fontWeight: 600,
        }}
      >
        {cmd.badge}
      </span>
    </motion.div>
  );
}
