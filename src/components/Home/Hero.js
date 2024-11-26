import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  StyledHero,
  StyledHeroProfile,
  StyledSignature,
  StyledHeroImageWrap,
} from "../../styles/Home/Hero";
import { StyledContainer } from "../../styles/Shared";
import { BrandingSignature } from "../Branding";

const Hero = () => {
  const {
    avitar,
    hero,
    site: {
      siteMetadata: { title, description, name },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          name
        }
      }
      avitar: file(relativePath: { eq: "hero__avitar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      hero: file(relativePath: { eq: "hero__bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <StyledHero
      id="about"
      style={{
        backgroundImage: `url(${hero.childImageSharp.fluid.src})`,
      }}
    >
      <StyledContainer>
        <StyledHeroProfile>
          <h1>{name}</h1>
          <h3>Web Developer x Designer</h3>
          <p>{description}</p>
          <StyledSignature>
            <BrandingSignature />
            <figcaption>{title}</figcaption>
          </StyledSignature>
        </StyledHeroProfile>
        <StyledHeroImageWrap>
          <Img {...avitar.childImageSharp} />
        </StyledHeroImageWrap>
      </StyledContainer>
    </StyledHero>
  );
};

export default Hero;
