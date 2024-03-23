import { useLayoutEffect, useRef } from "react";
import Paragraph from "../../Paragraph";
import ThirdTitle from "../../ThirdTitle";
import {
  ContainerCardService,
  ContainerTextCard,
  ListCard,
} from "./CardServicesStyle";
import { ContainerCardsServices } from "./ServiceStyle";

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const CardServices = () => {
  const tl = useRef(null)
  const el = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: `#container-service`,
          start: "top bottom"
        }
      })
      .fromTo('#image-service1', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1,
          x: 0
        })
      .fromTo('#card-service1', {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          duration: .7,
          y: 0
        })

        .fromTo('#image-service2', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1,
          x: 0
        })
      .fromTo('#card-service2', {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          duration: .7,
          y: 0
        })

        .fromTo('#image-service3', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1,
          x: 0
        })
      .fromTo('#card-service3', {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          duration: .7,
          y: 0
        })

        .fromTo('#image-service4', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1,
          x: 0
        })
      .fromTo('#card-service4', {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          duration: .7,
          y: 0
        })

        .fromTo('#image-service5', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1,
          x: 0
        })
      .fromTo('#card-service5', {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          duration: .7,
          y: 0
        })

        .fromTo('#image-service6', {
          opacity: 0,
          x: -100,
        }, {
          opacity: 1,
          duration: 1,
          x: 0
        })
      .fromTo('#card-service6', {
          opacity: 0,
          y: 100,
        }, {
          opacity: 1,
          duration: .7,
          y: 0
        })
        
    })
    return () => {
      gsap.killTweensOf("#container-service")
    }
  },[])

  return (
    <ContainerCardsServices ref={el} id='container-service'>

      <ContainerCardService>
        <img id="image-service1" src="/image-card-service1.png" alt="" />
        <ContainerTextCard id="card-service1">
          <ThirdTitle textThirdTitle="Luxury Vinyl Plank" />
          <Paragraph textParagraph="Since this flooring is waterproof, you don’t have to worry about moisture seeping into your floors when there’s a spill, which can eventually cause mold to grow." />
          <ListCard>
            <li>Easily Cleanable</li>
            <li>Kid and Pet Friendly</li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService>
        <img id="image-service2" src="/image-card-service2.png" alt="" />
        <ContainerTextCard id="card-service2">
          <ThirdTitle textThirdTitle="Laminate Flooring" />
          <Paragraph textParagraph="Once it has been installed, you’ll have a lower risk of allergy symptoms. Laminate flooring locks together and doesn’t have space where dust and debris can be trapped in between sections. The secure design will keep those particles out of your home" />
          <ListCard>
            <li>A typical laminate flooring is a budget-friendly solution.</li>
            <li>Allergy Friendly</li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService>
        <img id="image-service3" src="/image-card-service3.png" alt="" />
        <ContainerTextCard id="card-service3">
          <ThirdTitle textThirdTitle="Engineered Hardwood Flooring" />
          <Paragraph textParagraph="Warp-Resistance: Because of its construction, engineered flooring is resistant to warping and splitting due to moisture exposure and temperature variance." />
          <ListCard>
            <li>Looks so similar to solid hardwood floors and costs les </li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService >
        <img id="image-service4" src="/image-card-service4.png" alt="" />
        <ContainerTextCard id="card-service4">
          <ThirdTitle textThirdTitle="Bamboo Flooring " />
          <Paragraph
            textParagraph="Several advantages: Increased durability, Capability of being refinished multiple times More authentic appearance, Environmental friendliness, Stability"
          />
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService >
        <img id="image-service5" src="/image-card-service5.png" alt="" />
        <ContainerTextCard id="card-service5">
          <ThirdTitle textThirdTitle="Repair/Subfloor correction level" />
          <Paragraph textParagraph="Small / large repairs for your floors, with the correct tools and supply." />
          <ListCard>
            <li>Leveling of the subfloor with Self-Leveling</li>
            <li>Plywood repair</li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService >
        <img id="image-service6" src="/image-card-service6.png" alt="" />
        <ContainerTextCard id="card-service6">
          <ThirdTitle textThirdTitle="LVP/ VCT/ hardwood Glue Down flooring" />
          <Paragraph textParagraph="Since a glue down floor will be physically adhered to the sub-floor, it will be firmly held into place. This makes it an ideal choice if there is going to be heavy traffic in the room. It is also a good choice if there will be any rolling traffic. That includes moving kitchen islands or even wheelchairs." />
        </ContainerTextCard>
      </ContainerCardService>
      
    </ContainerCardsServices>
  );
};

export default CardServices;
