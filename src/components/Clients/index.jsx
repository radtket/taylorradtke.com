import React from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { Container } from "../../styles/SharedStyles";
import { SliderNextArrow, SliderPrevArrow } from "../SlickArrows";
import {
  Aapa,
  AapaConference,
  Atown,
  BelleAndJames,
  Crva,
  DonTito,
  MotleyFool,
  RandS,
  Riffa,
  TotalWine
} from "../Logos";

const ClientsSlider = styled(Slider)`
  .slick-slide {
    > div {
      align-items: center;
      display: flex;
      float: none;
      height: 100px;
      justify-content: center;
      margin-right: 12px;
      transform-style: preserve-3d;

      svg {
        display: block;
        height: 100%;
        margin: auto;
        max-height: 75%;
        max-width: 75%;
        position: relative;
        top: 0;
        transform: none;
        transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
        width: 100%;
      }
    }
  }
`;

const Clients = () => {
  const settings = {
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };
  return (
    <Container>
      <ClientsSlider {...settings}>
        <Aapa />
        <AapaConference />
        <Atown />
        <BelleAndJames />
        <Crva />
        <DonTito />
        <MotleyFool />
        <RandS />
        <Riffa />
        <TotalWine />
      </ClientsSlider>
    </Container>
  );
};
export default Clients;
