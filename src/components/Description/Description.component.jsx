import React from "react";
import { Element } from "react-scroll";

import {
  DescriptionContainer,
  Item,
  // RuleIcon,
  // BedIcon,
  // ShowerIcon,
  // CarIcon,
  // BuildingIcon,
  // CouchIcon,
  // MountainIcon,
  // MapIcon,
  // PetIcon,
  PriceText,
  Price,
} from "./Description.style";

export const Description = () => (
  <Element id="descricao" name="descricao">
    <DescriptionContainer>
      <Item>
        <ul>
          <p>500 m²</p>
          <p>3 salas comerciais</p>
          <p>2 salões (1 com 2 mezaninos)</p>
          <p>7 banheiros</p>
          <p>8 vagas</p>

          {/* <li>
            <RuleIcon />
            <p>90 m²</p>
          </li>
          <li>
            <BedIcon />
            <p>3 quartos</p>
          </li>
          <li>
            <ShowerIcon />
            <p>2 banheiros</p>
          </li>
        </ul>
        <ul>
          <li>
            <CarIcon />
            <p>1 vaga</p>
          </li>
          <li>
            <BuildingIcon />
            <p>2 andar</p>
          </li>
          <li>
            <CouchIcon />
            <p>Mobiliado</p>
          </li>
        </ul>
        <ul>
          <li>
            <MountainIcon />
            <p>Vista livre</p>
          </li>
          <li>
            <PetIcon />
            <p>Aceita animais</p>
          </li>
          <li>
            <MapIcon />
            <p>Excelente localização</p>
          </li> */}
        </ul>
      </Item>
      <PriceText>Valor do Imóvel</PriceText>
      <Price>R$ 2.200.000</Price>
    </DescriptionContainer>
  </Element>
);

export default Description;
