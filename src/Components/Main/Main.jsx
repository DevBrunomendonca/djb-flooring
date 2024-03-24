import About from "../About/About";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Home from "../Home/Home";
import MoreAbout from "../MoreAbout/MoreAbou";
import Services from "../Services/Services";
import Gallery from '../Gallery/Gallery' 
import { ContainerMain } from "./MainStyle";
import Comments from "../Comments/Comments";
import GoToTop from "../../GoToTop";

const Main = () => {
  return (
    <ContainerMain>
      <Home />
      <About />
      <MoreAbout />
      <Services />
      <Contact />
      <Gallery />
      <Comments />
      <GoToTop />
    </ContainerMain>
  );
};

export default Main;
