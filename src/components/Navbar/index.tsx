import React from 'react';
import { getStyles } from './styles';


interface NavbarProps {
  isMobile: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isMobile }) => {
  const styles = getStyles(isMobile);

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <div style={styles.logo}>
          <img src='/logo.png' alt="Logo" />
        </div>
        <ul style={styles.navLinks}>
          <li><a href="/" style={styles.navLinkItem}>Home</a></li>
          <li><a href="#features" style={styles.navLinkItem}>Funcionalidades</a></li>
          <li><a href="#license" style={styles.navLinkItem}>Solicitar licença</a></li>
          <li><a href="#contact" style={styles.navLinkItem}>Contato</a></li>
        </ul>
        <button style={styles.navButton}>Entrar</button>
      </div>
    </nav>
  );
};

export default Navbar;