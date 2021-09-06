import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';

const BestSellCom = (props) => {
  return (
    <>
      <Col md={3} className={`${style.bestSellCom} my-4`}>
        <Row>
          <Col sm={5}>
            <img
              className="img-fluid"
              src={
                process.env.PUBLIC_URL +
                `./img/featured/products/${props.img}.jpg`
              }
              alt=""
            />
          </Col>
          <Col sm={7} style={{ borderRight: '1px solid black' }}>
            {props.text}
            <p>{props.para}</p>
            <h5>${props.prize}</h5>
            <strike>${props.withoutDis}</strike>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default BestSellCom;
