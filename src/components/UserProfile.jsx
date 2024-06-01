import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Mika',
    phone: '(81) 90800-2356',
    email: 'Mika.akim@gmail.com',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Alterações salvas com sucesso!');
  };

  return (
    <div className="user-profile-container">
      <div className="header">
        <button className="back-button" onClick={() => navigate(-1)}>←</button>
        <h2>Perfil</h2>
      </div>
      <div className="content">
        <h3>Informações da Conta</h3>
        <div className="avatar-container">
          <img src={`${process.env.PUBLIC_URL}/assets/user-avatar.png`} alt="User Avatar" className="avatar" />
        </div>
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Nome</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <span className="edit-icon">✎</span>
          </div>
          <div className="form-group">
            <label>Número de Telefone</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
            <span className="edit-icon">✎</span>
          </div>
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <span className="edit-icon">✎</span>
          </div>
          <button type="submit" className="save-button">Salvar alterações</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
