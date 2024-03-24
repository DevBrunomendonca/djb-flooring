
import  {useLayoutEffect, useRef } from 'react'
import Paragraph from '../../Paragraph'
import SubTitle from '../../SubTitle'

import { ContainerGallery, ContentGallery } from "./GalleryStyle"
import ModalImage from './ModalImage'
import useModalImage from './useModalImage'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Gallery = () => {

  const {dataImage, handleClick, closeModal, handleClickPrev, handleClickNext, clickImage} = useModalImage()
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#container-gallery`,
          start: "380px bottom"
        }
      })
      .fromTo('.img-gallery', {
          opacity: 0,
          scale: 0.4,
          y: 160,
        }, {
          opacity: 1,
          scale: 1,
          duration: 1.7,
          y: 0
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-gallery")
    }
  },[])

  return(
    <> 
    <ContainerGallery rel={el} id='container-gallery'>
      <SubTitle textSubtitle='Explore Our Gallery' />
      <Paragraph textParagraph='Take a peek into our world through  curted collection of photographs'/>
      <ContentGallery>
        {dataImage.map((item, index) => (
          <div key={item.id}>
            <img  
              className={item.class}
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