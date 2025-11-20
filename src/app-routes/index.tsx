import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages'
import LoginPage from '../pages/login';
import AdminPage from '../pages/admin';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/admin' element={<AdminPage/>}/>
    </Routes>
  );
};

export default AppRoutes;