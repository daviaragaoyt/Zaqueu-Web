import { CSSProperties } from 'react';

// Estilos para Desktop
const baseStyles: Record<string, CSSProperties> = {
    container: {
        flex: '1',
        minWidth: '300px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        margin: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left',
        gap: '20px',
    },
    // No desktop, o layout é horizontal (lado a lado)
    horizontalLayout: {
        flexDirection: 'row',
        alignItems: 'flex-start', // Alinha os itens no topo do card
    },
    content: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    image: {
        width: '300px',
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '10px',
        objectFit: 'cover',
    }
};

// Apenas os estilos que MUDAM no mobile
const mobileStyles: Record<string, CSSProperties> = {
    // AQUI ESTÁ A MUDANÇA PRINCIPAL
    // No mobile, o layout horizontal deve se comportar como o vertical.
    horizontalLayout: {
        flexDirection: 'column',
        alignItems: 'center', // Alinha ao centro, como o container padrão
    },
    image: {
        width: '100%',
    }
};

// Função que combina os estilos, exatamente como nas suas páginas
export const getCardStyles = (isMobile: boolean): Record<string, CSSProperties> => {
    if (!isMobile) {
        return baseStyles;
    }
    // Combina os estilos, dando prioridade para os de mobile
    return Object.keys(baseStyles).reduce((acc, key) => {
        acc[key] = {
            ...baseStyles[key],
            ...(mobileStyles[key] || {}),
        };
        return acc;
    }, {} as Record<string, CSSProperties>);
};