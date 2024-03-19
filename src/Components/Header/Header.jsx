import Button from "../../Button";
import Logo from "../../Logo";
import NavLinks from "../../NavLinks";
import { ContainerHeader, Navigation } from "./HeaderStyle";

const Header = () => {
  return (
    <ContainerHeader>
      <Navigation>
        <Logo />
        <NavLinks />
        <Button hrefButton="#" nameButton="Call us 404 955 0984 "/>
      </Navigation>
    </ContainerHeader>
  );
};

export default Header;
