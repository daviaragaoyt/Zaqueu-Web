import React, { useState } from 'react';
import { getStyles } from './styles';
import { useMediaQuery } from '../../hooks/useMediaQuery';

// Ícones (Instale se não tiver: npm install react-icons)
import { FaUserFriends, FaHandHoldingUsd, FaChartLine } from 'react-icons/fa';

// Definindo os tipos de abas possíveis
type ActiveTab = 'home' | 'clientes' | 'pagamentos' | 'rendimentos';

const AdminPage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const styles = getStyles(isMobile);

  const [activeTab, setActiveTab] = useState<ActiveTab>('home');

  // Função auxiliar para renderizar o item do menu
  const renderMenuItem = (id: ActiveTab, label: string, icon: React.ReactNode) => {
    const isActive = activeTab === id;
    // Mescla o estilo base com o estilo ativo se necessário
    const itemStyle = isActive 
      ? { ...styles.menuItem, ...styles.menuItemActive } 
      : styles.menuItem;

    return (
      <div style={itemStyle} onClick={() => setActiveTab(id)}>
        <span style={{ fontSize: '1.2rem' }}>{icon}</span>
        {/* No mobile muito pequeno, poderíamos esconder o texto, mas vamos manter por enquanto */}
        <span>{label}</span>
      </div>
    );
  };

  // Renderiza o conteúdo central baseado na aba
  const renderContent = () => {
    switch (activeTab) {
      case 'clientes':
        return <h2>Gestão de Clientes (Em breve)</h2>;
      case 'pagamentos':
        return <h2>Controle de Pagamentos (Em breve)</h2>;
      case 'rendimentos':
        return <h2>Relatório de Rendimentos (Em breve)</h2>;
      default:
        // A tela padrão da imagem (Zaqueu com marca d'água)
        return (
          <div style={styles.centralBox}>
            {/* Marca d'água simulando o logo Z */}
            <div style={styles.watermarkZ}>Z</div>
            
            {/* Se você tiver a imagem exata do fundo, use assim: */}
            {/* <img src="/fundo-admin.png" alt="Bg" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain', opacity: 0.1 }} /> */}
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      {/* --- SIDEBAR --- */}
      <aside style={styles.sidebar}>
        <div style={styles.sidebarHeader} onClick={() => setActiveTab('home')}>
          Admin
        </div>
        
        <nav style={styles.menuList}>
          {renderMenuItem('clientes', 'Clientes', <FaUserFriends />)}
          {renderMenuItem('pagamentos', 'Pagamentos', <FaHandHoldingUsd />)}
          {renderMenuItem('rendimentos', 'Rendimentos', <FaChartLine />)}
        </nav>
      </aside>

      {/* --- CONTEÚDO --- */}
      <main style={styles.mainContent}>
        <div style={styles.headerTitleContainer}>
          <h1 style={styles.headerTitle}>Zaqueu</h1>
        </div>

        <div style={styles.contentArea}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminPage;