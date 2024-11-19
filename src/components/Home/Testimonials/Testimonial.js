import React from "react";
import PropTypes from "prop-types";
import {
  StyledTestimonial,
  StyledAvitar,
  StyledQuote,
  StyledAuthor,
} from "../../../styles/Home/Testimonials";

const Testimonial = ({ avitar, name, company, testimonial }) => (
  <StyledTestimonial>
    <StyledAvitar>{avitar}</StyledAvitar>
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
  name: PropTypes.string.isRequired,
  company: PropTypes.string,
  testimonial: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Testimonial.defaultProps = {
  avitar: null,
  company: null,
};

export default Testimonial;
