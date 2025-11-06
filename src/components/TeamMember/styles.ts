import { CSSProperties } from 'react';

const teamMemberStyles: Record<string, CSSProperties | any> = {
    card: {
        padding: '30px 20px',
        background: 'linear-gradient(to bottom, #FFF7F9 0%, #FFDDE2 100%)',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        margin: '0 15px',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '400px',
        width: '300px',
        position: 'relative',
        '@media (max-width: 768px)': {
            width: '90%',
            height: 'auto',
            minHeight: '350px',
            margin: '0 auto',
            padding: '20px 15px',
        },
    },
    image: {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '20px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
        '@media (max-width: 768px)': {
            width: '120px',
            height: '120px',
        },
    },
    name: {
        fontSize: '1.4rem',
        color: ' #8b3a45 ',
        fontWeight: 'bold',
        marginBottom: '5px',
        textAlign: 'center',
        width: '100%',
        '@media (max-width: 768px)': {
            fontSize: '1.2rem',
        },
    },
    role: {
        fontSize: '1rem',
        color: '#8b3a45',
        opacity: 0.9,
        fontWeight: '500',
        marginBottom: '15px',
        textAlign: 'center',
        width: '100%',
        '@media (max-width: 768px)': {
            fontSize: '0.9rem',
        },
    },
    description: {
        fontSize: '0.95rem',
        color: '#8b3a45',
        opacity: 0.8,
        lineHeight: '1.6',
        textAlign: 'center',
        width: '100%',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 4,
        WebkitBoxOrient: 'vertical',
        textOverflow: 'ellipsis',
        '@media (max-width: 768px)': {
            fontSize: '0.85rem',
            WebkitLineClamp: 3,
        },
    },
    contentWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 15px',
        height: '100%',
        '@media (max-width: 768px)': {
            padding: '0 10px',
        },
    }
};
export const getTeamMemberStyles = () => teamMemberStyles;