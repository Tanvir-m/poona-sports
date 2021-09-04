import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Offers from '../components/Home/Offers/Offers';
import Featured from '../components/Home/Featured/Featured';
import Products from '../components/Home/Products/Products/Products';

const Home = () => {
  return (
    <Container fluid>
      <Offers />
      <Featured />
      <Products />
    </Container>
  );
};

export default Home;
