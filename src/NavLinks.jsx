import Links from "./Links"
import { ContainerLinks } from "./NavLinksStyle"

const NavLinks = ({onClick}) => {
  return (
    <ContainerLinks onClick={onClick}>
      <Links href="#" name="Home"/>
      <Links href="#" name="Services"/>
      <Links href="#" name="More About Us"/>
      <Links href="#" name="Contact Us"/>
    </ContainerLinks>
  )
}

export default NavLinks