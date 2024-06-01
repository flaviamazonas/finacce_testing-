import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import UserProfile from './components/UserProfile';
import SettingsPage from './components/SettingsPage';
import HelpCenterPage from './components/HelpCenterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/profile-page" element={<ProfilePage />} /> 
          <Route path="/user-profile" element={<UserProfile />} /> 
          <Route path="/settings" element={<div>Settings Page (Placeholder)</div>} /> 
          <Route path="/settings-page" element={<SettingsPage />} />
          <Route path="/help" element={<div>Help Page (Placeholder)</div>} />
          <Route path="/accessibility" element={<div>Acessibilidade (Placeholder)</div>} />
          <Route path="/notifications" element={<div>Gerenciar notificações (Placeholder)</div>} />
          <Route path="/about-version" element={<div>Sobre esta versão (Placeholder)</div>} />
          <Route path="/about-finacce" element={<div>Sobre o Finacce (Placeholder)</div>} />
          <Route path="/account" element={<div>Conta (Placeholder)</div>} />
          <Route path="/user-guide" element={<div>Guia do usuário (Placeholder)</div>} />
          <Route path="/help-center-page" element={<HelpCenterPage />} />
          <Route path="/customer-support" element={<div>Atendimento ao cliente (Placeholder)</div>} />
          <Route path="/faq" element={<div>Perguntas frequentes (Placeholder)</div>} />
          <Route path="/policies" element={<div>Políticas e termos (Placeholder)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
