import { Container, Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import BestSellCom from './BestSellCom';

const BestSellers = () => {
  return (
    <>
      <Container>
        <Row className={style.bestSellers}>
          <Col md={12}>
            <h2>Best Seller</h2>
            <ul>
              <li className={style.activeLi}>Top 20</li>
              <li>Phones & Tablets</li>
              <li>Laptops & Computers</li>
              <li>Video Cameras</li>
            </ul>
          </Col>
          <hr />
        </Row>
        <Row>
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="1"
          />
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="2"
          />
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="3"
          />
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="4"
          />
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="5"
          />
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="6"
          />
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="7"
          />
          <BestSellCom
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={100}
            withoutDis={120}
            img="8"
          />
        </Row>
      </Container>
    </>
  );
};

export default BestSellers;
