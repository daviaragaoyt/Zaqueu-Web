import React from 'react';
import { getStyles } from './styles';

interface SectionProps {
  children: React.ReactNode;
  isMobile: boolean;
  backgroundColor?: string;
  id?: string; // Para links âncora (ex: #features)
}

const Section: React.FC<SectionProps> = ({ children, isMobile, backgroundColor, id }) => {
  
  const styles = getStyles({ isMobile, backgroundColor });

  return (
    <section id={id} style={styles.section}>
      <div style={styles.container}>
        {children}
      </div>
    </section>
  );
};

export default Section;