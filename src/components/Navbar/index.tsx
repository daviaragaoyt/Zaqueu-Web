import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStyles } from './styles';
import { FaBars, FaTimes } from 'react-icons/fa';

// 1. Definimos que o componente aceita isMobile
interface NavbarProps {
  isMobile: boolean;
}

// 2. Recebemos isMobile como prop
const Navbar: React.FC<NavbarProps> = ({ isMobile }) => {
  const navigate = useNavigate();
  
  // Estado local apenas para o menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estilos
  const styles = getStyles(isMobile, isMenuOpen);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginClick = () => {
    navigate('/login');
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <a href="/#home" style={styles.logo} onClick={handleLinkClick}>
           <strong>Zaqueu</strong>
        </a>

        <button style={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul style={styles.navLinks}>
          <li><a href="/#home" style={styles.navLinkItem} onClick={handleLinkClick}>Home</a></li>
          <li><a href="/#features" style={styles.navLinkItem} onClick={handleLinkClick}>Funcionalidades</a></li>
          <li><a href="/#license" style={styles.navLinkItem} onClick={handleLinkClick}>Solicitar licença</a></li>
          <li><a href="/#contact" style={styles.navLinkItem} onClick={handleLinkClick}>Contato</a></li>
          
          {isMobile && (
             <li style={{ width: '100%' }}>
               <button 
                 style={{ ...styles.navButton, display: 'block', width: '100%' }}
                 onClick={handleLoginClick}
               >
                 Entrar
               </button>
             </li>
          )}
        </ul>

        {!isMobile && (
          <button style={styles.navButton} onClick={handleLoginClick}>
            Entrar
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;