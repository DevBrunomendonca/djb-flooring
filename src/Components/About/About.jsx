import { useLayoutEffect, useRef } from "react";
import ButtonSecondary from "../../ButtonSecondary";
import Paragraph from "../../Paragraph";
import SubTitle from "../../SubTitle";
import { ContainerAbout, ContentAbout, ContentBannerAbout, ContentTextAbout } from "./AboutStyle";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About = () => {
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: '#container-about',
          start: "300px bottom"
        }
      })
      .fromTo('#container-text', {
          opacity: 0,
          y: 160,
        }, {
          opacity: 1,
          duration: 1.4,
          y: 0
        })
      .fromTo('#container-banner', {
          opacity: 0,
          y: 80,
        }, {
          opacity: 1,
          duration: 1.4,
          y: 0
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-about")
    }
  },[])
  return (
    <ContainerAbout>
      <ContentAbout ref={el}  id="container-about">
        <ContentTextAbout id="container-text">
          <SubTitle textSubtitle="Affordable Luxury for Every Home" />
          <Paragraph
            textParagraph="Flooring is an essential element in any interior design. The right flooring
            choice securely anchors the space with personality and purpose. Whether installed in the home or a place of business, floor coverings should be both functional and beautiful."
          />
          <ButtonSecondary hrefBtn='#container-our-service' textBtn="Our Services"/>
        </ContentTextAbout>
        <ContentBannerAbout id="container-banner">
          <img src="/image-about.png" alt="" />
        </ContentBannerAbout>
      </ContentAbout>
    </ContainerAbout>
  );
};

export default About;
