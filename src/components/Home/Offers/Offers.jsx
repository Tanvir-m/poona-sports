import OffersCom from './OffersCom';
import { Container, Row } from 'react-bootstrap';

const Offers = () => {
  return (
    <>
      <Container>
        <Row className="mt-5">
          <OffersCom img="1.jpg" />
          <OffersCom img="2.jpg" />
          <OffersCom img="3.jpg" />
          <OffersCom img="4.png" />
        </Row>
      </Container>
    </>
  );
};

export default Offers;
