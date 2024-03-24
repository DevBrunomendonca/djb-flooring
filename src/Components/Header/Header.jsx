import { useEffect, useState } from "react";
import Button from "../../Button";
import Logo from "../../Logo";
import NavLinks from "../../NavLinks";
import { ContainerHeader, Navigation } from "./HeaderStyle";
import IconMenuBar from "./IconMenuBar";
import MenuToggle from "./MenuToggle";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenuBar = () => setOpenMenu(!openMenu);

  useEffect(() => {
    const closeMenuBar = () => {
      window.innerWidth > 769
      && setOpenMenu(false)
    }
    
    window.addEventListener('resize', closeMenuBar)
    
    return() => [
      window.removeEventListener('resize' , closeMenuBar)
    ]
  },[])
  

  return (
    <ContainerHeader id="container-header">
      <Navigation>
        <Logo />
        <NavLinks />
        <Button hrefButton="+14049550984" nameButton="Call us 404 955 0984 " />
      </Navigation>
      <IconMenuBar openMenu={openMenu} onClick={toggleMenuBar} />
      {openMenu && <MenuToggle openMenu={openMenu} setOpenMenu={setOpenMenu} toggleMenuBar={toggleMenuBar}/>}
    </ContainerHeader>
  );
};

export default Header;
