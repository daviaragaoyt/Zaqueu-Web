import type{ CSSProperties } from 'react';

// Esta interface define as props que o estilo pode receber
interface SectionStyleProps {
  isMobile: boolean;
  // Podemos adicionar mais props, ex: cor de fundo
  backgroundColor?: string;
}

const baseStyles: Record<string, CSSProperties> = {
  section: {
    padding: '5rem 0',
    boxSizing: 'border-box',
    width: '100%',
  },
  container: {
    width: '90%',
    maxWidth: '1100px',
    margin: '0 auto',
  }
};

const mobileStyles: Record<string, CSSProperties> = {
  section: {
    padding: '3rem 0',
  }
};

// A função agora recebe um objeto de props
export const getStyles = (props: SectionStyleProps): Record<string, CSSProperties> => {
  const { isMobile, backgroundColor } = props;
  
  // Define os estilos base
  let styles = { ...baseStyles };
  
  // Aplica estilos mobile se necessário
  if (isMobile) {
    styles.section = { ...styles.section, ...mobileStyles.section };
  }
  
  // Aplica cor de fundo customizada
  if (backgroundColor) {
    styles.section = { ...styles.section, backgroundColor: backgroundColor };
  }

  return styles;
};