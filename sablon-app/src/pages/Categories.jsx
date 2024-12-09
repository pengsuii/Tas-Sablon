import '../dist/css/main.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import totebagSmall from '../assets/img/totebag-small.jpg';
import totebagMedium from '../assets/img/totebag-medium.jpg';
import totebagBig from '../assets/img/totebag-big.jpg';
import pouchSmall from '../assets/img/pouch-small.jpg';
import pouchMedium from '../assets/img/pouch-medium.jpg';
import pouchBig from '../assets/img/pouch-big.jpg';
import godieSmall from '../assets/img/godie-small.jpg';
import godieMedium from '../assets/img/godie-medium.jpg';
import godieBig from '../assets/img/godie-big.jpg';
import { useState } from 'react';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('totebag');

  const handleCategoryClick = (category) => {
    console.log(`Selected category: ${category}`);
    setSelectedCategory(category);
  };

  const renderCards = () => {
    const images = {
      totebag: [totebagSmall, totebagMedium, totebagBig],
      pouch: [pouchSmall, pouchMedium, pouchBig],
      godiebag: [godieSmall, godieMedium, godieBig],
    };

    return Array(9).fill().map((_, index) => {
      const size = index % 3 === 0 ? 'Small' : index % 3 === 1 ? 'Medium' : 'Big';
      const imageSrc = images[selectedCategory][size === 'Small' ? 0 : size === 'Medium' ? 1 : 2];

      return (
        <Col
          xs={4}
          key={index}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}
        >
          <Card style={{ width: '100%', height: 'auto', borderRadius: '24px', border: 'none' }}>
            <Card.Img
              variant="top"
              src={imageSrc}
              alt={`${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} ${size}`}
              style={{ objectFit: 'cover', height: '270px', borderRadius: '24px' }}
            />
            <Card.Body style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '60px' }}>
              <Card.Text style={{ fontSize: '24px', fontWeight: 'inherit' }}>
                {size}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  };

  return (
    <div className="categories w-100 min-vh-100" style={{ marginTop: '80px' }}>
      <Container>
        <h1>Categories</h1>
        <Row>
          <Col>
            <Row style={{ padding: '40px' }}>
              {['totebag', 'pouch', 'godiebag'].map((category) => (
                <Col key={category}>
                  <button
                    className={`text-categories ${selectedCategory === category ? 'categories-active' : ''}`}
                    style={{ background: 'none', border: 'none' }}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <span style={{ fontSize: '22px' }}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  </button>
                </Col>
              ))}
            </Row>
            <Row style={{ marginTop: '20px' }}>
              {(selectedCategory === 'totebag' || selectedCategory === 'pouch' || selectedCategory === 'godiebag') && renderCards()}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Categories;
