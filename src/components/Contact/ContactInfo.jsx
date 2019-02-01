import React from "react";
import styled from "styled-components";
import { media, mediaMax } from "../../../config/Breakpoints";
import { Envelope, Phone, Location } from "../Icons";
import config from "../../../config/website";

function formatPhoneNumber(phone) {
  const phoneTest = new RegExp(
    /^((\+1)|1)? ?\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})( ?(ext\.? ?|x)(\d*))?$/
  );

  phone.trim();
  const results = phoneTest.exec(phone);
  if (results !== null && results.length > 8) {
    return `(${results[3]}) ${results[4]}-${results[5]}${
      typeof results[8] !== "undefined" ? ` x${results[8]}` : ""
    }`;
  }
  return phone;
}

const ContactInfo = () => {
  const { phone, location, email } = config;
  return (
    <ContactWrap>
      <ContactItem>
        <ContactIconWrap>
          <Phone />
        </ContactIconWrap>
        <ContactItemDetails>
          <ContactItemKey>Phone</ContactItemKey>
          <dd>
            <ContactItemValue href={`tel:+${phone}`}>
              {formatPhoneNumber(phone)}
            </ContactItemValue>
          </dd>
        </ContactItemDetails>
      </ContactItem>

      <ContactItem>
        <ContactIconWrap>
          <Location />
        </ContactIconWrap>
        <ContactItemDetails>
          <ContactItemKey>Location</ContactItemKey>
          <dd>
            <ContactItemValue
              href="https://goo.gl/maps/T7sBujABHYG2"
              target="_blank"
              rel="noopener noreferrer"
            >
              {location}
            </ContactItemValue>
          </dd>
        </ContactItemDetails>
      </ContactItem>

      <ContactItem>
        <ContactIconWrap>
          <Envelope />
        </ContactIconWrap>
        <ContactItemDetails>
          <ContactItemKey>Email</ContactItemKey>
          <dd>
            <ContactItemValue href={`mailto:${email}`}>
              {email}
            </ContactItemValue>
          </dd>
        </ContactItemDetails>
      </ContactItem>
    </ContactWrap>
  );
};

export default ContactInfo;

const ContactWrap = styled.ul`
  line-height: 1;

  ${media.tablet`
		float: left;
	`};
`;

const ContactItem = styled.li`
  margin-bottom: 2.4rem;

  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;

const ContactIconWrap = styled.figure`
  height: 4.8rem;
  line-height: 1;
  text-align: center;
  width: 4.8rem;

  ${media.tablet`
		border-left: 1px solid rgba(0, 0, 0, 0.2);
		display: inline-block;
		float: right;
		margin-left: 1.2rem;
	`};

  ${mediaMax.tablet`
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		margin-bottom: 0.4rem;
		margin-left: auto;
		margin-right: auto;
	`};

  > svg {
    fill: #333;
    height: 100%;
    left: 0;
    max-width: 16px;
    position: relative;
    top: 0;
    transition: all 0.27s cubic-bezier(0.3, 0.1, 0.58, 1);
    width: 50%;
  }
`;

const ContactItemDetails = styled.dl`
  color: #999;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
  text-align: center;

  ${media.tablet`
		display: inline-block;
		float: right;
		text-align: right;
	`};
`;

const ContactItemKey = styled.dt`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

const ContactItemValue = styled.a`
  color: #666;
  margin-bottom: 0;
`;
