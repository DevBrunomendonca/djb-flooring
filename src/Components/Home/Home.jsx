import ButtonSecondary from "../../ButtonSecondary";
import Paragraph from "../../Paragraph";
import Title from "../../Title";
import { ContainerHome, ContentHome } from "./HomeStyle";

const Home = () => {
  return (
    <ContainerHome id="container-home">
      <ContentHome>
        <Title />
        <Paragraph textParagraph="The best labor price for : Luxury Vinyl Plank , Laminate , Engineered Floor, LVP/ VCT installation "/>
        <ButtonSecondary hrefBtn='#container-contact' textBtn="Schedule your FREE consultation Today" />
      </ContentHome>
    </ContainerHome>
  );
};

export default Home;
