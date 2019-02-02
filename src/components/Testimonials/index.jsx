/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "../../styles/SharedStyles";
import { SliderNextArrow, SliderPrevArrow } from "../SlickArrows";

import Testimonial from "./Testimonial";
import avitarJon from "../../assets/images/testimonials/testimonial__jon.jpg";
import avitarJimmy from "../../assets/images/testimonials/testimonial__jimmy.jpg";
import avitarHenri from "../../assets/images/testimonials/testimonial__henri.jpg";
import avitarMary from "../../assets/images/testimonials/testimonial__mary.jpg";

class Testimonials extends Component {
  render() {
    const settings = {
      nextArrow: <SliderNextArrow />,
      prevArrow: <SliderPrevArrow />,
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
          <Testimonial
            avitar={avitarMary}
            name="Mary K. Kabza"
            company="Web Strategy Director at AAPA"
            testimonial={[
              `I only had the pleasure of working with Taylor Radtke for four months during his tenure with AAPA as Full Stack Web Developer, Web Designer. I started in March 2018 and Taylor left in July 2018. Despite the short amount of time we worked together, I got to know Taylor, his work ethic, and skills. Along with his exceptionally sharp sense of humor, what impressed me most about Taylor is his dedication to a quality work product regardless of challenges, impediments or limitations.`,
              `Taylor was with AAPA for almost two years, acting as the sole in-house resource for website development. Working with internal clients and departments throughout the organization, Taylor was the primary graphic designer and developer for AAPA.org, CHLM.org, pa-foundation.org, aapa.org/conference and yourPAcan.org. With close to 100 staff/contractors within the organization, Taylor and the Senior Digital Product manager collaborated closely to design, develop, deploy and maintain AAPA's websites serving over 50,000 members.`,
              `Taylor's passion for his work product is only exceeded by his desire to learn and deliver more. Taylor was a strong creative force for the Web Team and AAPA — designing and delivering beyond what was expected. Taylor has a gift of connecting a user-centric approach to innovative design and thoughtful backend development — rarely do you find that perfect designer/developer blend — yet alone, in someone who can talk sports and geek speak fluently.`,
              `As his former supervisor, I would wholeheartedly sing Taylor's praises any day. And I would only be so lucky to have the opportunity to work with him again. If you have any questions about Taylor's skill set, personality, and/or any of the above, do not hesitate to reach out to me. It has been my utmost pleasure working with Taylor and getting to know him. I am confident Taylor will continue to do great things wherever he goes. Thank you for this opportunity to share a few things with you about Taylor.`
            ]}
          />

          <Testimonial
            avitar={avitarJon}
            name="Jon Winslow"
            company="Captain Jon's Green Can Lockers"
            testimonial={[
              `"I am a small start up and I went to Taylor for a website. I am on limited funds and Taylor was able to go from inception to finish on time and on budget. I was very impressed, since being on a limited budget I was expecting a generic basic product but what I received was the opposite. Taylor talked to me and got the feel for my product and direction then went to work on the site. He produced a beautiful and professionally done website. Along the way when I neededsome "tweaks" Taylor was receptive but more importantly , Available. The tweaks were done fast and to my complete satisfaction. I recommend Taylor highly . If you want Champagne on a beer budget then Taylor is your web designer."`
            ]}
          />

          <Testimonial
            avitar={avitarJimmy}
            name="Jimmy Conway"
            company="Kulture"
            testimonial={[
              `"I've worked with Taylor on flyers, t-shirt designs, stickers, collaborations between other artist and other projects over the past 4 years. With some projects/ideas being turned around with 24 hours. Great guy, very professional and a joy to work with. `
            ]}
          />

          <Testimonial
            avitar={avitarHenri}
            name="Henri Charuau"
            company="RIFFA"
            testimonial={[
              `"Taylor did an excellent job at communicating with me. He was very conscious of everything I desired, while at the same time making the work a reality. He also gave me wonderful ideas for branding, as well as helped me push my brand in the right direction. With Taylor's help, my social media sites increased traffic over 600% in a month. I would recommend Taylor to anyone that is interested.`
            ]}
          />
        </Slider>
      </Container>
    );
  }
}

export default Testimonials;
