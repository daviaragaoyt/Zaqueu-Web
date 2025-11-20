import type { CSSProperties } from 'react';

const colors = {
  primary: 'rgba(26, 39, 91, 1)', // Azul escuro do título/texto
  button: 'rgba(26, 39, 91, 1)', // Azul do botão
  text: '#333',
  border: '#ccc',
  overlay: 'rgba(0, 0, 0, 0.6)',
};

const baseStyles: Record<string, CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: colors.overlay,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999, // Fica acima de tudo
    backdropFilter: 'blur(2px)', // Efeito de desfoque no fundo
  },
  modalContainer: {
    backgroundColor: '#fff',
    width: '90%',
    maxWidth: '900px',
    maxHeight: '90vh', // Altura máxima da tela
    overflowY: 'auto', // Scroll se a tela for pequena
    borderRadius: '12px',
    padding: '2rem',
    position: 'relative',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
  },
  closeButton: {
    position: 'absolute',
    top: '15px',
    right: '20px',
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666',
  },
  headerTitle: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: '1.8rem',
    marginBottom: '2rem',
    fontWeight: 700,
  },
  bodyContent: {
    display: 'flex',
    gap: '3rem',
    alignItems: 'flex-start',
  },
  
  // --- LADO ESQUERDO (QR CODE) ---
  leftSection: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '20px',
  },
  instructionText: {
    fontSize: '1rem',
    lineHeight: 1.5,
    color: colors.text,
    marginBottom: '1rem',
    textAlign: 'left',
  },
  pixTitle: {
    fontSize: '1.5rem',
    fontWeight: 700,
    color: colors.primary,
    marginBottom: '1rem',
  },
  qrCodeImage: {
    width: '200px',
    height: '200px',
    objectFit: 'contain',
  },

  // --- LADO DIREITO (FORMULÁRIO) ---
  rightSection: {
    flex: 1,
    border: `1px solid ${colors.border}`,
    borderRadius: '12px',
    padding: '2rem',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '8px',
    border: `1px solid ${colors.border}`,
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box', // Importante para não quebrar o layout
  },
  submitButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: 'rgba(46, 71, 189, 1)', // Azul um pouco mais claro para o botão
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: '1rem',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  }
};

const mobileStyles: Record<string, CSSProperties> = {
  modalContainer: {
    padding: '1.5rem',
    width: '95%',
  },
  bodyContent: {
    flexDirection: 'column', // Empilha no mobile
    gap: '2rem',
  },
  leftSection: {
    width: '100%',
    marginTop: '0',
  },
  rightSection: {
    width: '100%',
    padding: '1.5rem',
    boxSizing: 'border-box',
  },
  qrCodeImage: {
    width: '150px',
    height: '150px',
  }
};

export const getModalStyles = (isMobile: boolean): Record<string, CSSProperties> => {
  if (!isMobile) return baseStyles;

  // Merge recursivo simples para mobile
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