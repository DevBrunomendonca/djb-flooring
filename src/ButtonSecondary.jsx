import { ContentBtn } from "./ButtonStyle"

const ButtonSecondary = ({hrefBtn, textBtn}) => {
  return(
    <a href={hrefBtn}> <ContentBtn>{textBtn}</ContentBtn> </a>
  )
}

export default ButtonSecondary