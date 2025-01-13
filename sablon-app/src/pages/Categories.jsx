import '../dist/css/main.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('http://localhost:3000/categories');
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleCatalogueClick = () => {
    navigate('/catalogue');
  };

  const renderCards = () => {
    return categories.map((category) => (
      <Col key={category.id} xs={12} style={{ marginBottom: '20px' }}>
        <Card style={{ width: '100%', borderRadius: '24px', border: 'none', padding: '20px' }}>
          <Card.Img
            variant="top"
            src={category.image}
            alt={category.title}
            style={{ objectFit: 'cover', height: '350px', borderRadius: '24px' }}
          />
          <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>{category.title}</Card.Title>
            <Card.Text style={{ fontSize: '16px', marginBottom: '10px', whiteSpace: 'pre-line' }}>
              Deskripsi: {category.description}
            </Card.Text>
            <Card.Text style={{ fontSize: '16px', marginBottom: '10px' }}>
              {category.material}
            </Card.Text>
            <Card.Text style={{ fontSize: '16px', marginBottom: '10px' }}>
              {category.size}
            </Card.Text>
            <button className="catalogue-button" onClick={handleCatalogueClick} style={{ 
                width: '244px', 
                height: '50px', 
                backgroundColor: '#AF8E45', 
                color: '#FFFFFF', 
                border: 'none', 
                borderRadius: '20px', 
                cursor: 'pointer' 
            }}>
                Catalogue
            </button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <div className="categories w-100 min-vh-100" style={{ marginTop: '80px' }}>
      <Container>
        <h1>Categories</h1>
        <Row>
          <Col>
            <Row style={{ padding: '40px' }}>
              {renderCards()}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
