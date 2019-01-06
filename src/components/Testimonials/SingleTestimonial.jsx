import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const SingleTestimonial = ({ avitar, name, company, testimonial }) => (
  <blockquote style={{ maxWidth: 700, margin: "auto" }}>
    <figure style={{ textAlign: "center" }} className="testimonial__avatar">
      <Avitar src={avitar} alt={`${name} of ${company}`} />
    </figure>
    <Quote>{`" ${testimonial} "`}</Quote>
    <Author>{`${name} - ${company}`}</Author>
  </blockquote>
);

export default SingleTestimonial;

SingleTestimonial.propTypes = {
  avitar: PropTypes.string,
  name: PropTypes.string.isRequired,
  company: PropTypes.string,
  testimonial: PropTypes.string.isRequired
};

SingleTestimonial.defaultProps = {
  avitar: "",
  company: ""
};

const Avitar = styled.img`
  width: 60px;
  height: 60px;
  display: inline-block !important;
  border-radius: 50%;
`;

const Quote = styled.p`
  margin-top: 2.4rem;
  margin-bottom: 2.4rem;
  font-weight: 300;
`;

const Author = styled.cite`
  margin-right: 0.6rem;
  text-align: right;
  color: #666;
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
