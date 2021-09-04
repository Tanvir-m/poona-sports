import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Offers from '../components/Home/Offers/Offers';
import Featured from '../components/Home/Featured/Featured';

const Home = () => {
  return (
    <Container fluid>
      <Offers />
      <Featured />
    </Container>
  );
};

export default Home;
