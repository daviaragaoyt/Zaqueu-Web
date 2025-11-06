import { useState, useEffect } from 'react';

/**
 * Hook customizado para verificar se uma media query corresponde.
 * @param query A string da media query (ex: '(max-width: 768px)')
 * @returns boolean True se a query corresponder, false caso contrário.
 */
export const useMediaQuery = (query: string): boolean => {
  // Inicializa o estado com o valor da checagem inicial
  const [matches, setMatches] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  });

  useEffect(() => {
    // Garante que o código só rode no cliente (navegador)
    if (typeof window === 'undefined') {
      return;
    }
    
    const media = window.matchMedia(query);
    
    // Atualiza o estado se o valor atual for diferente
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    
    // Cria o listener para observar mudanças
    const listener = () => {
      setMatches(media.matches);
    };
    
    // Adiciona o listener
    media.addEventListener('change', listener);
    
    // Remove o listener ao desmontar o componente
    return () => media.removeEventListener('change', listener);

  }, [matches, query]); // Dependências do useEffect

  return matches;
};