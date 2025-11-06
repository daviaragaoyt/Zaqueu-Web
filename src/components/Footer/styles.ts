import type{ CSSProperties } from 'react';

const baseStyles: Record<string, CSSProperties> = {
  footer: {
    width: '100%',
    padding: '3rem 0',
   background: 'linear-gradient(to right,rgba(24, 37, 86, 1), rgba(52, 81, 188, 1)',
    color: '#aaa',
    borderTop: '1px solid #444',
  },
  container: {
    width: '90%',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '1.2rem',
  }
};

const mobileStyles: Record<string, CSSProperties> = {
  footer: {
    padding: '2rem 0',
  }
};

export const getStyles = (isMobile: boolean): Record<string, CSSProperties> => {
  if (!isMobile) return baseStyles;

  return {
    footer: { ...baseStyles.footer, ...mobileStyles.footer },
    container: { ...baseStyles.container }
  };
};