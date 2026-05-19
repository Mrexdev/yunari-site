import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(168, 216, 255, 0.3)',
        padding: '3rem 0 2.5rem',
        background: 'rgba(255, 251, 246, 0.4)',
      }}
    >
      <div
        style={{
          width: 'var(--container)',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <motion.img
            src="/yunari.jpg"
            alt=""
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8 }}
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--sky-primary)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 500,
              fontStyle: 'italic',
              fontSize: '1.1rem',
              fontVariationSettings: "'opsz' 144",
            }}
          >
            Yunari
          </span>
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--slate)' }}>
          Fait avec{' '}
          <strong style={{ color: 'var(--accent)', fontWeight: 600 }}>💙</strong> · Bot Discord
          hébergé 24/7 · Node.js & discord.js
        </div>
      </div>
    </footer>
  );
}
