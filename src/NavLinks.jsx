import Links from "./Links"
import { ContainerLinks } from "./NavLinksStyle"

const NavLinks = () => {
  return (
    <ContainerLinks>
      <Links href="#" name="Home"/>
      <Links href="#" name="Service"/>
      <Links href="#" name="More About Us"/>
      <Links href="#" name="Contact Us"/>
    </ContainerLinks>
  )
}

export default NavLinks