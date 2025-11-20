
import Navbar from './components/Navbar';

import AppRoutes from './app-routes';
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
    
    </>
  );
}

export default App;