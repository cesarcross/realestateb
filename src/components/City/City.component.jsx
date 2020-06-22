import React from "react";
import { Element } from "react-scroll";

import {
  CityContainer,
  Description,
  Title,
  Text,
  Picture,
  MaxWidth,
} from "./City.style";

import igreja from "../../assets/images/igreja.jpg";

export const City = () => (
  <Element id="city" name="city">
    <CityContainer>
      <MaxWidth>
        <Description>
          <Title>Bairro do Limão</Title>
          <Text>
            Bairro do Limão é um bairro do distrito do Limão situado na Zona
            Norte do município de São Paulo, no estado de São Paulo, no Brasil.
            O mesmo serve de sede para importantes empresas do estado, assim
            como uma das potências atuais do carnaval Paulistano, a escola de
            samba Mocidade Alegre.
          </Text>
          <Text>
            O Limão conta com uma boa infraestrutura de transportes, possuindo
            amplas avenidas, das quais se destacam a Avenida Professor Celestino
            Bourrol, a Avenida Engenheiro Caetano Álvares, a Avenida Nossa
            Senhora do Ó e a Avenida Deputado Emílio Carlos. Há também
            indústrias, um grande número de residências, escolas públicas e
            particulares e variados serviços, tendo acesso bastante facilitado
            pela Via Professor Simão Faiguenboim.
          </Text>
          <Text>
            É vizinho de importantes bairros, como a Lapa, a Barra Funda, a Água
            Branca, a Freguesia do Ó, Pompéia e Casa Verde.
          </Text>
          <Text>
            O bairro é sede de importantes empresas, tais como o jornal O Estado
            de S. Paulo, o jornal esportivo Lance!, o hipermercado Carrefour, o
            Colégio Padre Moye, Rádio Atual e a Cafeteria Pé de Café conhecida
            por seu ambiente agradável e eventos culturais.
          </Text>
        </Description>
        <Picture>
          <img src={igreja} alt=""></img>
        </Picture>
      </MaxWidth>
    </CityContainer>
  </Element>
);

export default City;
