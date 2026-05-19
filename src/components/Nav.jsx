import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

const links = [
  { href: '#features', label: 'Modules' },
  { href: '#showcase', label: 'Configuration' },
  { href: '#commands', label: 'Commandes' },
  { href: '#install', label: 'Invitation' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
      style={{
        position: 'fixed',
        top: '1.5rem',
        left: '50%',
        translateX: '-50%',
        width: 'min(1200px, 92vw)',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.75rem 1.5rem',
        background: scrolled ? 'rgba(255, 251, 246, 0.95)' : 'rgba(255, 251, 246, 0.7)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        border: '1px solid rgba(168, 216, 255, 0.3)',
        borderRadius: '100px',
        boxShadow: scrolled
          ? '0 8px 40px rgba(14, 27, 51, 0.1)'
          : '0 4px 30px rgba(14, 27, 51, 0.06)',
        transition: 'background 0.4s, box-shadow 0.4s',
      }}
    >
      <a
        href="#"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          fontFamily: 'var(--display)',
          fontWeight: 600,
          fontSize: '1.2rem',
          fontStyle: 'italic',
          fontVariationSettings: "'opsz' 144",
        }}
      >
        <motion.img
          src="/yunari.jpg"
          alt="Yunari"
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--sky-primary)',
          }}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.8 }}
        />
        <span>Yunari</span>
      </a>

      <ul
        className="nav-links-list"
        style={{
          display: 'flex',
          gap: '2rem',
          listStyle: 'none',
          fontSize: '0.9rem',
          fontWeight: 500,
        }}
      >
        {links.map((l) => (
          <li key={l.href}>
            <NavLink href={l.href}>{l.label}</NavLink>
          </li>
        ))}
      </ul>

      <MagneticButton>
        <a
          href="#install"
          style={{
            display: 'inline-block',
            padding: '0.55rem 1.2rem',
            background: 'var(--navy)',
            color: 'var(--cream)',
            borderRadius: '100px',
            fontSize: '0.85rem',
            fontWeight: 600,
          }}
        >
          Commencer →
        </a>
      </MagneticButton>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-list { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: hovered ? 'var(--navy)' : 'var(--slate)',
        position: 'relative',
        transition: 'color 0.2s',
      }}
    >
      {children}
      <AnimatePresence>
        {hovered && (
          <motion.span
            layoutId="navUnderline"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ width: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'absolute',
              bottom: -4,
              left: 0,
              height: 2,
              background: 'var(--sky-vivid)',
            }}
          />
        )}
      </AnimatePresence>
    </a>
  );
}
