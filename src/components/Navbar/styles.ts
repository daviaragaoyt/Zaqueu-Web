import type { CSSProperties } from 'react';

const theme = {
  colors: {
    primary: '#4A4E69',
    button:" rgba(26, 39, 91, 1), rgba(46, 71, 189, 1)",
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
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '2rem',
  },
  navLinkItem: {
    textDecoration: 'none',
    color: theme.colors.textLight,
    fontWeight: 500,
  },
  navButton: {
    padding: '10px 24px',
    fontSize: '1rem',
    fontWeight: 600,
    color: 'white',
    background: 'linear-gradient(to right, rgba(26, 39, 91, 1), rgba(46, 71, 189, 1)',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  }
};

const mobileStyles: Record<string, CSSProperties> = {
  navLinks: {
    display: 'none', // Esconde links no mobile
  },
  navButton: {
    padding: '8px 16px',
    fontSize: '0.9rem',
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