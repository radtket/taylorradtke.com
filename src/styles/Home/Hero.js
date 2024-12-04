import styled from "styled-components";
import { StyledContainer } from "../Shared";
import { getSpacing } from "../utils";

export const StyledHero = styled.section`
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
  border-image: fill 0
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.colors.shadows.black[10]} 0%,
      ${({ theme }) => theme.colors.shadows.dark[97]} 100%
    );

  @media only screen and (max-width: 1024px) {
    background-attachment: scroll;
    padding: 120px 0;
  }

  @media only screen and (max-width: 799px) {
    background-size: contain;
    padding: 80px 0;
  }

  ${StyledContainer} {
    @media only screen and (max-width: 799px) {
      width: 85%;
    }

    @media only screen and (max-width: 600px) {
      width: 90%;
    }
  }
`;

export const StyledHeroProfile = styled.article`
  margin-bottom: ${getSpacing(3)};

  @media (min-width: 800px) {
    width: calc(50% - 3.6rem);
    float: left;
    margin-left: ${getSpacing(3)};
  }

  @media (min-width: 1024px) {
    width: calc(41.6666666667% - 3.4rem);
    float: left;
    margin-left: ${getSpacing(3)};
  }

  > p {
    font-weight: 300;
    text-align: left;
    color: ${({ theme }) => theme.colors.grey[500]};
    margin-bottom: ${getSpacing(3)};

    @media only screen and (min-width: 600px) {
      text-align: justify;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.common.white};
    font-size: 2.4rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  h3 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 2rem;
    letter-spacing: 0.3rem;
    margin-bottom: ${getSpacing(3)};
    text-indent: -0.3rem;
    text-transform: uppercase;

    @media only screen and (min-width: 600px) {
      margin-bottom: ${getSpacing(4.5)};
    }
  }
`;

export const StyledHeroImageWrap = styled.figure`
  @media only screen and (max-width: 800px) {
    margin: auto;
    max-width: 500px;
  }

  @media (min-width: 800px) {
    width: calc(50% - 3.6rem);
    float: left;
    margin-left: ${getSpacing(3)};
  }

  @media (min-width: 1024px) {
    width: calc(41.6666666667% - 3.4rem);
    margin-left: calc(8.3333333333% - 2.6rem + 4.8rem);
  }

  img {
    display: inline-block;
  }
`;

export const StyledSignature = styled.figure`
  text-align: right;

  svg {
    fill: ${({ theme }) => theme.colors.primary.main};
    display: inline-block;
    height: 100px;
    vertical-align: middle;
    width: 50%;
  }

  figcaption {
    color: ${({ theme }) => theme.colors.grey[300]};
    font-size: 1.2rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
`;

export const StyledOverlay = styled.div`
  border-image: fill 0 linear-gradient(#0003, #000); /* your gradient here */
`;
