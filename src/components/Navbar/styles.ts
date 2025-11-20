import type { CSSProperties } from 'react';

const theme = {
  colors: {
    primary: 'rgba(26, 39, 91, 1)', // Ajustei para a cor azul do seu tema
    button: 'rgba(46, 71, 189, 1)',
    textLight: '#555',
    bgLight: '#FFFFFF',
    border: '#E0E0E0',
  },
};

const baseStyles: Record<string, CSSProperties> = {
  nav: {
    width: '100%',
    padding: '1.5rem 0',
    backgroundColor: theme.colors.bgLight,
    borderBottom: `1px solid ${theme.colors.border}`,
    boxSizing: 'border-box',
    position: 'sticky', // Opcional: mantem o menu fixo no topo
    top: 0,
    zIndex: 1000,
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: theme.colors.primary,
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  // Estilo padrão dos links (Desktop)
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
    alignItems: 'center',
  },
  navLinkItem: {
    textDecoration: 'none',
    color: theme.colors.textLight,
    fontWeight: 500,
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  navButton: {
    padding: '10px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    color: 'white',
    backgroundColor: theme.colors.button,
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  // Botão do Menu (Escondido no Desktop)
  menuToggle: {
    display: 'none', 
  }
};

const mobileStyles: Record<string, CSSProperties> = {
  navButton: {
    display: 'none', // Escondemos o botão "Entrar" do header principal no mobile para limpar espaço
  },
  // Mostra o ícone do menu no mobile
  menuToggle: {
    display: 'block',
    background: 'transparent',
    border: 'none',
    fontSize: '1.8rem',
    cursor: 'pointer',
    color: theme.colors.primary,
  },
  // Transforma a lista de links em um menu dropdown/overlay
  navLinks: {
    display: 'none', // Por padrão escondido, a lógica JS vai alterar isso ou usamos um estilo condicional
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '2rem',
    boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
    gap: '1.5rem',
    borderTop: '1px solid #eee',
  },
  // Estilo quando o menu está ABERTO (será aplicado via lógica JS)
  navLinksOpen: {
    display: 'flex', // Mostra em coluna
  }
};

export const getStyles = (isMobile: boolean, isMenuOpen: boolean): Record<string, CSSProperties> => {
  // Combina base com mobile se necessário
  const styles = { ...baseStyles };
  
  if (isMobile) {
    // Aplica sobrescrições mobile
    styles.navButton = { ...styles.navButton, ...mobileStyles.navButton };
    styles.menuToggle = { ...styles.menuToggle, ...mobileStyles.menuToggle };
    
    // Lógica de abrir/fechar o menu
    if (isMenuOpen) {
       // Se aberto, usa o estilo de flex column absolute
       styles.navLinks = { ...baseStyles.navLinks, ...mobileStyles.navLinks, ...mobileStyles.navLinksOpen };
    } else {
       // Se fechado, esconde
       styles.navLinks = { ...baseStyles.navLinks, ...mobileStyles.navLinks };
    }
  }

  return styles;
};