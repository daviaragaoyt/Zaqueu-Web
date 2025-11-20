import type { CSSProperties } from 'react';

// --- ESTILOS DO "HERO" (Fundo Azul, Texto Branco) ---
const heroBase: Record<string, CSSProperties> = {
  heroContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '2rem',
  },
  heroContent: {
    flex: 1,
  },
  title: {
    fontSize: '4rem',
    color: 'rgba(26, 39, 91, 1)', // Texto Branco
    margin: '0 0 0.5rem 0',
  },
  subtitle: {
    fontSize: '2.3rem',
    color: 'rgba(26, 39, 91, 1)', // Texto Branco
    margin: '0 0 1rem 0',

  },
  description: {
    fontSize: '1.2rem',
    color: 'rgba(26, 39, 91, 1)', // Branco com transparência
    marginBottom: '2rem',
  },
  heroButton: {
    width: '50%',
    padding: '12px 0',
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(to right, rgba(26, 39, 91, 1), rgba(46, 71, 189, 1)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  heroImage: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'cover',
  }
};

const heroMobile: Record<string, CSSProperties> = {
  heroSection: { padding: '3rem 0' },
  heroContainer: {
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: { fontSize: '2.5rem' },
  subtitle: { fontSize: '1.5rem' },
  description: { color: 'rgba(255, 255, 255, 0.8)' },
  heroImage: { marginTop: '3rem', order: -1 },
  imagePlaceholder: { maxWidth: '300px', height: 'auto' }
};

// --- ESTILOS DAS "FEATURES" (Cards com borda lateral azul) ---
const featuresBase: Record<string, CSSProperties> = {
  sectionTitle: {
    fontSize: '2.2rem',
    textAlign: 'center',
    color: 'rgba(26, 39, 91, 1)',
    marginBottom: '1rem',
  },
  sectionSubtitle: {
    fontSize: '1.1rem',
    textAlign: 'center',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  },
  featuresGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '2rem',
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    padding: '2rem',
    backgroundColor: '#FFFFFF',
    borderRadius: '12px',
    // Borda fina cinza
    border: '1px solid #E0E0E0',
    // A TAG AZUL NA ESQUERDA
    borderLeft: '12px solid rgba(26, 39, 91, 1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    overflow: 'hidden',
  },
  iconWrapper: {
    fontSize: '3rem',
    color: 'rgba(26, 39, 91, 1)',
    marginTop: '5px',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: '1.25rem',
    margin: '0 0 0.5rem 0',
    color: 'rgba(26, 39, 91, 1)',
    fontWeight: 700,
  },
  cardDescription: {
    fontSize: '0.9rem',
    color: '#555',
    margin: 0,
    lineHeight: 1.6,
  }
};

const featuresMobile: Record<string, CSSProperties> = {
  sectionTitle: { fontSize: '1.8rem' },
  sectionSubtitle: { fontSize: '1rem', marginBottom: '2rem' },
  featuresGrid: { gridTemplateColumns: '1fr', gap: '1.5rem' },
  card: { padding: '1.5rem', gap: '1rem' },
  iconWrapper: { fontSize: '2.5rem' },
  cardTitle: { fontSize: '1.1rem' }
};

// --- ESTILOS DO "ABOUT" ---
const aboutBase: Record<string, CSSProperties> = {
  aboutContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    color: '#333',
  },
  aboutHeader: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  aboutHeaderTitle: {
    fontSize: '2.5rem',
    color: 'rgba(26, 39, 91, 1)',
    margin: '0 0 1rem 0',
  },
  aboutParagraph: {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  aboutInfoBlock: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'flex-start',
  },
  aboutTextContent: {
    flex: 2,
  },
  aboutImageWrapper: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutImage: {
    maxWidth: '100%',
    height: 'auto',
  },
  aboutList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  aboutListItem: {
    marginBottom: '1.5rem',
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  aboutListItemTitle: {
    fontWeight: 700,
    color: 'rgba(26, 39, 91, 1)',
    marginBottom: '0.5rem',
  },
  aboutListItemDescription: {
    color: '#555',
  },
  aboutDownloadButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '10px 20px',
    background: 'linear-gradient(to right, rgba(26, 39, 91, 1), rgba(46, 71, 189, 1)',
    color: 'white',
    borderRadius: '8px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    transition: 'background-color 0.2s ease',
    marginTop: '1rem',
  },
  aboutDownloadButtonIcon: {
    fontSize: '1.2rem',
  }
};

const aboutMobile: Record<string, CSSProperties> = {
  aboutHeaderTitle: { fontSize: '2rem' },
  aboutInfoBlock: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  aboutTextContent: {
    textAlign: 'center',
  },
  aboutListItem: {
    textAlign: 'center',
  }
};

// --- ESTILOS DO CARROSSEL DE TAGS (Ajustado para preencher) ---
const carouselBase: Record<string, CSSProperties> = {
  carouselContainer: {
    position: 'relative',
    width: '100%',
    padding: '3rem 0',
    boxSizing: 'border-box',
    overflow: 'hidden',
    cursor: 'grab',
    backgroundColor: '#FFFFFF',
  },
  carouselViewport: {
    overflow: 'hidden',
    width: '100%',
  },
  carouselTrack: {
    display: 'flex',
    width: '100%',
    // Transição controlada no index.tsx
  },
  carouselSlidePage: {
    minWidth: '100%', // 100% da largura da tela
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between', // Distribui itens igualmente
    alignItems: 'center',
    padding: '0 10px',
    boxSizing: 'border-box',
    gap: '15px',
  },
  carouselTag: {
    flex: 1, // Ocupa o espaço disponível
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 5px',
    border: `1px solid rgba(26, 39, 91, 1)`,
    borderRadius: '50px',
    color: `rgba(26, 39, 91, 1)`,
    fontSize: '1rem',
    fontWeight: 600,
    userSelect: 'none',
    backgroundColor: '#fff',
    whiteSpace: 'nowrap',
    textAlign: 'center',
  }
};

const carouselMobile: Record<string, CSSProperties> = {
  carouselContainer: {
    padding: '2rem 0',
  },
  carouselTag: {
    fontSize: '0.85rem',
    padding: '8px 5px',
  },
};

// --- ESTILOS DA LICENÇA ---
const licenseBase: Record<string, CSSProperties> = {
  licenseContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '3rem',
  },
  licenseTextContent: {
    flex: 1,
    color: '#333',
    maxWidth: '500px',
  },
  licenseTitle: {
    fontSize: '2rem',
    color: 'rgba(26, 39, 91, 1)',
    marginBottom: '1rem',
  },
  licenseParagraph: {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  licenseList: {
    listStyleType: 'decimal',
    paddingLeft: '1.5rem',
    margin: 0,
  },
  licenseListItem: {
    marginBottom: '1rem',
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  licenseCard: {
    flex: 0.7,
    minWidth: '300px',
    padding: '2.5rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    border: '2px solid rgba(217, 217, 217, 1)',
    textAlign: 'center',
    color: '#000',
  },
  licenseCardTitle: {
    fontSize: '1.5rem',
    margin: '0 0 1rem 0',
  },
  licensePrice: {
    fontSize: '3.5rem',
    fontWeight: 700,
    margin: '0 0 0.5rem 0',
  },
  licenseDuration: {
    fontSize: '1rem',
    color: '#000',
    marginBottom: '2rem',
  },
  licenseFeaturesList: {
    listStyleType: 'none',
    padding: 0,
    margin: '0 0 2rem 0',
  },
  licenseFeatureItem: {
    marginBottom: '0.8rem',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px'
  },
  licenseCardButton: {
    width: '100%',
    padding: '12px 0',
    fontSize: '1.1rem',
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(to right, rgba(26, 39, 91, 1), rgba(46, 71, 189, 1)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};

const licenseMobile: Record<string, CSSProperties> = {
  licenseContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem',
  },
  licenseTextContent: {
    textAlign: 'center',
    maxWidth: 'unset',
  },
  licenseList: {
    textAlign: 'left',
    margin: '0 auto',
    maxWidth: '300px',
  },
  licenseCard: {
    minWidth: 'unset',
    width: '90%',
    maxWidth: '400px',
    padding: '2rem 1.5rem',
  },
  licensePrice: { fontSize: '3rem' },
};

// --- ESTILOS DO CONTATO ---
const contactBase: Record<string, CSSProperties> = {
  contactTitle: {
    fontSize: '2.2rem',
    textAlign: 'center',
    color: 'rgba(26, 39, 91, 1)',
    marginBottom: '1rem',
  },
  contactSubtitle: {
    fontSize: '1rem',
    textAlign: 'center',
    color: '#555',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  },
  contactIconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
  },
  contactIconWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '120px',
    height: '120px',
    borderRadius: '50%',

    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    flexShrink: 0,
  },
  contactIconWrapperHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
  },
  contactIcon: {
    fontSize: '3rem',
    color: 'rgba(26, 39, 91, 1)',
  },
  contactIconLabel: {
    fontSize: '0.85rem',
    color: '#555',
    marginTop: '0.5rem',
  }
};

const contactMobile: Record<string, CSSProperties> = {
  contactTitle: { fontSize: '1.8rem' },
  contactSubtitle: { fontSize: '0.9rem', marginBottom: '2rem' },
  contactIconsContainer: {
    gap: '1.5rem',
  },
  contactIconWrapper: {
    width: '100px',
    height: '100px',
  },
  contactIcon: { fontSize: '2.5rem' },
};

// --- FUNÇÃO FINAL DE MERGE ---
export const getStyles = (isMobile: boolean): Record<string, CSSProperties> => {
  const base = { ...heroBase, ...featuresBase, ...aboutBase, ...carouselBase, ...licenseBase, ...contactBase };
  if (!isMobile) return base;

  const mobile = { ...heroMobile, ...featuresMobile, ...aboutMobile, ...carouselMobile, ...licenseMobile, ...contactMobile };

  return Object.keys(base).reduce((acc, key) => {
    return {
      ...acc,
      [key]: {
        ...base[key],
        ...(mobile[key] || {})
      }
    };
  }, {} as Record<string, CSSProperties>);
};