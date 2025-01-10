import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      window.alert('Anda harus login terlebih dahulu!');
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h1>Dashboard Admin</h1>
      <p>Selamat datang di dashboard admin!</p>
    </div>
  );
};

export default Dashboard;