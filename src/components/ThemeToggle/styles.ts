import { CSSProperties } from 'react';

export const themeToggleStyles = {
    button: {
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        padding: '8px 12px',
        borderRadius: '4px',
        transition: 'all 0.3s ease',
        ':hover': {
            opacity: 0.8
        }
    } as CSSProperties
};