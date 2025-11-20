import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { getStyles } from './styles';

const LoginPage: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const styles = getStyles(isMobile);
    const navigate = useNavigate();

    // Estados
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isHovered, setIsHovered] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Tentativa de login:', { user, password });

        navigate('/');
    };

    return (
        <div style={styles.container}>
            <div style={styles.leftPanel}>
                <img
                    src="public\login-background.png"
                    alt="Fundo Decorativo"
                    style={styles.leftImage}
                />
            </div>
            <div style={styles.rightPanel}>
                <div style={styles.logoWrapper}>
                    <div style={styles.logoIconBox}>
                        <img
                            src="public/logo.png"
                            style={styles.leftImage}
                        />
                    </div>
                    <span style={styles.logoText}>Zaqueu</span>
                </div>

                <div style={styles.formContainer}>
                    <form onSubmit={handleLogin}>

                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor="user">Usuário</label>
                            <input
                                id="user"
                                type="text"
                                placeholder="Digite seu usuário"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                style={styles.input}
                                required
                            />
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label} htmlFor="password">Senha</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Digite sua senha"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={styles.input}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            style={{
                                ...styles.submitButton,
                                opacity: isHovered ? 0.9 : 1
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Login
                        </button>

                        <a
                            onClick={() => alert("Entre em contato com o suporte.")}
                            style={styles.footerLink}
                        >
                            Ainda não tem acesso?
                        </a>

                    </form>
                </div>
            </div>

        </div>
    );
};

export default LoginPage;