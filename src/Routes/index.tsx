import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Quando você tiver outras páginas:
        <Route path="/contato" element={<PaginaContato />} />
        <Route path="/login" element={<PaginaLogin />} />
      */}
    </Routes>
  );
};

export default AppRoutes;