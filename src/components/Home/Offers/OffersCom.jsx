import { Col } from 'react-bootstrap';
import propTypes from 'prop-types';

const OffersCom = (props) => {
  return (
    <>
      <Col md={3}>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `./img/offers/${props.img}`}
          alt=""
        />
      </Col>
    </>
  );
};

OffersCom.propTypes = {
  img: propTypes.string,
};

export default OffersCom;
