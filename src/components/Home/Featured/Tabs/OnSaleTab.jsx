import FeatCom from '../FeatCom';
import { Row, Col } from 'react-bootstrap';
import style from '../../../css/style.module.scss';
import OfferCom from '../OfferCom';

const OnSaleTab = () => {
  return (
    <>
      <OfferCom
        per={25}
        img="2.png"
        para="Donkix Product Sample"
        prize={60.0}
        withoutDis={80.0}
      />
      <Col md={8} className={style.tabsItems}>
        <hr />
        <Row>
          <FeatCom
            img="8.jpg"
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={11}
            withoutDis={19}
          />
          <FeatCom
            img="7.jpg"
            text="Donna Karan"
            para="Freecof Product Sample"
            prize={450}
            withoutDis={550}
          />
          <FeatCom
            img="6.jpg"
            text="Armani"
            para="Freshkix Product Sample"
            prize={120}
            withoutDis={150}
          />
          <FeatCom
            img="5.jpg"
            text="Dolce & Gabbana"
            para="Gold Daimond Chain"
            prize={399}
            withoutDis={450}
          />
          <FeatCom
            img="4.jpg"
            text="Donna Karan"
            para="Geargeous White Dresses"
            prize={350}
            withoutDis={400}
          />
          <FeatCom
            img="3.jpg"
            text="Bulgari"
            para="Gorgeous White Bag"
            prize={150}
            withoutDis={250}
          />
          <FeatCom
            img="2.jpg"
            text="Bulgari"
            para="Faxtex Product Sample"
            prize={11}
            withoutDis={19}
          />
          <FeatCom
            img="1.jpg"
            text="Donna Karan"
            para="Freecof Product Sample"
            prize={450}
            withoutDis={550}
          />
        </Row>
      </Col>
    </>
  );
};

export default OnSaleTab;
