import { ContainerModalImage, IconCloseModal, NextImage, PrevImage } from "./ModalImageStyle"

const ModalImage = ({clickImage, closeModal, handleClickPrev, handleClickNext}) => {
  return(
    <ContainerModalImage>
      <img src={clickImage} alt="" />
      <IconCloseModal onClick={closeModal}>
        <div></div>
        <div></div>
      </IconCloseModal>
      <NextImage onClick={handleClickNext}>
        <div></div>
        <div></div>
      </NextImage>
      <PrevImage onClick={handleClickPrev}>
        <div></div>
        <div></div>
      </PrevImage>
    </ContainerModalImage>
  )
}

export default ModalImage