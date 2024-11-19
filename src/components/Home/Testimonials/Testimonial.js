import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import {
  StyledTestimonial,
  StyledAvitar,
  StyledQuote,
  StyledAuthor,
} from "../../../styles/Home/Testimonials";

const Testimonial = ({ name, company, testimonial, node }) => (
  <StyledTestimonial>
    <StyledAvitar>
      <Img {...node.childImageSharp} />
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
);

Testimonial.propTypes = {
  avitar: PropTypes.node,
  company: PropTypes.string,
  name: PropTypes.string.isRequired,
  node: PropTypes.shape({
    childImageSharp: PropTypes.shape({}),
  }).isRequired,
  testimonial: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Testimonial.defaultProps = {
  avitar: null,
  company: null,
};

export default Testimonial;
