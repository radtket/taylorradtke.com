import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Testimonial = ({ avitar, name, company, testimonial }) => {
  const testimonialBody = testimonial.map(item => <p key={item}>{item}</p>);

  return (
    <blockquote style={{ maxWidth: 700, margin: "auto" }}>
      <figure style={{ textAlign: "center" }}>
        <Avitar src={avitar} alt={`${name} of ${company}`} />
      </figure>
      <Quote>{testimonialBody}</Quote>
      <Author>
        {`- ${name}`}
        <span>{company}</span>
      </Author>
    </blockquote>
  );
};

export default Testimonial;

Testimonial.propTypes = {
  avitar: PropTypes.string,
  name: PropTypes.string.isRequired,
  company: PropTypes.string
  // testimonial: PropTypes.arrayOf(PropTypes.string)
};

Testimonial.defaultProps = {
  avitar: "",
  company: ""
};

const Avitar = styled.img`
  width: 60px;
  height: 60px;
  display: inline-block !important;
  border-radius: 50%;
`;

const Quote = styled.div`
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

const Author = styled.cite`
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
