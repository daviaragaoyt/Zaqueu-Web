import type { CSSProperties } from 'react';

const colors = {
  sidebarBg: 'rgba(35, 55, 135, 1)', // Azul sólido da sidebar
  sidebarActive: 'rgba(255, 255, 255, 0.1)', // Fundo levemente mais claro para item ativo
  textWhite: '#ffffff',
  primary: 'rgba(26, 39, 91, 1)', // Azul escuro do título Zaqueu
  border: '#cccccc'
};

const baseStyles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffffff',
    overflow: 'hidden', // Impede scroll da página inteira
  },
  
  // --- SIDEBAR ---
  sidebar: {
    width: '250px',
    height: '100%',
    backgroundColor: colors.sidebarBg,
    display: 'flex',
    flexDirection: 'column',
    color: colors.textWhite,
    flexShrink: 0, // Garante que a sidebar não encolha
    boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
  },
  sidebarHeader: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    fontSize: '1.5rem',
    fontWeight: 500,
    letterSpacing: '1px',
  },
  menuList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 25px',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '1rem',
    gap: '15px',
    transition: 'all 0.2s ease',
    textDecoration: 'none',
  },
  // Estilo para o item ativo (simulando a imagem)
  menuItemActive: {
    backgroundColor: colors.sidebarActive,
    color: '#ffffff',
    borderLeft: '4px solid #ffffff', // Detalhe visual
    paddingLeft: '21px', // Compensa a borda para manter alinhamento
  },
  
  // --- ÁREA PRINCIPAL ---
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto', // Scroll apenas no conteúdo se necessário
  },
  headerTitleContainer: {
    padding: '40px 0 20px 0',
    textAlign: 'center',
  },
  headerTitle: {
    fontSize: '3.5rem',
    color: colors.primary,
    fontWeight: 600,
    margin: 0,
  },
  
  // --- CONTAINER CENTRAL ---
  contentArea: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
  },
  centralBox: {
    width: '100%',
    maxWidth: '900px',
    height: '500px', // Altura fixa ou minHeight
    border: `1px solid ${colors.border}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff', // Fundo branco
  },
  // O "Z" de fundo (marca d'água)
  watermarkZ: {
    fontSize: '25rem', // Tamanho gigante
    fontWeight: 'bold',
    color: 'rgba(26, 39, 91, 0.03)', // Muito transparente
    userSelect: 'none',
    pointerEvents: 'none', // Não interfere em cliques
    fontFamily: 'sans-serif',
    fontStyle: 'italic',
  }
};

const mobileStyles: Record<string, CSSProperties> = {
  container: {
    flexDirection: 'column', // Empilha sidebar e conteúdo
  },
  sidebar: {
    width: '100%',
    height: 'auto',
    flexDirection: 'row', // Menu horizontal no mobile
    justifyContent: 'space-between',
    padding: '10px',
    alignItems: 'center',
  },
  sidebarHeader: {
    borderBottom: 'none',
    height: 'auto',
    fontSize: '1.2rem',
    marginRight: '20px',
  },
  menuList: {
    marginTop: 0,
    flexDirection: 'row',
    gap: '10px',
  },
  menuItem: {
    padding: '10px', // Menos padding
    fontSize: '0.9rem',
  },
  headerTitle: {
    fontSize: '2.5rem',
  },
  centralBox: {
    height: '300px', // Menor no mobile
  }
};

export const getStyles = (isMobile: boolean): Record<string, CSSProperties> => {
  if (!isMobile) return baseStyles;

  return Object.keys(baseStyles).reduce((acc, key) => {
    return {
      ...acc,
      [key]: {
        ...baseStyles[key],
        ...(mobileStyles[key] || {})
      }
    };
  }, {} as Record<string, CSSProperties>);
};