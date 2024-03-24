import { useEffect, useState } from "react"
import { ContentGoToTop } from "./GoToTopStyle"

const GoToTop = () => {

  const [showGoToTop, setShowGoToTop] = useState(false)
  useEffect(() =>{
    function showBt() {
      window.scrollY > 500 
      ? setShowGoToTop(true)
      : setShowGoToTop(false)
    }
    window.addEventListener('scroll', showBt)
    return() => {
      window.removeEventListener('scroll', showBt)
    }
    
  },[])
  function onTop() {
    window.scrollTo(0, 0)
  }
  useEffect(() =>{
    onTop()
  },[])

  return(
    <ContentGoToTop onClick={onTop} showGoToTop={showGoToTop} src="/arrow.png" alt="arrow" />
  )
}

export default GoToTop