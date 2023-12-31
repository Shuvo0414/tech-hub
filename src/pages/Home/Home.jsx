import About from "../../components/About/About";
import Brand from "../../components/Brand/Brand";

import Banner from "../../components/Header/Banner/Banner";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Brand></Brand>
      <About></About>
    </div>
  );
};

export default Home;
