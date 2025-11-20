import React from 'react';
import type { CSSProperties } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { getStyles } from './styles';

// --- 1. Importar o Modal ---
import LicenseModal from '../components/LicenseModal';

// Ícones
import { 
  FaChurch, FaUsers, FaBuilding, FaFileAlt, FaDownload, FaWhatsapp, 
  FaEnvelope, FaInstagram, FaPhone 
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

// --- DADOS ---
const featuresData = [
  { icon: <FaChurch />, title: 'Controle de Dízimos e Ofertas', description: 'Faça todo o gerenciamento financeiro da igreja, lance o recebimento de dízimos e ofertas.' },
  { icon: <FaUsers />, title: 'Gestão de membros', description: 'Cadastre e visualize informações dos membros participantes de sua igreja.' },
  { icon: <FaBuilding />, title: 'Controle Patrimonial', description: 'Faça o registro e monitoramento de todos os bens patrimoniais da igreja.' },
  { icon: <FaFileAlt />, title: 'Impressão de Relatórios', description: 'Visualize e realize a impressão dos relatórios de membros, custos, balanço do mês, entre outros.' }
];

const tagsData = [
  "Inteligência", "Versatilidade", "Segurança", "Conectividade", 
  "Menor Custo", "Alta disponibilidade", "Rapidez", "Eficiência", "Inovação"
];

const HomePage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const styles = getStyles(isMobile);

  // --- 2. Estado para controlar o Modal ---
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // --- ESTADOS DE HOVER ---
  const [isHeroButtonHovered, setIsHeroButtonHovered] = React.useState(false);
  const [isAboutDownloadHovered, setIsAboutDownloadHovered] = React.useState(false);
  const [isLicenseCardButtonHovered, setIsLicenseCardButtonHovered] = React.useState(false);
  const [hoveredContactIcon, setHoveredContactIcon] = React.useState<string | null>(null);

  // --- LÓGICA DO CARROSSEL INFINITO ---
  const [currentIndex, setCurrentIndex] = React.useState(1);
  const [transitionEnabled, setTransitionEnabled] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);

  // Configuração: 3 itens no mobile, 4 no desktop
  const itemsPerTagPage = isMobile ? 3 : 4;

  // 1. Agrupar tags em páginas (e preencher a última se necessário)
  const tagPages = React.useMemo(() => {
    const pages = [];
    for (let i = 0; i < tagsData.length; i += itemsPerTagPage) {
      pages.push(tagsData.slice(i, i + itemsPerTagPage));
    }
    
    // Se a última página não estiver cheia, pega itens do começo para completar
    const lastPage = pages[pages.length - 1];
    if (lastPage && lastPage.length < itemsPerTagPage) {
        const diff = itemsPerTagPage - lastPage.length;
        const fillers = tagsData.slice(0, diff);
        pages[pages.length - 1] = [...lastPage, ...fillers];
    }
    
    return pages;
  }, [itemsPerTagPage]);

  // 2. Criar array com Clones para o Loop Infinito
  const loopedTagPages = React.useMemo(() => {
    if (tagPages.length <= 1) return tagPages;
    // [Ultima, 1, 2, 3... Ultima, 1]
    return [tagPages[tagPages.length - 1], ...tagPages, tagPages[0]];
  }, [tagPages]);

  // 3. Auto-play
  React.useEffect(() => {
    if (loopedTagPages.length <= 1) return;

    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex(prev => prev + 1);
      }
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [isPaused, loopedTagPages.length]);

  // 4. Reset da Transição (Pulo Mágico)
  const handleTransitionEnd = () => {
    if (currentIndex === loopedTagPages.length - 1) {
      // Se chegou no clone do fim, pula para o início real
      setTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      // Se chegou no clone do início, pula para o fim real
      setTransitionEnabled(false);
      setCurrentIndex(loopedTagPages.length - 2);
    }
  };

  // Reativa a transição após o pulo
  React.useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
           setTransitionEnabled(true);
        });
      });
    }
  }, [transitionEnabled]);
  
  // --- FUNÇÕES AUXILIARES ---
  const getHoverStyle = (isHovered: boolean): CSSProperties => (isHovered ? { transform: 'scale(1.05)', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' } : {});
  const getContactIconHoverStyle = (iconName: string): CSSProperties => (hoveredContactIcon === iconName ? styles.contactIconWrapperHover : {});

  // --- 3. Função para abrir o Modal ---
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* --- 4. Componente do Modal --- */}
      <LicenseModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        isMobile={isMobile} 
      />

      {/* --- HERO (FUNDO AZUL) --- */}
      <Section isMobile={isMobile} backgroundColor="#fff" id="home">
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.title}>Zaqueu</h1>
            <h1 style={styles.subtitle}>Sistema de Gestão para a sua igreja</h1>
            <p style={styles.description}>
              Seja assertivo na tomada de decisões
            </p>
            <button
              style={{ ...styles.heroButton, ...getHoverStyle(isHeroButtonHovered) }}
              onMouseEnter={() => setIsHeroButtonHovered(true)}
              onMouseLeave={() => setIsHeroButtonHovered(false)}
              onClick={handleOpenModal} // <--- Adicionado evento onClick
            >
              Solicite sua licença
            </button>
          </div>
          <div style={styles.heroImage}>
            <img src='/pc-img.png' alt="Dashboard" style={styles.imagePlaceholder}/>
          </div>
        </div>
      </Section>

      {/* --- FEATURES (CARDS COM TAG AZUL) --- */}
      <Section isMobile={isMobile} backgroundColor="#fff" id="features">
        <h2 style={styles.sectionTitle}>Conheça algumas de nossas funcionalidades</h2>
        <p style={styles.sectionSubtitle}>
          Como um software focado em gestão, nosso sistema traz opções de
          cadastro, edição, visualização e exclusão de informações.
        </p>
        <div style={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.iconWrapper}>{feature.icon}</div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{feature.title}</h3>
                <p style={styles.cardDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* --- ABOUT --- */}
      <Section isMobile={isMobile} backgroundColor="#FFFFFF">
        <div style={styles.aboutContainer}>
          <div style={styles.aboutHeader}>
            <h2 style={styles.aboutHeaderTitle}>O ZAQUEU foi reformulado para ser uma aplicação totalmente Web:</h2>
            <p style={styles.aboutParagraph}>
              Faça todas as suas dúvidas e saber mais sobre as funcionalidades do sistema Zaqueu, faça o download e leia o arquivo com o manual de instruções:
              <br/>
              <a
                href="/manual-zaqueu.pdf"
                download
                style={{ ...styles.aboutDownloadButton, ...getHoverStyle(isAboutDownloadHovered) }}
                onMouseEnter={() => setIsAboutDownloadHovered(true)}
                onMouseLeave={() => setIsAboutDownloadHovered(false)}
              >
                <FaDownload style={styles.aboutDownloadButtonIcon} /> Manual de instruções - Zaqueu.pdf
              </a>
            </p>
          </div>
          <div style={styles.aboutInfoBlock}>
            <div style={styles.aboutTextContent}>
              <ul style={styles.aboutList}>
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Sem Instalação:</p>
                  <p style={styles.aboutListItemDescription}>Não é necessário instalar nenhum programa. O acesso é feito diretamente pelo navegador em qualquer dispositivo.</p>
                </li>
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Acesso Simultâneo:</p>
                  <p style={styles.aboutListItemDescription}>Com o sistema Zaqueu, você e sua equipe acessam o sistema de qualquer lugar, a qualquer momento.</p>
                </li>
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Nuvem:</p>
                  <p style={styles.aboutListItemDescription}>Todos os dispositivos se conectam ao Servidor Central na nuvem.</p>
                </li>
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Integridade e Segurança:</p>
                  <p style={styles.aboutListItemDescription}>O banco de dados continua hospedado na nuvem, garantindo alta disponibilidade.</p>
                </li>
              </ul>
            </div>
            <div style={styles.aboutImageWrapper}>
              <img src="/server.png" alt="Diagrama Servidor" style={styles.aboutImage} />
            </div>
          </div>
          <p style={styles.aboutParagraph}>
            Com o ZAQUEU WEB, sua igreja ganha em praticidade, segurança e escalabilidade.
          </p>
        </div>
      </Section>
      
      {/* --- CARROSSEL DE TAGS --- */}
      <Section isMobile={isMobile} backgroundColor="#FFFFFF">
        <div 
          style={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div style={styles.carouselViewport}>
            <div 
              style={{
                ...styles.carouselTrack,
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
              }} 
              onTransitionEnd={handleTransitionEnd}
            >
              {loopedTagPages.map((page, pageIndex) => (
                <div key={pageIndex} style={styles.carouselSlidePage}>
                  {page.map((tag, i) => (
                    <div key={`${tag}-${i}`} style={styles.carouselTag}>
                      {tag}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- LICENÇA --- */}
      <Section isMobile={isMobile} backgroundColor="#fff" id="license">
        <h2 style={styles.contactTitle}>Como obter sua licença?</h2>
        <div style={styles.licenseContainer}>
          <div style={styles.licenseTextContent}>
            <h3 style={styles.licenseTitle}>Obrigado por escolher o ZAQUEU!</h3>
            <p style={styles.licenseParagraph}>Atenção aos próximos passos para começar a usar o sistema:</p>
            <ol style={styles.licenseList}>
              <li style={styles.licenseListItem}><strong>Pagamento:</strong> Efetue o pagamento através do PIX;</li>
              <li style={styles.licenseListItem}><strong>Formulário:</strong> Preencha o cadastro e anexe o comprovante;</li>
              <li style={styles.licenseListItem}><strong>Liberação:</strong> Nossa equipe criará suas credenciais;</li>
              <li style={styles.licenseListItem}><strong>Acesso:</strong> Receba o link e senha por e-mail ou WhatsApp.</li>
            </ol>
            <p style={{ ...styles.licenseParagraph, fontSize: '0.85rem', color: '#777', marginTop: '1rem' }}>
              *Versão totalmente online, sem instalação.
            </p>
          </div>
          <div style={styles.licenseCard}>
            <h3 style={styles.licenseCardTitle}>Licença</h3>
            <p style={styles.licensePrice}>R$70<span style={{ fontSize: '1.5rem', fontWeight: 400 }}>/mês</span></p>
            <ul style={styles.licenseFeaturesList}>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> Acesso Ilimitado</li>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> Suporte Técnico</li>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> Backup Diário</li>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> Multi-usuários</li>
            </ul>
            <button
              style={{ ...styles.licenseCardButton, ...getHoverStyle(isLicenseCardButtonHovered) }}
              onMouseEnter={() => setIsLicenseCardButtonHovered(true)}
              onMouseLeave={() => setIsLicenseCardButtonHovered(false)}
              onClick={handleOpenModal} // <--- Adicionado evento onClick
            >
              Solicitar Licença
            </button>
          </div>
        </div>
      </Section>

      {/* --- CONTATO --- */}
      <Section isMobile={isMobile} backgroundColor="#FFFFFF" id="contact">
        <h2 style={styles.contactTitle}>Contato</h2>
        <p style={styles.contactSubtitle}>
          Caso queira entrar em contato com o nosso suporte e desenvolvedores.
        </p>
        <div style={styles.contactIconsContainer}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <div
              style={{ ...styles.contactIconWrapper, ...getContactIconHoverStyle('whatsapp') }}
              onMouseEnter={() => setHoveredContactIcon('whatsapp')}
              onMouseLeave={() => setHoveredContactIcon(null)}
            >
              <FaWhatsapp style={styles.contactIcon} />
              <span style={styles.contactIconLabel}>Whatsapp</span>
            </div>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <div
              style={{ ...styles.contactIconWrapper, ...getContactIconHoverStyle('email') }}
              onMouseEnter={() => setHoveredContactIcon('email')}
              onMouseLeave={() => setHoveredContactIcon(null)}
            >
              <FaEnvelope style={styles.contactIcon} />
              <span style={styles.contactIconLabel}>E-mail</span>
            </div>
          </a>
          <a href="#" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <div
              style={{ ...styles.contactIconWrapper, ...getContactIconHoverStyle('instagram') }}
              onMouseEnter={() => setHoveredContactIcon('instagram')}
              onMouseLeave={() => setHoveredContactIcon(null)}
            >
              <FaInstagram style={styles.contactIcon} />
              <span style={styles.contactIconLabel}>Instagram</span>
            </div>
          </a>
          <a href="#" style={{ textDecoration: 'none' }}>
            <div
              style={{ ...styles.contactIconWrapper, ...getContactIconHoverStyle('phone') }}
              onMouseEnter={() => setHoveredContactIcon('phone')}
              onMouseLeave={() => setHoveredContactIcon(null)}
            >
              <FaPhone style={styles.contactIcon} />
              <span style={styles.contactIconLabel}>Telefone</span>
            </div>
          </a>
        </div>
      </Section>
      <Footer isMobile={isMobile} />
    </>
  );
};

export default HomePage;