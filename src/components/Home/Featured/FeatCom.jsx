import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import propTypes from 'prop-types';

const FeatCom = (props) => {
  return (
    <>
      <Col md={3} className={`${style.product} my-3`}>
        {props.text}
        <div className={style.borLeft}>
          <p>{props.para}</p>

          <img
            className="img-fluid"
            src={
              process.env.PUBLIC_URL + `./img/featured/products/${props.img}`
            }
            alt=""
          />
        </div>
        <h5>${props.prize}</h5>
        <strike>${props.withoutDis}</strike>
      </Col>
    </>
  );
};

FeatCom.propTypes = {
  text: propTypes.string,
  para: propTypes.string,
  img: propTypes.string,
  prize: propTypes.number,
  withoutDis: propTypes.number,
};

export default FeatCom;
