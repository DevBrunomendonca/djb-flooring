import SubTitle from "../../SubTitle";
import Paragraph from "../../Paragraph";
import {
  CardImg,
  ContainerMoreAbout,
  ContentBannerMoreAbout,
  ContentTextMoreAbout,
} from "./MoreAboutStyle";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";



const MoreAbout = () => {
  
  const [sliderPreview, setSliderPerview] = useState(2)
  
  useEffect(() => {
    function handleSize(){
      window.innerWidth < 768
      ? setSliderPerview(1)
      : setSliderPerview(2)
    }
    handleSize()
    window.addEventListener('resize', handleSize)

    return() => {
      window.removeEventListener('resize', handleSize)
    }
  },[])


  const data = [
    { id: "1", imageUrl: "/banner-more-about.png" },
    { id: "2", imageUrl: "/banner-more-about2.png" },
    { id: "3", imageUrl: "/banner-more-about3.png" },
    { id: "4", imageUrl: "/banner-more-about4.png" },
  ];

  return (
    <ContainerMoreAbout>
      <ContentTextMoreAbout>
        <SubTitle textSubtitle="More About Us" />
        <Paragraph textParagraph="DJB Flooring LLC  is an Atlanta-Ga Flooring installation company that provides experienced design assistance, expert level product knowledge, and skilled labor for flooring installations. When you work with us, you can trust that we are comfortable at the helm of your flooring project and will safely navigate you through the sea of flooring options." />
        <Paragraph textParagraph="With more than 10 years of experience in flooring,  DJB Flooring's mission is : “Offer work with excellence and honesty for our customers. Explore our gallery and discover excellence in every detail. " />
      </ContentTextMoreAbout>

      <ContentBannerMoreAbout>
        <Swiper
          loop={true}
          slidesPerView={sliderPreview}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <CardImg>
                <img src={item.imageUrl} alt="Flooring images" />
              </CardImg>
            </SwiperSlide>
          ))}
        </Swiper>
      </ContentBannerMoreAbout>
    </ContainerMoreAbout>
  );
};

export default MoreAbout;
