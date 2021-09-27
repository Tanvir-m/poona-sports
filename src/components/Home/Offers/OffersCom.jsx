import { Col } from 'react-bootstrap';
import propTypes from 'prop-types';
import style from '../../css/style.module.scss';

const OffersCom = (props) => {
  return (
    <>
      <Col md={3}>
        <div className={style.offCom}>
          <img
            className="img-fluid"
            src={process.env.PUBLIC_URL + `./img/offers/${props.img}`}
            alt=""
          />
        </div>
      </Col>
    </>
  );
};

OffersCom.propTypes = {
  img: propTypes.string,
};

export default OffersCom;
