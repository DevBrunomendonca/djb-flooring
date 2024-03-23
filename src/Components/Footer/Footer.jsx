import Logo from "../../Logo";
import NavLinks from "../../NavLinks";
import Paragraph from "../../Paragraph";
import ThirdTitle from "../../ThirdTitle";
import {
  ContaineLinks,
  ContainerDescription,
  ContainerFooter,
  ContainerOurService,
  ContentFooter,
  Copyright,
} from "./FooterStyle";

const Footer = () => {
  return (
    <ContainerFooter>
      <ContentFooter>
        <ContainerDescription>
          <ThirdTitle textThirdTitle="DJB HARDWOOD FLOORING" />
          <Paragraph textParagraph=" With more than 10 years of experience in flooring,  DJB Flooring's mission is: Offer work with excellence and honesty for our customers. Explore our gallery and discover excellence in every detail. " />
          <Logo />
        </ContainerDescription>
        <ContainerOurService>
          <ThirdTitle textThirdTitle="Our Services" />
          <Paragraph textParagraph='Luxury Vinyl Plank'/>
          <Paragraph textParagraph='Laminate Flooring'/>
          <Paragraph textParagraph='Bamboo Flooring'/>
          <Paragraph textParagraph='Engineered Hardwood Flooring'/>
          <Paragraph textParagraph='LVP/ VCT/ hardwood Glue Down flooring'/>
          <Paragraph textParagraph='Repair/Subfloor correction level'/>
        </ContainerOurService>
        <ContaineLinks>
          <NavLinks />
        </ContaineLinks>
      </ContentFooter>
      <Copyright>
        Developed by Dlack tecnologia all rights reserved - Copyright ©
      </Copyright>
    </ContainerFooter>
  );
};

export default Footer;
