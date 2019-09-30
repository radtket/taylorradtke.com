import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { Container } from "../styles/SharedStyles";
import { SliderNextArrow, SliderPrevArrow } from "./SlickArrows";

const Clients = ({ clientLogos }) => (
  <Container>
    <Slider
      {...{
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
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }}
    >
      {clientLogos.map(({ node }) => {
        const {
          id,
          childImageSharp: { fixed },
        } = node;

        return (
          <Img
            key={id}
            fixed={fixed}
            imgStyle={{
              objectFit: "contain",
              width: "80%",
              height: "80%",
              left: "50%",
              marginLeft: "-40%",
              top: "10px",
            }}
          />
        );
      })}
    </Slider>
  </Container>
);

export default Clients;
