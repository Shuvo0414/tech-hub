import About from "../../components/About/About";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Header/Banner/Banner";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
