import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, ListGroup, Alert } from 'react-bootstrap';


const Dashboard = ({ isLoggedIn }) => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      window.alert('Anda harus login terlebih dahulu!');
      navigate('/login');
    } else {
      // Mengambil data kategori
      fetch('http://localhost:3000/categories')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.error('Error fetching categories:', error));

      // Mengambil data items
      fetch('http://localhost:3000/items')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error('Error fetching items:', error));
    }
  }, [isLoggedIn, navigate]);

  return (
    <Container className="mt-4">
      <Alert variant="info">Selamat datang di dashboard admin!</Alert>
      <h1 className="text-center mb-4">Dashboard Admin</h1>
      <h2 className="text-primary">Jumlah Kategori: {categories.length}</h2>
      <ListGroup className="mb-4">
        {categories.map(category => (
          <ListGroup.Item key={category.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{category.title}</strong>
              <div className="text-muted">ID: {category.id}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <h2 className="text-success">Jumlah Items: {items.length}</h2>
      <ListGroup>
        {items.map(item => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <div>
              <strong>{item.name}</strong>
              <div className="text-muted">ID: {item.id}</div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Dashboard;