import React, { useState, useEffect } from 'react';
import { themeToggleStyles } from './styles';

export const ThemeToggle: React.FC = () => {
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        document.body.className = isDark ? 'dark-theme' : 'light-theme';
    }, [isDark]);

    const toggleTheme = (): void => {
        setIsDark(prev => !prev);
    };

    return (
        <button
            onClick={toggleTheme}
            style={themeToggleStyles.button}
        >
            {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
    );
};