import { ContentBtn } from "./ButtonStyle"

const Button = ({hrefButton, nameButton, onclick }) => {
  return(
    <a onClick={onclick} href={hrefButton}><ContentBtn>{nameButton} <img src="/icon-telephone.png" alt="icone telefone" /> </ContentBtn></a>
  )
}
export default Button