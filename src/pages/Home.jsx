import Navbar from "../components/Navbar";
import Banner from "./homeCom/Banner";
import PrepareFood from "./homeCom/PrepareFood";
import "../styles/Home.css";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <PrepareFood />
      <Footer/>
    </>
  );
};

export default Home;
