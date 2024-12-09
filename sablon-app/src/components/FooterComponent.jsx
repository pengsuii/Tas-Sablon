import { Container, Row, Col } from 'react-bootstrap';
import '../dist/css/main.css';

const FooterComponent = () => {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col xs={12} md={4} className="text-center">
          <img src="/nm.jpg" alt="Logo" className="footer-logo" />
          <p>Your Promotional Packaging Solution</p>
        </Col>
        <Col xs={12} md={8} className="d-flex justify-content-end pe-5">
          <Row>
            <Col xs={6}>
              <h4>Layanan</h4>
              <ul className="footer-list">
                <li>Sablon Pouch</li>
                <li>Sablon Totebag</li>
                <li>Sablon Goodiebag</li>
              </ul>
            </Col>
            <Col xs={6}>
              <h4>For More Info</h4>
              <p>Telepon: +6285931415742</p>
              <p>Email: Sablon@gmail.com</p>
              <p>Alamat: Jalan Arthyasa No. 50, Kec. Limo, Depok 16515</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default FooterComponent