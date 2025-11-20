import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages'
import LoginPage from '../pages/login';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;