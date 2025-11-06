// src/components/Icons/index.tsx
import React from 'react';
import { CSSProperties } from 'react';

// Interface para as propriedades do componente Icon
interface IconProps {
    name: string;
    style?: CSSProperties;
    size?: number; // Para controlar o tamanho do SVG
    color?: string; // Para controlar a cor do SVG
}

// Estilos básicos para os ícones
const iconBaseStyle: CSSProperties = {
    width: '3rem', // Tamanho padrão
    height: '3rem', // Tamanho padrão
    opacity: 0.8,
    margin: '1rem auto', // Centraliza e dá um espaçamento
    display: 'block', // Garante que o margin auto funcione
};

// Componente Icon que renderiza o SVG com base no nome
export const Icon: React.FC<IconProps> = ({ name, style, size, color }) => {
    const finalStyle: CSSProperties = {
        ...iconBaseStyle,
        ...(size && { width: `${size}rem`, height: `${size}rem` }),
        ...(color && { stroke: color, fill: color === 'none' ? 'none' : color }),
        ...style,
    };

    switch (name) {
        case 'motivation':
            return (
                <svg
                    style={finalStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6336C"
                    strokeWidth="2"
                >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            );
        case 'context':
            return (
                <svg
                    style={finalStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6336C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
            );
        case 'impact':
            return (
                <svg
                    style={finalStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6336C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            );
        case 'vision':
            return (
                <svg
                    style={finalStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6336C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                </svg>
            );
        case 'values':
            return (
                <svg
                    style={finalStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6336C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="12" y1="1" x2="12" y2="23"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            );
        case 'objectives':
            return (
                <svg
                    style={finalStyle}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D6336C"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
            );
        default:
            return null;
    }
};