import styled from "styled-components";

export const StyledTestimonial = styled.blockquote`
  max-width: 700px;
  margin: auto;
`;

export const StyledAvitar = styled.figure`
  text-align: center;

  img {
    display: inline-block !important;
    border-radius: 50%;
  }
`;

export const StyledQuote = styled.div`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  font-weight: 300;

  p {
    margin-bottom: 1.2rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const StyledAuthor = styled.cite`
  margin-right: 0.6rem;
  text-align: right;
  color: #666;
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  span {
    display: block;
    font-weight: 400;
  }
`;
