import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

const SettingsPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="settings-page-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <div className="header-title">
          <i className="settings-icon">⚙️</i>
          <h2>Configurações</h2>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={() => handleNavigation('/accessibility')}>
          <span>Acessibilidade</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/notifications')}>
          <span>Gerenciar notificações</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/about-version')}>
          <span>Sobre esta versão</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/about-finacce')}>
          <span>Sobre o Finacce</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/account')}>
          <span>Conta</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/user-guide')}>
          <span>Guia do usuário</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
