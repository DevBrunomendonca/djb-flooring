import { ContentBtn } from "./ButtonStyle"

const Button = ({hrefButton, nameButton, imgBtn }) => {
  return(
    <a href={hrefButton}><ContentBtn>{nameButton} <img src="/icon-telephone.png" alt="icone telefone" /> </ContentBtn></a>
  )
}
export default Button