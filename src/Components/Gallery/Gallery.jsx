
import Paragraph from '../../Paragraph'
import SubTitle from '../../SubTitle'

import { ContainerGallery, ContentGallery } from "./GalleryStyle"
import ModalImage from './ModalImage'
import useModalImage from './useModalImage'


const Gallery = () => {

  const {dataImage, handleClick, closeModal, handleClickPrev, handleClickNext, clickImage} = useModalImage()

  return(
    <> 
    <ContainerGallery>
      <SubTitle textSubtitle='Explore Our Gallery' />
      <Paragraph textParagraph='Take a peek into our world through  curted collection of photographs'/>
      <ContentGallery>
        {dataImage.map((item, index) => (
          <div key={item.id}>
            <img 
              src={item.urlImage} 
              alt={item.altImage} 
              onClick={() => handleClick(item, index)}/>
          </div>
        ))} 
      </ContentGallery>
    </ContainerGallery>
    {clickImage && 
    <ModalImage 
      clickImage={clickImage} 
      closeModal={closeModal} 
      handleClickNext={handleClickNext} 
      handleClickPrev={handleClickPrev} 
    /> }
    </>
  )
}

export default Gallery