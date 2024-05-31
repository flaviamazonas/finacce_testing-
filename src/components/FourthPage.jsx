import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FourthPage.css';

const FourthPage = () => {
  const [selectedObjectives, setSelectedObjectives] = useState([]);

  const objectives = [
    { id: 1, label: 'Poupar mais ou começar a poupar', icon: 'poupar.png' },
    { id: 2, label: 'Organizar minhas despesas', icon: 'organizar.png' },
    { id: 3, label: 'Eliminar Dívidas', icon: 'dividas.png' },
    { id: 4, label: 'Mudar hábitos financeiros', icon: 'habitos.png' },
    { id: 5, label: 'Controlar compras compulsivas', icon: 'ccompulsivas.png' },
    { id: 6, label: 'Atingir um objetivo financeiro', icon: 'objetivo.png' },
    { id: 7, label: 'Melhorar minha pontuação de Crédito', icon: 'credito.png' },
    { id: 8, label: 'Apenas quero testar o aplicativo', icon: 'testar.png' },
  ];

  const toggleObjective = (id) => {
    setSelectedObjectives((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((objId) => objId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className="fourth-page-container">
      <h2>Qual o seu objetivo?</h2>
      <p>Selecione os seus objetivos. Usaremos eles para guiar a sua experiência da melhor forma</p>
      <div className="objectives-grid">
        {objectives.map((objective) => (
          <div
            key={objective.id}
            className={`objective-card ${selectedObjectives.includes(objective.id) ? 'selected' : ''}`}
            onClick={() => toggleObjective(objective.id)}
          >
            <img src={`${process.env.PUBLIC_URL}/${objective.icon}`} alt={objective.label} className="objective-icon" />
            <p>{objective.label}</p>
          </div>
        ))}
      </div>
      <Link to="/signup" className="continue-button">Continue</Link>
    </div>
  );
};

export default FourthPage;
