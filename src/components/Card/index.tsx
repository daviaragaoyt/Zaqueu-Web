import React, { ReactNode } from 'react';
// Importa a nova função de estilos
import { getCardStyles } from './styles';

interface CardProps {
    children: ReactNode;
    imagePosition?: 'right' | 'top';
    isMobile?: boolean; // <-- Nova prop para receber o estado de "isMobile"
}

export function Card({ children, imagePosition = 'top', isMobile = false }: CardProps) {
    // Gera os estilos corretos (mobile ou desktop) com base na prop
    const cardStyles = getCardStyles(isMobile);

    return (
        // O JSX não muda, pois a lógica está na variável cardStyles
        <div style={{
            ...cardStyles.container,
            // Agora, cardStyles.horizontalLayout será o de mobile ou o de desktop
            ...(imagePosition === 'right' && cardStyles.horizontalLayout)
        }}>
            {children}
        </div>
    );
}