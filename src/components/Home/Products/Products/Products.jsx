import { Container, Row, Col } from 'react-bootstrap';
import BestDeal from '../BestDeal/BestDeal';

const Products = () => {
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={{ span: 7, offset: 3 }} className="my-5">
            <Row>
              <Col>Best Deals</Col>
              <Col>TV & Video</Col>
              <Col>Cameras</Col>
              <Col>Audio</Col>
              <Col>Cell Phones</Col>
              <Col>GPS & Navi</Col>
            </Row>
          </Col>
          <hr />
        </Row>
        <Row>
          <BestDeal />
        </Row>
      </Container>
    </>
  );
};

export default Products;
