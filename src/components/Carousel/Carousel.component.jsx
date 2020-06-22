import React from "react";
import Slider from "react-slick";
import { Element } from "react-scroll";

import { CarouselContainer, SliderContainer, Item } from "./Carousel.style";

import firma from "../../assets/images/firma.jpeg";
import firma2 from "../../assets/images/firma2.jpeg";
import firma3 from "../../assets/images/firma3.jpeg";
import firma4 from "../../assets/images/firma4.jpeg";
import firma5 from "../../assets/images/firma5.jpeg";

const Carousel = () => {
  const settings = {
    dots: true,
    acessibility: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Element id="fotos" name="fotos">
      <CarouselContainer>
        <SliderContainer>
          <Slider {...settings}>
            <Item>
              <img src={firma2} alt=""></img>
            </Item>
            <Item>
              <img src={firma} alt=""></img>
            </Item>
            <Item>
              <img src={firma3} alt=""></img>
            </Item>
            <Item>
              <img src={firma4} alt=""></img>
            </Item>
            <Item>
              <img src={firma5} alt=""></img>
            </Item>
          </Slider>
        </SliderContainer>
      </CarouselContainer>
    </Element>
  );
};

export default Carousel;
