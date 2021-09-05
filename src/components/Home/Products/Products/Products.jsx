import { Container, Row, Col } from 'react-bootstrap';
import BestDeal from '../BestDeal/BestDeal';
import TvAndVideo from '../TvAndVideo/TvAndVideo';
import Cameras from '../Cameras/Cameras';
import Audio from '../Audio/Audio';
import CellPhones from '../CellPhones/CellPhones';
import GpsAndNavi from '../GpsAndNavi/GpsAndNavi';
import { useState } from 'react';
import style from '../../../css/style.module.scss';

const Products = () => {
  const [bestDeal, setBestDeal] = useState(true);
  const [tv, setTv] = useState(false);
  const [camera, setCamera] = useState(false);
  const [audio, setAudio] = useState(false);
  const [cellPhones, setCellPhones] = useState(false);
  const [gps, setGps] = useState(false);

  const bestDealClickHandler = () => {
    setBestDeal(true);
    setTv(false);
    setCamera(false);
    setAudio(false);
    setCellPhones(false);
    setGps(false);
  };

  const tvClickHandler = () => {
    setBestDeal(false);
    setTv(true);
    setCamera(false);
    setAudio(false);
    setCellPhones(false);
    setGps(false);
  };

  const cameraClickHandler = () => {
    setBestDeal(false);
    setTv(false);
    setCamera(true);
    setAudio(false);
    setCellPhones(false);
    setGps(false);
  };

  const audioClickHandler = () => {
    setBestDeal(false);
    setTv(false);
    setCamera(false);
    setAudio(true);
    setCellPhones(false);
    setGps(false);
  };

  const cellClickHandler = () => {
    setBestDeal(false);
    setTv(false);
    setCamera(false);
    setAudio(false);
    setCellPhones(true);
    setGps(false);
  };

  const gpsClickHandler = () => {
    setBestDeal(false);
    setTv(false);
    setCamera(false);
    setAudio(false);
    setCellPhones(false);
    setGps(true);
  };
  return (
    <>
      <Container className="my-5">
        <Row>
          <Col md={{ span: 7, offset: 3 }} className="my-5 text-center">
            <Row>
              <Col sm={2}>
                <h5
                  className={bestDeal && style.active}
                  onClick={bestDealClickHandler}
                  style={{ cursor: 'pointer' }}
                >
                  Best Deals
                </h5>
              </Col>
              <Col sm={2}>
                <h5
                  className={tv && style.active}
                  onClick={tvClickHandler}
                  style={{ cursor: 'pointer' }}
                >
                  TV & Video
                </h5>
              </Col>
              <Col sm={2}>
                <h5
                  className={camera && style.active}
                  onClick={cameraClickHandler}
                  style={{ cursor: 'pointer' }}
                >
                  Cameras
                </h5>
              </Col>
              <Col sm={1}>
                <h5
                  className={audio && style.active}
                  onClick={audioClickHandler}
                  style={{ cursor: 'pointer' }}
                >
                  Audio
                </h5>
              </Col>
              <Col sm={3}>
                <h5
                  className={cellPhones && style.active}
                  onClick={cellClickHandler}
                  style={{ cursor: 'pointer' }}
                >
                  Cell Phones
                </h5>
              </Col>
              <Col sm={2}>
                <h5
                  className={gps && style.active}
                  onClick={gpsClickHandler}
                  style={{ cursor: 'pointer' }}
                >
                  GPS & Navi
                </h5>
              </Col>
            </Row>
          </Col>
          <hr />
        </Row>
        <Row>
          {bestDeal && <BestDeal />}
          {tv && <TvAndVideo />}
          {camera && <Cameras />}
          {audio && <Audio />}
          {cellPhones && <CellPhones />}
          {gps && <GpsAndNavi />}
        </Row>
      </Container>
    </>
  );
};

export default Products;
