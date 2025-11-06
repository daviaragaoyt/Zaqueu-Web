
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './Routes';
import { useMediaQuery } from './hooks/useMediaQuery'; // Vamos precisar do hook aqui

function App() {
  // Vamos checar o 'isMobile' aqui no App
  // para passar para o Navbar e Footer
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Navbar isMobile={isMobile} />
      <main>
        {/* O AppRoutes vai renderizar a página correta */}
        <AppRoutes />
      </main>
      <Footer isMobile={isMobile} />
    </>
  );
}

export default App;