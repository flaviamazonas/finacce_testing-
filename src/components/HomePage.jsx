import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/second');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="homepage-container">
      <img src={`${process.env.PUBLIC_URL}/assets/finacce-logo.png`} alt="Finacce Logo" className="logo" />
    </div>
  );
};

export default HomePage;
