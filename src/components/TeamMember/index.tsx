import React, { useState } from 'react';
import { getTeamMemberStyles } from './styles';

interface TeamMemberProps {
    name: string;
    role: string;
    desc: string;
    img: string;
}

export function TeamMember({ name, role, desc, img }: TeamMemberProps) {
    const [isHovered, setIsHovered] = useState(false);
    const styles = getTeamMemberStyles();

    return (
        <div
            style={{
                ...styles.card,
                transform: isHovered ? 'translateY(-5px)' : 'none'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div style={styles.contentWrapper}>
                <img
                    src={img}
                    alt={name}
                    style={styles.image}
                />
                <h4 style={styles.name}>{name}</h4>
                <span style={styles.role}>{role}</span>
                <p style={styles.description}>{desc}</p>
            </div>
        </div>
    );
}