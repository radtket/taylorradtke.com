import styled from "styled-components";
import { margin } from "polished";
import { getSpacing } from "../utils";

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
  ${margin(getSpacing(3), null)}
  font-weight: 300;

  p {
    margin-bottom: ${getSpacing(1.5)};

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const StyledAuthor = styled.cite`
  margin-right: ${getSpacing(0.75)};
  text-align: right;
  color: ${({ theme }) => theme.colors.grey[300]};
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
