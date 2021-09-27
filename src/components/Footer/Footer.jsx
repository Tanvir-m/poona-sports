import { Container, Row, Col } from 'react-bootstrap';
import { BsCursor } from 'react-icons/bs';
import { GiHeadphones } from 'react-icons/gi';
import { FaFacebookF, FaPinterestSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { RiInstagramFill } from 'react-icons/ri';
import { IoLogoYoutube } from 'react-icons/io';
import style from '../css/style.module.scss';

const Footer = () => {
  return (
    <>
      <Container className="my-5">
        <hr />
        <Row className={`my-5 ${style.yelRow}`}>
          <Col md={5}>
            <h4>
              <BsCursor />
              Sighn up to news later
            </h4>
          </Col>
          <Col md={7}>
            <Row>
              <Col sm={9} style={{ padding: '0px' }}>
                <input
                  type="text"
                  placeholder="Enter your email eddress"
                  className="form-control"
                />
              </Col>
              <Col sm={3} style={{ padding: '0px' }}>
                <button>Subscribe</button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className={`my-5 ${style.links}`}>
          <Col md={4}>
            <h1 className="mb-4">electro</h1>
            <Row>
              <Col sm={2}>
                <GiHeadphones className={style.iconFoot} />
              </Col>
              <Col sm={10}>
                <p>Got questions? Call us 24/7!</p>
                <h5>(800) 8001-8588, (0600) 874 548</h5>
              </Col>
              <Col sm={12} className="mt-5 mb-3">
                <b>Contact info</b>
                <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </Col>
              <Col sm={8}>
                <Row className={style.footsoIcon}>
                  <Col>
                    <FaFacebookF />
                  </Col>
                  <Col>
                    <AiOutlineTwitter />
                  </Col>
                  <Col>
                    <RiInstagramFill />
                  </Col>
                  <Col>
                    <FaPinterestSquare />
                  </Col>
                  <Col>
                    <IoLogoYoutube />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <Row>
              <Col sm={3}>
                <h5>Find In Fast</h5>
                <ul>
                  <li>Accessories</li>
                  <li>Gaming</li>
                  <li>Laptops & Computers</li>
                  <li>Mac Computers</li>
                  <li>PC Computers</li>
                  <li>Ultrabooks</li>
                </ul>
              </Col>
              <Col sm={3}>
                <h5>Information</h5>
                <ul>
                  <li>Accessories</li>
                  <li>Gaming</li>
                  <li>Laptops & Computers</li>
                  <li>Mac Computers</li>
                  <li>PC Computers</li>
                  <li>Ultrabooks</li>
                </ul>
              </Col>
              <Col sm={3}>
                <ul className={style.ulTop}>
                  <li>Accessories</li>
                  <li>Gaming</li>
                  <li>Laptops & Computers</li>
                  <li>Mac Computers</li>
                  <li>PC Computers</li>
                  <li>Ultrabooks</li>
                </ul>
              </Col>
              <Col sm={3}>
                <h5>In the Spotlight</h5>
                <ul>
                  <li>Accessories</li>
                  <li>Gaming</li>
                  <li>Laptops & Computers</li>
                  <li>Mac Computers</li>
                  <li>PC Computers</li>
                  <li>Ultrabooks</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid style={{ backgroundColor: '#EAEAEA' }}>
        <Container className="py-3">
          <Row>
            <Col sm={3}>© 2021 Electro. All Rights Reserved</Col>
            <Col sm={{ span: 3, offset: 6 }}>
              <Row>
                <Col sm={2}>
                  <img
                    src={process.env.PUBLIC_URL + './img/footer/1.png'}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
                <Col sm={2}>
                  <img
                    src={process.env.PUBLIC_URL + './img/footer/2.png'}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
                <Col sm={2}>
                  <img
                    src={process.env.PUBLIC_URL + './img/footer/3.png'}
                    alt=""
                    className="img-fluid"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Footer;
