import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FeaturedTab from './Tabs/FeaturedTab';
import OnSaleTab from './Tabs/OnSaleTab';
import TopRated from './Tabs/TopRated';
import style from '../../css/style.module.scss';

const Featured = () => {
  const [featured, setFeatured] = useState(true);
  const [sale, setSale] = useState(false);
  const [rated, setRated] = useState(false);

  const featuredClickHabdler = () => {
    setFeatured(true);
    setSale(false);
    setRated(false);
  };

  const saleClickHabdler = () => {
    setFeatured(false);
    setSale(true);
    setRated(false);
  };

  const ratedClickHabdler = () => {
    setFeatured(false);
    setSale(false);
    setRated(true);
  };
  return (
    <>
      <Container className="mb-5">
        <Row className="mt-5">
          <Col sm={{ span: 1, offset: 6 }}>
            <h5
              className={featured && style.active}
              onClick={featuredClickHabdler}
              style={{ cursor: 'pointer' }}
            >
              Featured
            </h5>
          </Col>
          <Col sm={1}>
            <h5
              className={sale && style.active}
              onClick={saleClickHabdler}
              style={{ cursor: 'pointer' }}
            >
              On Sale
            </h5>
          </Col>
          <Col sm={2}>
            <h5
              className={rated && style.active}
              onClick={ratedClickHabdler}
              style={{ cursor: 'pointer' }}
            >
              Top Rated
            </h5>
          </Col>

          {featured && (
            <>
              <FeaturedTab />
            </>
          )}

          {sale && (
            <>
              <OnSaleTab />
            </>
          )}

          {rated && (
            <>
              <TopRated />
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Featured;
