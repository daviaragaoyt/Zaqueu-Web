// src/contexts/LoadingContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

interface LoadingContextType {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}

export const LoadingContext = createContext<LoadingContextType | null>(null);

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(true); // Começa como true

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    return (
        <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading }}>
            {isLoading && (
                <Box
                    sx={{
                        width: '100%',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 9999, // Um zIndex bem alto para garantir que fique por cima de tudo
                    }}
                >
                    <LinearProgress
                        sx={{
                            height: 5, // Altura da barra de progresso
                            // Cor de fundo do trilho (opcional, se quiser uma cor sólida diferente do gradiente)
                            backgroundColor: '#ccc',
                            '& .MuiLinearProgress-bar': {
                                // Aplica o gradiente de cor à barra de progresso em si
                                background: 'linear-gradient(to right, #8b3a45, #d45e6e)',
                                // Adiciona uma pequena sombra para um efeito visual melhor
                                boxShadow: '0 0 10px rgba(212, 94, 110, 0.7)',
                            },
                        }}
                    />
                </Box>
            )}
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = (): LoadingContextType => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};