import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PageSection from "../PageSection";
import { StyledContainer } from "../../styles/Shared";
import SliderArrow from "../SliderArrow";

const Clients = () => {
  const {
    allFile: { edges: logos },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "client-logos" }
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
        }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fixed(height: 100, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <StyledContainer>
      <Slider
        {...{
          nextArrow: <SliderArrow isNext />,
          prevArrow: <SliderArrow />,
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
        {logos.map(({ node: { id: key, childImageSharp: { fixed } } }) => (
          <Img
            {...{
              key,
              fixed,
              imgStyle: {
                objectFit: "contain",
                width: "80%",
                height: "80%",
                left: "50%",
                marginLeft: "-40%",
                top: "10px",
              },
            }}
          />
        ))}
      </Slider>
    </StyledContainer>
  );
};

export default Clients;
