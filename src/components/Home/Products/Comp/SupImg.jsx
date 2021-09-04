import { Col } from 'react-bootstrap';

const SupImg = (props) => {
  return (
    <>
      <Col
        sm={2}
        className="border"
        onClick={props.click}
        style={{ cursor: 'pointer' }}
      >
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `./img/featured/products/${props.img}`}
          alt=""
        />
      </Col>
    </>
  );
};

export default SupImg;
