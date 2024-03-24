import { useState } from "react"

export default function useModalImage() {
  const [clickImage, setClickImage] = useState(null)
  const [indexImage, setIndexImage] = useState(null)

  const dataImage = [
    {class: 'img-gallery1', id: '1', urlImage: '/image-gallery1.png', altImage: 'image of gallery 1'},
    {class: 'img-gallery2', id: '2', urlImage: '/image-gallery2.png', altImage: 'image of gallery 2'},
    {class: 'img-gallery3', id: '3', urlImage: '/image-gallery3.png', altImage: 'image of gallery 3'},
    {class: 'img-gallery4', id: '4', urlImage: '/image-gallery4.png', altImage: 'image of gallery 4'},
    {class: 'img-gallery5', id: '5', urlImage: '/image-gallery5.png', altImage: 'image of gallery 5'},
    {class: 'img-gallery6', id: '6', urlImage: '/image-gallery6.png', altImage: 'image of gallery 6'}
  ]
  
  const handleClick = (item, index) => {
    setClickImage(item.urlImage)
    setIndexImage(index)
  }

  const closeModal = () => {
    setClickImage(null)
    setIndexImage(null)
  }

  const handleClickPrev = () => {
    const totalLenght = dataImage.length
    if (indexImage === 0) {
      setIndexImage(totalLenght - 1)
      const newImg = dataImage[totalLenght - 1].urlImage
      setClickImage(newImg)
      return
    }
    const newIndex = indexImage - 1
    const newImg = dataImage.filter((item) => {
      return dataImage.indexOf(item) === newIndex
    })
    const newItem = newImg[0].urlImage
    setClickImage(newItem)
    setIndexImage(newIndex)
  }

  const handleClickNext = () => {
    const totalLenght = dataImage.length
    if (indexImage + 1 >= totalLenght) {
      setIndexImage(0)
      const newImg = dataImage[0].urlImage
      setClickImage(newImg)
      return
    }
    const newIndex = indexImage + 1
    const newImg = dataImage.filter((item) => {
      return dataImage.indexOf(item) === newIndex
    })
    const newItem = newImg[0].urlImage
    setClickImage(newItem)
    setIndexImage(newIndex)
  }

  return {dataImage ,handleClick, closeModal, handleClickPrev, handleClickNext, clickImage}
} 