import React, { useMemo } from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import { keyBy, get } from "lodash";
import Img from "gatsby-image";
import { TESTIMONIAL_LIST } from "../../utils/constants";
import { StyledContainer } from "../../styles/Shared";
import SliderArrow from "../SliderArrow";
import {
  StyledTestimonial,
  StyledAvitar,
  StyledQuote,
  StyledAuthor,
} from "../../styles/Home/Testimonials";

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

  const IMAGES = useMemo(() => keyBy(avitars, "node.relativePath"), [avitars]);

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
        {TESTIMONIAL_LIST.map(
          ({ relativePath, name, company, testimonial }) => (
            <StyledTestimonial key={relativePath}>
              <StyledAvitar>
                <Img
                  {...get(
                    IMAGES,
                    [relativePath, "node", "childImageSharp"],
                    {}
                  )}
                />
              </StyledAvitar>
              <StyledQuote>
                {testimonial.map(item => (
                  <p key={item}>{item}</p>
                ))}
              </StyledQuote>
              <StyledAuthor>
                {`- ${name}`}
                <span>{company}</span>
              </StyledAuthor>
            </StyledTestimonial>
          )
        )}
      </Slider>
    </StyledContainer>
  );
};

export default Testimonials;
