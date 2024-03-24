import Links from "./Links"
import { ContainerLinks } from "./NavLinksStyle"

const NavLinks = ({onClick}) => {
  return (
    <ContainerLinks onClick={onClick}>
      <Links href="#container-home" name="Home"/>
      <Links href="#container-our-service" name="Services"/>
      <Links href="#container-more-about" name="More About Us"/>
      <Links href="#container-contact" name="Contact Us"/>
    </ContainerLinks>
  )
}

export default NavLinks