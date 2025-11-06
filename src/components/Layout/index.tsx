// src/components/Layout.tsx
import React from 'react';
import { Navbar } from '../Navbar';

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
