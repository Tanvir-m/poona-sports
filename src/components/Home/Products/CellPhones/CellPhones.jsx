import { Row, Col } from 'react-bootstrap';
import ProdCom from '../Comp/ProdCom';
import style from '../../../css/style.module.scss';
import CenCom from '../Comp/CenCom';

const CellPhones = () => {
  return (
    <>
      <Col md={4}>
        <Row>
          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="3.jpg"
            prize={150}
          />

          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="4.jpg"
            prize={150}
          />

          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="2.jpg"
            prize={150}
          />

          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="1.jpg"
            prize={150}
          />
        </Row>
      </Col>
      <Col md={4} className={`${style.bestDealMid} my-4`}>
        <CenCom prize={310} withoutDis={320} imgPath="cell-phones" />
      </Col>
      <Col md={4}>
        <Row>
          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="3.jpg"
            prize={150}
          />

          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="4.jpg"
            prize={150}
          />

          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="2.jpg"
            prize={150}
          />

          <ProdCom
            text="Bulgari"
            para="Georgeous White Bag"
            img="1.jpg"
            prize={150}
          />
        </Row>
      </Col>
    </>
  );
};

export default CellPhones;
