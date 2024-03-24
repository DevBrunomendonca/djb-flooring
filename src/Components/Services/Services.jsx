import Subtitle from "../../SubTitle";
import Paragraph from "../../Paragraph";
import {
  ContainerCardsServices,
  ContainerServices,
  ContainerTextServices,
} from "./ServiceStyle";
import CardServices from "./CardServices";

const Services = () => {
  return (
    <ContainerServices>
      <ContainerTextServices>
        <Subtitle textSubtitle="Our Services" />
        <Paragraph textParagraph="We are committed to revolutionizing environments with accuracy and proficiency. Delve into our tailored offerings, spanning streamlined deconstruction to impeccable setups and skilled timber restoration. Uncover the ways in which we can enhance your surroundings with a blend of excellence and inventive solutions." />
      </ContainerTextServices>
      <CardServices />
    </ContainerServices>
  );
};

export default Services;
