import { Container, Row, Col } from 'react-bootstrap';
import style from '../css/style.module.scss';
import { IoMdCall, IoIosShuffle } from 'react-icons/io';
import { HiMail, HiShoppingCart } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';
import { GiTruck } from 'react-icons/gi';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';
import { BiSearchAlt } from 'react-icons/bi';

const Navbar = () => {
  return (
    <>
      <Container fluid>
        <Container>
          <Row>
            <Col md={3}>
              <Row>
                <Col md={6}>
                  <IoMdCall className={style.icon} />
                  <span className={style.text}> (+800) 123 456 7890</span>
                </Col>
                <Col md={6}>
                  <HiMail className={style.icon} />
                  <span className={style.text}> Sample@email.com</span>
                </Col>
              </Row>
            </Col>

            <Col md={{ span: 5, offset: 4 }}>
              <Row>
                <Col md={4}>
                  <MdLocationOn className={style.icon} />
                  <span className={style.text}>Store Location</span>
                </Col>
                <Col md={4}>
                  <GiTruck className={style.icon} />
                  <span className={style.text}>Track Your Order</span>
                </Col>
                <Col md={4}>
                  <AiOutlineUserAdd className={style.icon} />
                  <span className={style.text}>Register oe Sighn in</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <hr />

        <Container>
          <Row className="my-5">
            <Col md={2}>
              <h1 className={style.logo}>electro</h1>
            </Col>
            <Col md={7} className={style.bg}>
              <Row>
                <Col sm={11} style={{ padding: '0px' }}>
                  <input
                    type="text"
                    className={`form-control ${style.searchBar}`}
                    placeholder="Search"
                  />
                </Col>
                <Col sm={1}>
                  <BiSearchAlt className={style.searchIcon} />
                </Col>
              </Row>
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
              <Row>
                <Col md={4}>
                  <div>
                    <IoIosShuffle className={style.cart} />{' '}
                    <div className={style.count}>0</div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <FiHeart className={style.cart} />{' '}
                    <div className={style.count}>0</div>
                  </div>
                </Col>
                <Col md={4}>
                  <div>
                    <HiShoppingCart className={style.cart} />{' '}
                    <div className={style.count}>0</div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Navbar;
