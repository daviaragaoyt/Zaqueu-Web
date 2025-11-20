import type { CSSProperties } from 'react';

const colors = {
  bgDark: '#0f172a', // Fundo escuro da imagem
  primary: 'rgba(26, 39, 91, 1)', // Azul escuro do logo
  button: 'rgba(46, 71, 189, 1)', // Azul do botão
  buttonHover: 'rgba(36, 56, 150, 1)',
  textLabel: '#666',
  border: '#e2e8f0',
};

const baseStyles: Record<string, CSSProperties> = {
  container: {
    display: 'flex',
    width: '100vw',
    height: '91vh',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  // --- LADO ESQUERDO (IMAGEM) ---
  leftPanel: {
    flex: 1, // Ocupa 50% da tela
    backgroundColor: colors.bgDark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  leftImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Faz a imagem preencher tudo sem distorcer
  },
  
  // --- LADO DIREITO (FORMULÁRIO) ---
  rightPanel: {
    flex: 1, // Ocupa os outros 50%
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '2rem',
    backgroundColor: '#ffffff',
  },
  formContainer: {
    width: '100%',
    maxWidth: '400px',
    padding: '2.5rem', // Espaçamento interno
    // Borda suave e sombra leve como na imagem
    border: `1px solid ${colors.border}`,
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)', 
  },
  
  // --- LOGO ---
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '2rem',
  },

  logoText: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: colors.primary,
    fontFamily: 'sans-serif',
  },

  // --- INPUTS ---
  formGroup: {
    marginBottom: '1.5rem',
  },
  label: {
    display: 'block',
    fontSize: '0.9rem',
    color: colors.textLabel,
    marginBottom: '0.5rem',
    fontWeight: 500,
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    border: `1px solid ${colors.border}`,
    borderRadius: '6px',
    outline: 'none',
    boxSizing: 'border-box',
    color: '#333',
    transition: 'border-color 0.2s',
  },
  
  // --- BOTÃO ---
  submitButton: {
    width: '100%',
    padding: '12px',
    fontSize: '1rem',
    fontWeight: 600,
    color: '#ffffff',
    backgroundColor: colors.button,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '1rem',
    transition: 'background-color 0.2s, opacity 0.2s',
  },

  // --- LINK RODAPÉ ---
  footerLink: {
    marginTop: '1.5rem',
    display: 'block',
    fontSize: '0.9rem',
    color: '#444',
    textDecoration: 'underline',
    cursor: 'pointer',
    textAlign: 'left',
  }
};

const mobileStyles: Record<string, CSSProperties> = {
  // No mobile, a imagem some para focar no login
  leftPanel: {
    display: 'none',
  },
  rightPanel: {
    width: '100%',
    padding: '20px',
    justifyContent: 'center',
  },
  formContainer: {
    border: 'none', 
    boxShadow: 'none',
    padding: '0',
  }
};

export const getStyles = (isMobile: boolean): Record<string, CSSProperties> => {
  const styles = { ...baseStyles };

  if (isMobile) {
    return Object.keys(baseStyles).reduce((acc, key) => {
      return {
        ...acc,
        [key]: {
          ...baseStyles[key],
          ...(mobileStyles[key] || {})
        }
      };
    }, {} as Record<string, CSSProperties>);
  }

  return styles;
};