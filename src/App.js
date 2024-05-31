import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import FourthPage from './components/FourthPage';
import SignupPage from './components/SignupPage';
import SignupStepTwo from './components/SignupStepTwo';
import SignupStepThree from './components/SignupStepThree';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
          <Route path="/fourth" element={<FourthPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signup-step-two" element={<SignupStepTwo />} />
          <Route path="/signup-step-three" element={<SignupStepThree />} />
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
