import { Row, Col } from 'react-bootstrap';
import SupImg from './SupImg';
import { useState } from 'react';
// import { FaOpencart } from 'react-icons';

const CenCom = (props) => {
  const [img, setImg] = useState('1');

  return (
    <>
      Givenchy
      <p>Dentoex Product Sample</p>
      <img
        className="img-fluid"
        src={
          process.env.PUBLIC_URL +
          `./img/featured/products/best-deal/${img}.jpg`
        }
        alt=""
      />
      <Row className="my-4">
        <SupImg click={() => setImg('1')} img="best-deal/1.jpg" />
        <SupImg click={() => setImg('2')} img="best-deal/2.jpg" />
        <SupImg click={() => setImg('3')} img="best-deal/3.jpg" />
        <SupImg click={() => setImg('4')} img="best-deal/4.jpg" />
      </Row>
      <Row className="my-3">
        <Col md={7}>
          <h4>$450.00</h4>
          <strike>$499.00</strike>
        </Col>
        <Col md={5}>
          <button>Add To Cart</button>
        </Col>
      </Row>
    </>
  );
};

export default CenCom;
