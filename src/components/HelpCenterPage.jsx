import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HelpCenterPage.css';

const HelpCenterPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="help-center-page-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <div className="header-title">
          <i className="help-icon">❓</i>
          <h2>Central de Ajuda</h2>
        </div>
      </div>
      <div className="menu">
        <h3>Categorias</h3>
        <div className="menu-item" onClick={() => handleNavigation('/customer-support')}>
          <span>Atendimento ao cliente</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/faq')}>
          <span>Perguntas frequentes</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/policies')}>
          <span>Políticas e termos</span>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;
