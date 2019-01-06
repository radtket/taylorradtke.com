/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "../../styles/SharedStyles";

import SingleTestimonial from "./SingleTestimonial";
import avitarJon from "../../assets/images/testimonials/testimonial__jon.jpg";
import avitarJimmy from "../../assets/images/testimonials/testimonial__jimmy.jpg";
import avitarHenri from "../../assets/images/testimonials/testimonial__henri.jpg";

class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            arrows: false
          }
        }
      ]
    };
    return (
      <Container>
        <Slider {...settings}>
          <div>
            <SingleTestimonial
              avitar={avitarJon}
              name="Jon Winslow"
              company="Captain Jon's Green Can Lockers"
              testimonial={`I am a small start up and I went to Taylor for a website. I am on limited funds and Taylor was able to go from inception to finish on time and on budget. I was very impressed, since being on a limited budget I was expecting a generic basic product but what I received was the opposite. Taylor talked to me and got the feel for my product and direction then went to work on the site. He produced a beautiful and professionally done website. Along the way when I neededsome "tweaks" Taylor was receptive but more importantly , Available. The tweaks were done fast and to my complete satisfaction. I recommend Taylor highly . If you want Champagne on a beer budget then Taylor is your web designer.`}
            />
          </div>
          <div>
            <SingleTestimonial
              avitar={avitarJimmy}
              name="Jimmy Conway"
              company="Kulture"
              testimonial={`I've worked with Taylor on flyers, t-shirt designs, stickers, collaborations between other artist and other projects over the past 4 years. With some projects/ideas being turned around with 24 hours. Great guy, very professional and a joy to work with. `}
            />
          </div>
          <div>
            <SingleTestimonial
              avitar={avitarHenri}
              name="Henri Charuau"
              company="RIFFA"
              testimonial={`Taylor did an excellent job at communicating with me. He was very conscious of everything I desired, while at the same time making the work a reality. He also gave me wonderful ideas for branding, as well as helped me push my brand in the right direction. With Taylor's help, my social media sites increased traffic over 600% in a month. I would recommend Taylor to anyone that is interested.`}
            />
          </div>
        </Slider>
      </Container>
    );
  }
}

export default Testimonials;
