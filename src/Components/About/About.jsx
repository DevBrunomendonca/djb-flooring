import ButtonSecondary from "../../ButtonSecondary";
import Paragraph from "../../Paragraph";
import SubTitle from "../../SubTitle";
import { ContainerAbout, ContentAbout, ContentBannerAbout, ContentTextAbout } from "./AboutStyle";

const About = () => {
  return (
    <ContainerAbout>
      <ContentAbout>
        <ContentTextAbout>
          <SubTitle textSubtitle="Affordable Luxury for Every Home" />
          <Paragraph
            textParagraph="Flooring is an essential element in any interior design. The right flooring
            choice securely anchors the space with personality and purpose. Whether installed in the home or a place of business, floor coverings should be both functional and beautiful."
          />
          <ButtonSecondary textBtn="Our Services"/>
        </ContentTextAbout>
        <ContentBannerAbout>
          <img src="/image-about.png" alt="" />
        </ContentBannerAbout>
      </ContentAbout>
    </ContainerAbout>
  );
};

export default About;
