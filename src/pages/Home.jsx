import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Slider from '../components/Home/Slider/Slider';
import Offers from '../components/Home/Offers/Offers';
import Featured from '../components/Home/Featured/Featured';
import Products from '../components/Home/Products/Products/Products';
import BestSellers from '../components/Home/BestSellers/BestSellers';

const Home = () => {
  return (
    <Container fluid>
      {/* <Slider /> */}
      <Offers />
      <Featured />
      <Products />
      <BestSellers />
    </Container>
  );
};

export default Home;
