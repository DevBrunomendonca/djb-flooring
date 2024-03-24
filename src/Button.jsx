import { ContentBtn } from "./ButtonStyle"

const Button = ({hrefButton, nameButton, onclick }) => {
  return(
    <a target="_blank" onClick={onclick} href={hrefButton}><ContentBtn>{nameButton} <img src="/icon-telephone.png" alt="icone telefone" /> </ContentBtn></a>
  )
}
export default Button