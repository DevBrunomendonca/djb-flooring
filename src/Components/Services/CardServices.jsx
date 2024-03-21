import Paragraph from "../../Paragraph";
import ThirdTitle from "../../ThirdTitle";
import {
  ContainerCardService,
  ContainerTextCard,
  ListCard,
} from "./CardServicesStyle";
import { ContainerCardsServices } from "./ServiceStyle";

const CardServices = () => {
  return (
    <ContainerCardsServices>

      <ContainerCardService>
        <img src="/image-card-service1.png" alt="" />
        <ContainerTextCard>
          <ThirdTitle textThirdTitle="Luxury Vinyl Plank" />
          <Paragraph textParagraph="Since this flooring is waterproof, you don’t have to worry about moisture seeping into your floors when there’s a spill, which can eventually cause mold to grow." />
          <ListCard>
            <li>Easily Cleanable</li>
            <li>Kid and Pet Friendly</li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService>
        <img src="/image-card-service2.png" alt="" />
        <ContainerTextCard>
          <ThirdTitle textThirdTitle="Laminate Flooring" />
          <Paragraph textParagraph="Once it has been installed, you’ll have a lower risk of allergy symptoms. Laminate flooring locks together and doesn’t have space where dust and debris can be trapped in between sections. The secure design will keep those particles out of your home" />
          <ListCard>
            <li>A typical laminate flooring is a budget-friendly solution.</li>
            <li>Allergy Friendly</li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService>
        <img src="/image-card-service3.png" alt="" />
        <ContainerTextCard>
          <ThirdTitle textThirdTitle="Engineered Hardwood Flooring" />
          <Paragraph textParagraph="Warp-Resistance: Because of its construction, engineered flooring is resistant to warping and splitting due to moisture exposure and temperature variance." />
          <ListCard>
            <li>Looks so similar to solid hardwood floors and costs les </li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService>
        <img src="/image-card-service4.png" alt="" />
        <ContainerTextCard>
          <ThirdTitle textThirdTitle="Bamboo Flooring " />
          <Paragraph
            textParagraph="Several advantages: Increased durability, Capability of being refinished multiple times More authentic appearance, Environmental friendliness, Stability"
          />
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService>
        <img src="/image-card-service5.png" alt="" />
        <ContainerTextCard>
          <ThirdTitle textThirdTitle="Repair/Subfloor correction level" />
          <Paragraph textParagraph="Small / large repairs for your floors, with the correct tools and supply." />
          <ListCard>
            <li>Leveling of the subfloor with Self-Leveling</li>
            <li>Plywood repair</li>
          </ListCard>
        </ContainerTextCard>
      </ContainerCardService>

      <ContainerCardService>
        <img src="/image-card-service6.png" alt="" />
        <ContainerTextCard>
          <ThirdTitle textThirdTitle="LVP/ VCT/ hardwood Glue Down flooring" />
          <Paragraph textParagraph="Since a glue down floor will be physically adhered to the sub-floor, it will be firmly held into place. This makes it an ideal choice if there is going to be heavy traffic in the room. It is also a good choice if there will be any rolling traffic. That includes moving kitchen islands or even wheelchairs." />
        </ContainerTextCard>
      </ContainerCardService>
      
    </ContainerCardsServices>
  );
};

export default CardServices;
