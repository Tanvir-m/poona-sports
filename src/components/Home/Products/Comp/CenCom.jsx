import { Row, Col } from 'react-bootstrap';
import SupImg from './SupImg';
import { useState } from 'react';
import { FaOpencart } from 'react-icons/fa';

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
          `./img/featured/products/${props.imgPath}/${img}.jpg`
        }
        alt=""
      />
      <Row className="my-4">
        <SupImg click={() => setImg('1')} img={`${props.imgPath}/1.jpg`} />
        <SupImg click={() => setImg('2')} img={`${props.imgPath}/2.jpg`} />
        <SupImg click={() => setImg('3')} img={`${props.imgPath}/3.jpg`} />
        <SupImg click={() => setImg('4')} img={`${props.imgPath}/4.jpg`} />
      </Row>
      <Row className="my-3">
        <Col md={7}>
          <h4>${props.prize}</h4>
          <strike>${props.withoutDis}</strike>
        </Col>
        <Col md={5}>
          <button>
            {/* <FaOpencart /> */}
            Add To Cart
          </button>
        </Col>
      </Row>
    </>
  );
};

export default CenCom;
