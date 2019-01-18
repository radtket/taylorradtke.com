import React from "react";
import Img from "gatsby-image";
import styled from "@emotion/styled";
import { Container } from "../styles/SharedStyles";
import { BrandingSignature } from "./Logos";
import { siteDescription, siteTitleAlt, siteTitle } from "../../config/website";

const HeroWrap = styled.section`
  background-attachment: fixed;
  background-color: #212121;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  overflow: hidden;
  padding: 120px 0;
  position: relative;
  text-align: center;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    background-attachment: scroll;
    padding: 120px 0;
  }

  @media only screen and (max-width: 799px) {
    background-size: contain;
    padding: 80px 0;
  }

  ${Container} {
    @media only screen and (max-width: 799px) {
      width: 85%;
    }

    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  }
`;

const HeroProfile = styled.article`
  margin-bottom: 2.4rem;

  @media (min-width: 800px) {
    width: calc(50% - 3.6rem);
    float: left;
    margin-left: 2.4rem;
  }

  @media (min-width: 1024px) {
    width: calc(41.6666666667% - 3.4rem);
    float: left;
    margin-left: 2.4rem;
  }

  > p {
    font-weight: 300;
    text-align: left;
    color: #dddddd;

    @media only screen and (min-width: 600px) {
      text-align: justify;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 2.4rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h3 {
    color: #c0a062;
    font-size: 2rem;
    letter-spacing: 0.3rem;
    margin-bottom: 2.4rem;
    text-indent: -0.3rem;
    text-transform: uppercase;

    @media only screen and (min-width: 600px) {
      margin-bottom: 3.6rem;
    }
  }
`;

const HeroImageWrap = styled.figure`
  @media only screen and (max-width: 800px) {
    margin: auto;
    max-width: 500px;
  }

  @media (min-width: 800px) {
    width: calc(50% - 3.6rem);
    float: left;
    margin-left: 2.4rem;
  }

  @media (min-width: 1024px) {
    width: calc(41.6666666667% - 3.4rem);
    float: left;
    margin-left: 2.4rem;
    margin-left: calc(8.3333333333% - 2.6rem + 4.8rem);
  }

  img {
    display: inline-block;
  }
`;

const Signature = styled.figure`
  text-align: right;

  svg {
    fill: #c0a062;
    display: inline-block;
    height: 100px;
    vertical-align: middle;
    width: 50%;
  }

  figcaption {
    color: #666666;
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

const HomeHero = ({ heroImage, avitar }) => (
  <HeroWrap
    className="hero"
    id="about"
    style={{
      backgroundImage: `url(${heroImage.childImageSharp.fluid.src})`
    }}
  >
    <Container>
      <HeroProfile>
        <h1>{siteTitleAlt}</h1>
        <h3>Web Developer x Designer</h3>
        <p>{siteDescription}</p>
        <Signature>
          <BrandingSignature />
          <figcaption>{siteTitle}</figcaption>
        </Signature>
      </HeroProfile>

      <HeroImageWrap>
        <Img fluid={avitar.childImageSharp.fluid} />
      </HeroImageWrap>
    </Container>
  </HeroWrap>
);

export default HomeHero;
