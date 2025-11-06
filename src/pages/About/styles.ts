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
        fontSize: '1.4rem',
        fontWeight: 500,
        color: '#8b3a45',
        marginBottom: '0.5rem',
        marginTop: '1.5rem',
    },
    strong: {
        color: '#8b3a45',
    },
    text: {
        fontSize: '1.2rem',
        lineHeight: 1.4,
        color: '#374151',
        marginBottom: '1rem',
    },
    icon: {
        width: '6rem',
        height: '6rem',
        opacity: 0.5,
    },
    teamSection: {
        padding: '2rem 0',
    },
    carouselContainer: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    },
    sliderItem: {
        padding: '0 10px',
    },
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
        fontSize: '1.2rem',
        marginTop: '1rem',
    },
    text: {

        fontSize: '1rem',
    },
    icon: {
        width: '4rem',
        height: '4rem',
    },
    teamSection: {
        padding: '1.5rem 0',
    },
    carouselContainer: {
        padding: '0 0.5rem',
    },
    sliderItem: {
        padding: '0 5px',
    },
};

// Função que combina os estilos, exatamente como na sua Home
export const getStyles = (isMobile: boolean): Record<string, CSSProperties> => {
    if (!isMobile) {
        return baseStyles;
    }

    // Combina os estilos base com os de mobile, dando prioridade para os de mobile
    return Object.keys(baseStyles).reduce((acc, key) => {
        acc[key] = {
            ...baseStyles[key],
            ...(mobileStyles[key] || {}),
        };
        return acc;
    }, {} as Record<string, CSSProperties>);
};