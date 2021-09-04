import { Row, Col } from 'react-bootstrap';
import style from '../../css/style.module.scss';
import propTypes from 'prop-types';

const OfferCom = (props) => {
  return (
    <>
      <Col md={4} className={`${style.featured}`}>
        <Row className="mt-3">
          <Col sm={6} className={style.z}>
            <h3 className={`${style.spcl} text-muted`}>
              Special <br /> Offer
            </h3>
          </Col>
          <Col sm={{ span: 4, offset: 2 }} className={style.z}>
            <div className={style.save}>
              Save <h4>{props.per}%</h4>
            </div>
          </Col>
        </Row>
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + `./img/featured/${props.img}`}
          alt=""
        />
        <p>{props.para}</p>
        <h2>${props.prize.toFixed(2)}</h2>
        <strike>${props.withoutDis.toFixed(2)}</strike>

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
    </>
  );
};

OfferCom.propTypes = {
  per: propTypes.number,
  img: propTypes.string,
  para: propTypes.string,
  prize: propTypes.number,
  withoutDis: propTypes.number,
};

export default OfferCom;
