import React from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Testimonial from "./Testimonial";
import { TESTIMONIAL_LIST } from "../../../utils/constants";
import { StyledContainer } from "../../../styles/Shared";
import SliderArrow from "../../SliderArrow";

const Testimonials = () => {
  const {
    allFile: { edges: avitars },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativeDirectory: { eq: "testimonials" }
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
        }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fixed(height: 60, quality: 100) {
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
          responsive: [
            {
              breakpoint: 800,
              settings: {
                arrows: false,
              },
            },
          ],
        }}
      >
        {TESTIMONIAL_LIST.map(({ relativePath, ...testimonial }) => {
          const {
            node: { childImageSharp },
          } = avitars.find(({ node }) => node.relativePath === relativePath);

          return (
            <Testimonial
              {...{ ...testimonial, key: testimonial.name }}
              avitar={<Img {...childImageSharp} />}
            />
          );
        })}
      </Slider>
    </StyledContainer>
  );
};

export default Testimonials;
