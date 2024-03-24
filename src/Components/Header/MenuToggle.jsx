
import Button from "../../Button"
import NavLinks from "../../NavLinks"
import { ContainerMenuToggle } from "./MenuToggleStyle"

const MenuToggle = ({openMenu, toggleMenuBar}) => {
  
  return(
    <ContainerMenuToggle openMenu={openMenu}>
      <NavLinks onClick={toggleMenuBar}/>
      <Button hrefButton="tel:+14049550984" onclick={toggleMenuBar}  nameButton="Call us 404 955 0984 " />
    </ContainerMenuToggle>
  )
}

export default MenuToggle