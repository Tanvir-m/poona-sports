import { Col } from 'react-bootstrap';
import style from '../../../css/style.module.scss';

const ProdCom = (props) => {
  return (
    <>
      <Col sm={6} className={`${style.prodCom} my-4`}>
        {props.text}
        <p>{props.para}</p>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `./img/featured/products/${props.img}`}
          alt=""
        />
        <h5>${props.prize.toFixed(2)}</h5>
      </Col>
    </>
  );
};

export default ProdCom;
