import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();


  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="profile-page-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <div className="profile-info">
          <img src={`${process.env.PUBLIC_URL}/assets/user-avatar.png`} alt="User Avatar" className="avatar" />
          <h2>Mika</h2>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item" onClick={() => handleNavigation('/user-profile')}>
          <i className="icon">👤</i>
          <span>Perfil</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/settings-page')}>
          <i className="icon">⚙️</i>
          <span>Configurações</span>
        </div>
        <div className="menu-item" onClick={() => handleNavigation('/help-center-page')}>
          <i className="icon">❓</i>
          <span>Central de Ajuda</span>
        </div>
        <div className="menu-item logout" onClick={() => navigate ('/login-page')}>
          <span>Desconectar</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
