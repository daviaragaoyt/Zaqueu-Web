// src/pages/Tecnology/styles.ts (ou o nome do seu arquivo de estilos)
import { CSSProperties } from 'react';

// Estilos base (para desktop ou telas maiores)
const baseStyles: Record<string, CSSProperties> = {
    main: {
        maxWidth: '80%',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: '#FFF7F9',
    },
    pageTitle: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#8b3a45',
        textAlign: 'center',
        marginBottom: '3rem',
    },
    subtitle: {
        fontSize: '1.8rem', // Aumentei o subtítulo para as categorias
        fontWeight: 600,
        color: '#d45e6e', // Usei a cor mais vibrante do gradiente
        marginBottom: '1rem',
        marginTop: '2rem',
        textAlign: 'center',
    },
    text: {
        fontSize: '1rem',
        lineHeight: 1.4,
        color: '#374151',
        marginBottom: '1rem',
        textAlign: 'center',
    },
    
    // NOVO: Estilos para a seção de Grid
    technologyGridSection: {
        padding: '2rem 0',
        width: '100%',
    },
    technologyGridContainer: {
        display: 'grid',
        // Cria um layout de 4 colunas no desktop
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    },

    // NOVO: Estilos para o Card de Tecnologia individual
    technologyCardWrapper: {
        background: '#ffffff',
        border: '1px solid #f0f0f0',
        borderRadius: '10px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
        transition: 'transform 0.3s',
        minHeight: '200px', // Garante altura mínima para alinhamento
        // Estilos para o hover (você pode adicionar isso se for possível em seu ambiente)
        // ':hover': { transform: 'translateY(-5px)', boxShadow: '0 8px 12px rgba(0, 0, 0, 0.1)' }, 
    },
    iconContainer: {
        marginBottom: '10px',
        color: '#d45e6e', // Cor dos ícones, baseada na paleta do RosaIA
        width: '64px', // Definido aqui para ser usado como size no componente
        height: '64px',
    },
    icon: { // Mantido como referência de tamanho para o cloneElement
        width: 64, 
        height: 64,
    }
};

// Estilos que serão SOBRESCRITOS em telas mobile (<= 768px)
const mobileStyles: Record<string, CSSProperties> = {
    main: {
        maxWidth: '100%',
        padding: '1rem',
    },
    pageTitle: {
        fontSize: '2rem',
        marginBottom: '2rem',
    },
    subtitle: {
        fontSize: '1.5rem',
        marginTop: '1.5rem',
        textAlign: 'center',
    },
    text: {
        fontSize: '0.9rem',
    },
    iconContainer: {
        width: '48px', // Menor no mobile
        height: '48px',
    },
    icon: {
        width: 48,
        height: 48,
    },
    technologyGridContainer: {
        // Altera para 2 colunas no mobile
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
        gap: '15px',
    },
    technologyCardWrapper: {
        minHeight: '180px',
    }
};

// Função que combina os estilos (deixei a sua lógica original, que está correta)
export const getStyles = (isMobile: boolean): Record<string, CSSProperties> => {
    if (!isMobile) {
        return baseStyles;
    }

    return Object.keys(baseStyles).reduce((acc, key) => {
        acc[key] = {
            ...baseStyles[key],
            ...(mobileStyles[key] || {}),
        };
        return acc;
    }, {} as Record<string, CSSProperties>);
};