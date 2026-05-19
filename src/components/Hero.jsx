import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from 'framer-motion';
import MagneticButton from './MagneticButton';

const stats = [
  { num: '28', label: 'commandes slash' },
  { num: '10+', label: 'modules' },
  { num: '∞', label: 'serveurs' },
  { num: '24/7', label: 'hébergé' },
];

const tags = [
  { text: '⚙️ /config', top: '12%', right: '-10%', delay: 0, bg: 'var(--cream)' },
  { text: '💙 Soft & smart', bottom: '18%', left: '-12%', delay: 1, bg: 'var(--rose-cream)' },
  { text: '🛡️ Automod', top: '55%', right: '-8%', delay: 2, bg: 'var(--lavender)' },
];

export default function Hero() {
  const portraitRef = useRef(null);

  // Tilt 3D : on suit la souris RELATIVE au portrait
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring pour adoucir le mouvement
  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), {
    damping: 20,
    stiffness: 150,
  });

  // Parallax au scroll : le hero monte plus vite que le reste
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  const handleMove = (e) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Variantes pour le stagger du titre
  const title = ['Le bot Discord', 'que ton serveur', 'mérite enfin.'];

  return (
    <motion.header
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 0 6rem',
        y: heroY,
        opacity: heroOpacity,
      }}
    >
      <div
        style={{
          width: 'var(--container)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
        className="hero-grid"
      >
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1rem',
              background: 'rgba(168, 216, 255, 0.25)',
              border: '1px solid rgba(168, 216, 255, 0.6)',
              borderRadius: '100px',
              fontFamily: 'var(--mono)',
              fontSize: '0.75rem',
              fontWeight: 500,
              color: 'var(--accent)',
              letterSpacing: '0.05em',
              marginBottom: '2rem',
            }}
          >
            <motion.span
              animate={{
                opacity: [1, 0.4, 1],
                boxShadow: [
                  '0 0 12px var(--accent)',
                  '0 0 4px var(--accent)',
                  '0 0 12px var(--accent)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
                display: 'block',
              }}
            />
            v1.0 · 28 commandes · 100% configurable
          </motion.div>

          {/* Titre stagger */}
          <h1
            style={{
              fontFamily: 'var(--display)',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: 'var(--navy)',
              marginBottom: '1.5rem',
              fontVariationSettings: "'opsz' 144",
            }}
          >
            {title.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.3 + i * 0.15,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                style={{
                  display: 'block',
                  perspective: 1000,
                  fontStyle: i === 2 ? 'italic' : 'normal',
                  fontWeight: i === 2 ? 400 : 300,
                  background:
                    i === 2
                      ? 'linear-gradient(135deg, var(--accent) 0%, var(--accent-rose) 100%)'
                      : 'none',
                  WebkitBackgroundClip: i === 2 ? 'text' : 'border-box',
                  WebkitTextFillColor: i === 2 ? 'transparent' : 'inherit',
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            style={{
              fontSize: '1.15rem',
              color: 'var(--slate)',
              lineHeight: 1.7,
              maxWidth: 540,
              marginBottom: '2.5rem',
            }}
          >
            Yunari est un bot de gestion <strong>tout-en-un</strong>, pensé pour être configuré en
            quelques clics directement dans Discord. Modération intelligente, tickets, niveaux,
            économie, logs détaillés — tout est là, et c'est <em>joli</em>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <MagneticButton strength={0.3}>
              <a href="#install" className="btn-primary">
                <span>Ajouter à mon serveur</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a href="#features" className="btn-ghost">
                ✨ Découvrir les modules
              </a>
            </MagneticButton>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 1.2 } },
            }}
            style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}
          >
            {stats.map((s) => (
              <motion.div
                key={s.label}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: '2rem',
                    fontWeight: 600,
                    fontVariationSettings: "'opsz' 144",
                    color: 'var(--navy)',
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--slate)',
                    marginTop: '0.3rem',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PORTRAIT 3D */}
        <motion.div
          ref={portraitRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: 1500,
          }}
        >
          {/* Anneaux décoratifs */}
          {[110, 125, 140].map((size, i) => (
            <motion.div
              key={size}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{
                duration: 30 + i * 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${size}%`,
                height: `${size}%`,
                marginTop: `-${size / 2}%`,
                marginLeft: `-${size / 2}%`,
                borderRadius: '50%',
                border: '1px dashed var(--sky-vivid)',
                pointerEvents: 'none',
                opacity: 0.5 - i * 0.15,
                maxWidth: 800,
                maxHeight: 800,
              }}
            />
          ))}

          {/* Portrait avec tilt */}
          <motion.div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: 480,
              aspectRatio: 1,
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow:
                '0 30px 60px -15px rgba(91, 159, 232, 0.4), 0 0 0 1px rgba(168, 216, 255, 0.3), 0 0 100px -20px var(--rose-mist)',
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/yunari.jpg"
              alt="Yunari"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Reflet glossy qui suit la souris */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.25), transparent 40%)',
                pointerEvents: 'none',
                opacity: useTransform(
                  [mouseX, mouseY],
                  ([x, y]) => Math.min(1, Math.sqrt(x * x + y * y) / 200)
                ),
              }}
            />
          </motion.div>

          {/* Tags flottants */}
          {tags.map((tag, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1 + i * 0.2,
                type: 'spring',
                stiffness: 200,
              }}
              style={{
                position: 'absolute',
                top: tag.top,
                bottom: tag.bottom,
                left: tag.left,
                right: tag.right,
                padding: '0.6rem 1.1rem',
                background: tag.bg,
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: 600,
                boxShadow: '0 10px 30px rgba(14, 27, 51, 0.08)',
                border: '1px solid rgba(168, 216, 255, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                whiteSpace: 'nowrap',
                zIndex: 2,
              }}
            >
              <motion.span
                animate={{
                  y: [0, -10, 0],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: tag.delay,
                }}
                style={{ display: 'inline-flex', gap: '0.4rem' }}
              >
                {tag.text}
              </motion.span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:first-child > div:first-child { margin-inline: auto; }
        }
      `}</style>
    </motion.header>
  );
}
