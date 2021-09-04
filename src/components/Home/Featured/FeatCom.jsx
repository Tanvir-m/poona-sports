import { Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const FeatCom = () => {
  return (
    <>
      <Col md={3} className={`${style.product} border-right`}>
        Bulgari
        <p>Black Fashion Zapda</p>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `./img/featured/products/${props.img}`}
          alt=""
        />
        <h5>$11.00</h5>
        <strike>$19.00</strike>
      </Col>
    </>
  );
};

export default FeatCom;
