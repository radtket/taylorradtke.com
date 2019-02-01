import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { Container } from "../../styles/SharedStyles";
import { SliderNextArrow, SliderPrevArrow } from "../SlickArrows";
// import {
//   Aapa,
//   AapaConference,
//   Atown,
//   BelleAndJames,
//   Crva,
//   DonTito,
//   MotleyFool,
//   RandS,
//   Riffa,
//   TotalWine
// } from "../Logos";

const Clients = ({ clientLogos }) => {
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
          slidesToScroll: 1
        }
      }
    ]
  };

  const logos = clientLogos.map(logo => {
    const { id, childImageSharp } = logo.node;
    const { fixed } = childImageSharp;
    return (
      <Img
        fixed={fixed}
        key={id}
        imgStyle={{
          objectFit: "contain",
          width: "80%",
          height: "80%",
          left: "50%",
          marginLeft: "-40%",
          top: "10px"
        }}
      />
    );
  });
  return (
    <Container>
      <Slider {...settings}>
        {logos}
        {/* <Aapa />
        <AapaConference />
        <Atown />
        <BelleAndJames />
        <Crva />
        <DonTito />
        <MotleyFool />
        <RandS />
        <Riffa />
        <TotalWine /> */}
      </Slider>
    </Container>
  );
};

export default Clients;
