import { Footer } from 'react-bulma-components';
import Navbar from '../components/navbar';
import MainContainer from './MainContainer';

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Home;
