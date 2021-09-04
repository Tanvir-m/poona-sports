import { Container, Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import FeatCom from './FeatCom';

const Featured = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col md={4} className={`${style.featured}`}>
            <Row className="mt-3">
              <Col sm={6} className={style.z}>
                <h3 className={`${style.spcl} text-muted`}>
                  Special <br /> Offer
                </h3>
              </Col>
              <Col sm={{ span: 4, offset: 2 }} className={style.z}>
                <div className={style.save}>
                  Save <h4>30%</h4>
                </div>
              </Col>
            </Row>
            <img
              className="img-fluid"
              src={process.env.PUBLIC_URL + `./img/featured/1.jpg`}
              alt=""
            />
            <p>Black Fashion Zapda</p>
            <h2>$350.00</h2>
            <strike>$500.00</strike>

            <Row className="my-3">
              <Col sm={6} className="text-left">
                Already Sold : 6
              </Col>
              <Col sm={6} className="text-right">
                Available: 39
              </Col>
              <Col sm={12}>
                <div className={style.outer}>
                  <div className={style.inner}></div>
                </div>
              </Col>
            </Row>

            <Row className="my-3">
              <Col md={{ span: 6, offset: 3 }}>
                <span>Hurry Up! Offer ends in</span>
                <Row className="mt-3">
                  <Col sm={3} className={style.timeDig}>
                    09
                  </Col>

                  <Col sm={{ span: 3, offset: 1 }} className={style.timeDig}>
                    15
                  </Col>

                  <Col sm={{ span: 3, offset: 1 }} className={style.timeDig}>
                    26
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={8} className={style.tabsItems}>
            <Row className={style.tabs}>
              <Col sm={{ span: 2, offset: 3 }}>
                <h5>Featured</h5>
              </Col>
              <Col sm={2}>
                <h5>On Sale</h5>
              </Col>
              <Col sm={2}>
                <h5>Top Rated</h5>
              </Col>
            </Row>
            <hr />
            <Row>
              <FeatCom img="1.jpg" />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Featured;
