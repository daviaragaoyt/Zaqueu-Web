import React from 'react';
import type { CSSProperties } from 'react';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Section from '../components/Section';
import { getStyles } from './styles';

// Ícones (removidos FaChevronLeft e FaChevronRight)
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
  "Menor Custo", "Alta disponibilidade", "Rapidez"
];

// --- COMPONENTE ---
const HomePage: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const styles = getStyles(isMobile);

  // --- ESTADOS DE HOVER ---
  const [isHeroButtonHovered, setIsHeroButtonHovered] = React.useState(false);
  const [isAboutDownloadHovered, setIsAboutDownloadHovered] = React.useState(false);
  const [isLicenseCardButtonHovered, setIsLicenseCardButtonHovered] = React.useState(false);
  const [hoveredContactIcon, setHoveredContactIcon] = React.useState<string | null>(null);

  // --- LÓGICA DO CARROSSEL INFINITO ---
  const [currentIndex, setCurrentIndex] = React.useState(1); // Começa no primeiro item REAL (não no clone)
  const [transitionEnabled, setTransitionEnabled] = React.useState(true);
  const [isPaused, setIsPaused] = React.useState(false);

  // 1. Agrupa as tags em "páginas"
  const itemsPerTagPage = isMobile ? 3 : 5;
  const tagPages = React.useMemo(() => {
    const pages = [];
    for (let i = 0; i < tagsData.length; i += itemsPerTagPage) {
      pages.push(tagsData.slice(i, i + itemsPerTagPage));
    }
    return pages;
  }, [itemsPerTagPage]);

  // 2. Cria as "páginas clonadas" para o loop
  const loopedTagPages = React.useMemo(() => {
    if (tagPages.length <= 1) {
      return tagPages; // Não precisa de loop se houver apenas 1 página
    }
    // [Última Página (Clone), Página 1, Página 2, ..., Última Página, Primeira Página (Clone)]
    return [tagPages[tagPages.length - 1], ...tagPages, tagPages[0]];
  }, [tagPages]);

  // 3. Efeito de auto-play
  React.useEffect(() => {
    if (loopedTagPages.length <= 1) return; // Não roda se não houver loop

    const interval = setInterval(() => {
      if (!isPaused) {
        // Apenas avança o índice
        setCurrentIndex(prevIndex => prevIndex + 1);
      }
    }, 3000); // Muda a cada 3 segundos

    return () => clearInterval(interval);
  }, [isPaused, loopedTagPages.length]);

  // 4. Efeito para reativar a transição (o "pulo mágico")
  React.useEffect(() => {
    // Se o índice foi resetado para 1 (após pular do clone)
    if (currentIndex === 1 && !transitionEnabled) {
      // Precisamos esperar um "tick" do renderizador
      const timer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50); // 50ms é suficiente
      return () => clearTimeout(timer);
    }
  }, [currentIndex, transitionEnabled]);

  // 5. Handler que é chamado QUANDO a transição CSS termina
  const handleTransitionEnd = () => {
    // Se o slide que acabou de parar for o "clone do final"
    if (currentIndex === loopedTagPages.length - 1) {
      setTransitionEnabled(false); // Desliga a animação
      setCurrentIndex(1); // Pula de volta para o primeiro item real
    }
  };
  
  // --- FUNÇÕES DE ESTILO ---
  const getHoverStyle = (isHovered: boolean): CSSProperties => (isHovered ? { opacity: 0.9 } : {});
  const getContactIconHoverStyle = (iconName: string): CSSProperties => (hoveredContactIcon === iconName ? styles.contactIconWrapperHover : {});

  // --- ESTILO DINÂMICO DO TRACK DO CARROSSEL ---
  const carouselTrackStyle: CSSProperties = {
    ...styles.carouselTrack,
    // Move o track baseado no índice atual
    transform: `translateX(-${currentIndex * 100}%)`,
    // Desliga a transição durante o "pulo mágico"
    transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none',
  };

  return (
    <>
      {/* --- SEÇÃO HERO --- */}
      <Section isMobile={isMobile} backgroundColor="#FFFFFF" id="home">
        <div style={styles.heroContainer}>
          <div style={styles.heroContent}>
            <h1 style={styles.title}>Zaqueu</h1>
            <h2 style={styles.subtitle}>Sistema de Gestão para a sua igreja</h2>
            <p style={styles.description}>
              Seja assertivo na tomada de decisões
            </p>
            <button
              style={{ ...styles.heroButton, ...getHoverStyle(isHeroButtonHovered) }}
              onMouseEnter={() => setIsHeroButtonHovered(true)}
              onMouseLeave={() => setIsHeroButtonHovered(false)}
            >
              Solicite sua licença
            </button>
          </div>
          <div style={styles.heroImage}>
            <img src='/pc-img.png' alt="Dashboard" style={styles.imagePlaceholder}/>
          </div>
        </div>
      </Section>

      {/* --- SEÇÃO FEATURES --- */}
      <Section isMobile={isMobile} backgroundColor="#F4F6FF" id="features">
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

      {/* --- SEÇÃO ABOUT --- */}
      <Section isMobile={isMobile} backgroundColor="#FFFFFF">
        <div style={styles.aboutContainer}>
          <div style={styles.aboutHeader}>
            <h2 style={styles.aboutHeaderTitle}>O ZAQUEU foi reformulado para ser uma aplicação totalmente Web:</h2>
            <p style={styles.aboutParagraph}>
              Faça todas as suas dúvidas e saber mais sobre as funcionalidades do sistema Zaqueu, faça o download e leia o arquivo com o manual de instruções:
              <a
                href="/caminho/para/manual-de-instrucoes-zaqueu.pdf"
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
                  <p style={styles.aboutListItemDescription}>Não é necessário instalar nenhum programa. O acesso é feito diretamente pelo navegador em qualquer dispositivo (PC, notebook, tablet ou smartphone).</p>
                </li>
                {/* ...outros list items... */}
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Acesso Simultâneo:</p>
                  <p style={styles.aboutListItemDescription}>Com o sistema Zaqueu, você e sua equipe acessam o sistema de qualquer lugar, a qualquer momento.</p>
                </li>
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Nuvem:</p>
                  <p style={styles.aboutListItemDescription}>Todos os dispositivos (Clientes) se conectam ao Servidor Central na nuvem, que processa todas as informações e gerencia o banco de dados.</p>
                </li>
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Integridade e Segurança:</p>
                  <p style={styles.aboutListItemDescription}>O banco de dados continua hospedado na nuvem, garantindo alta disponibilidade, integridade e segurança. Seus dados estão sempre seguros e acessíveis.</p>
                </li>
                <li style={styles.aboutListItem}>
                  <p style={styles.aboutListItemTitle}>Próximo Passo:</p>
                  <p style={styles.aboutListItemDescription}>Após a aquisição da licença, os dados de acesso são enviados para que o sistema seja disponibilizado.</p>
                </li>
              </ul>
            </div>
            <div style={styles.aboutImageWrapper}>
              <img src="/server.png" alt="Diagrama Servidor-Clientes" style={styles.aboutImage} />
            </div>
          </div>
          <p style={styles.aboutParagraph}>
            Com o ZAQUEU WEB, sua igreja ganha em praticidade, segurança e escalabilidade. Entre em contato para mais detalhes!
          </p>
        </div>
      </Section>
      
      {/* --- SEÇÃO DO CARROSSEL DE TAGS (MODIFICADA) --- */}
      <Section isMobile={isMobile} backgroundColor="#FFFFFF">
        <div 
          style={styles.carouselContainer}
          onMouseEnter={() => setIsPaused(true)} // Pausa ao passar o mouse
          onMouseLeave={() => setIsPaused(false)} // Retoma ao tirar o mouse
        >
          <div style={styles.carouselViewport}>
            <div 
              style={carouselTrackStyle} // Aplica o estilo dinâmico
              onTransitionEnd={handleTransitionEnd} // Detecta o fim da animação
            >
              {/* Renderiza todas as páginas, incluindo os clones */}
              {loopedTagPages.map((page, pageIndex) => (
                <div key={pageIndex} style={styles.carouselSlidePage}>
                  {page.map(tag => (
                    <div key={tag} style={styles.carouselTag}>
                      {tag}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
      {/* --- FIM DA SEÇÃO DO CARROSSEL --- */}

      {/* --- SEÇÃO LICENÇA --- */}
      <Section isMobile={isMobile} backgroundColor="#F4F6FF" id="license">
        <h2 style={styles.contactTitle}>Como obter sua licença?</h2>
        <div style={styles.licenseContainer}>
          <div style={styles.licenseTextContent}>
            <h3 style={styles.licenseTitle}>Obrigado por escolher o ZAQUEU!</h3>
            <p style={styles.licenseParagraph}>
              Atenção aos próximos passos para começar a usar o sistema:
            </p>
            <ol style={styles.licenseList}>
              <li style={styles.licenseListItem}>
                <strong>Pagamento:</strong> Efetue o pagamento através do PIX;
              </li>
              <li style={styles.licenseListItem}>
                <strong>Formulário e Comprovante:</strong> Preencha o formulário de cadastro e anexe o comprovante do PIX;
              </li>
              <li style={styles.licenseListItem}>
                <strong>Liberação de Acesso:</strong> Nossa equipe irá processar o seu pagamento e criar as credenciais de login;
              </li>
              <li style={styles.licenseListItem}>
                <strong>Acesso Imediato:</strong> Você receberá por e-mail ou WhatsApp o Link de Acesso e as credenciais (usuário e senha) para começar a usar o ZAQUEU Web imediatamente.
              </li>
            </ol>
            <p style={{ ...styles.licenseParagraph, fontSize: '0.85rem', color: '#777' }}>
              *A sua versão é totalmente online, eliminando a necessidade de download e instalação na sua máquina. Informações dos dados, entre em contato conosco, para saber o que usar.
            </p>
          </div>
          <div style={styles.licenseCard}>
            <h3 style={styles.licenseCardTitle}>Licença</h3>
            <p style={styles.licensePrice}>R$70<span style={{ fontSize: '1.5rem', fontWeight: 400 }}>/mês</span></p>
            <ul style={styles.licenseFeaturesList}>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> List Item</li>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> List Item</li>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> List Item</li>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> List Item</li>
              <li style={styles.licenseFeatureItem}><BsArrowRight /> List Item</li>
            </ul>
            <button
              style={{ ...styles.licenseCardButton, ...getHoverStyle(isLicenseCardButtonHovered) }}
              onMouseEnter={() => setIsLicenseCardButtonHovered(true)}
              onMouseLeave={() => setIsLicenseCardButtonHovered(false)}
            >
              Solicitar Licença
            </button>
          </div>
        </div>
      </Section>

      {/* --- SEÇÃO CONTATO --- */}
      <Section isMobile={isMobile} backgroundColor="#FFFFFF" id="contact">
        <h2 style={styles.contactTitle}>Contato</h2>
        <p style={styles.contactSubtitle}>
          Caso queira entrar em contato com o nosso suporte e desenvolvedores,
          escolha a melhor forma que te atenda.
        </p>
        <div style={styles.contactIconsContainer}>
          <a href="https://wa.me/seu-numero" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div
              style={{ ...styles.contactIconWrapper, ...getContactIconHoverStyle('whatsapp') }}
              onMouseEnter={() => setHoveredContactIcon('whatsapp')}
              onMouseLeave={() => setHoveredContactIcon(null)}
            >
              <FaWhatsapp style={styles.contactIcon} />
              <span style={styles.contactIconLabel}>Whatsapp</span>
            </div>
          </a>
          <a href="mailto:seu-email@example.com" style={{ textDecoration: 'none' }}>
            <div
              style={{ ...styles.contactIconWrapper, ...getContactIconHoverStyle('email') }}
              onMouseEnter={() => setHoveredContactIcon('email')}
              onMouseLeave={() => setHoveredContactIcon(null)}
            >
              <FaEnvelope style={styles.contactIcon} />
              <span style={styles.contactIconLabel}>E-mail</span>
            </div>
          </a>
          <a href="https://instagram.com/seu-perfil" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <div
              style={{ ...styles.contactIconWrapper, ...getContactIconHoverStyle('instagram') }}
              onMouseEnter={() => setHoveredContactIcon('instagram')}
              onMouseLeave={() => setHoveredContactIcon(null)}
            >
              <FaInstagram style={styles.contactIcon} />
              <span style={styles.contactIconLabel}>Instagram</span>
            </div>
          </a>
          <a href="tel:+5511987654321" style={{ textDecoration: 'none' }}>
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
    </>
  );
};

export default HomePage;