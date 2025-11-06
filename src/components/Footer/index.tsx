import React from 'react';
import { getStyles } from './styles';

interface FooterProps {
  isMobile: boolean;
}

const Footer: React.FC<FooterProps> = ({ isMobile }) => {
  const styles = getStyles(isMobile);

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>© {new Date().getFullYear()} Zaqueu. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;