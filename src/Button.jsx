import { ContentBtn } from "./ButtonStyle"

const Button = ({hrefButton, nameButton, imgBtn }) => {
  return(
    <a href={hrefButton}><ContentBtn>{nameButton} <img src="/telefone.png" alt="icone telefone" /> </ContentBtn></a>
  )
}
export default Button