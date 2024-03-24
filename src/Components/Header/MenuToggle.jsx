
import Button from "../../Button"
import NavLinks from "../../NavLinks"
import { ContainerMenuToggle } from "./MenuToggleStyle"

const MenuToggle = ({openMenu, toggleMenuBar}) => {
  
  return(
    <ContainerMenuToggle openMenu={openMenu}>
      <NavLinks onClick={toggleMenuBar}/>
      <Button onclick={toggleMenuBar} hrefButton="#" nameButton="Call us 404 955 0984 " />
    </ContainerMenuToggle>
  )
}

export default MenuToggle