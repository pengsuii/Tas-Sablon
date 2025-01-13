import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Catalogue = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:3000/items');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} style={{ marginBottom: '20px', marginTop: '50px' }}>
          <h1>Catalogue</h1>
        </Col>
      </Row>
      <Row style={{ marginTop: '20px' }}>
        {items.map(item => (
          <Col key={item.id} md={4} className="mb-4">
            <Card style={{ width: '300px', height: '350px' }}>
              <Card.Img 
                variant="top" 
                src={item.image} 
                alt={item.name} 
                style={{ width: '100%', height: '250px', objectFit: 'fill' }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalogue;
