import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  StyledContactWrap,
  StyledContactItem,
  StyledContactItemKey,
  StyledContactItemDetails,
  StyledContactItemValue,
  StyledContactIconWrap,
} from "../../../styles/Home/Contact";
import { formatPhoneNumber } from "../../../utils/helpers";
import { Envelope, Phone, Location } from "../../Icons";

const ContactInfo = () => {
  const {
    site: {
      siteMetadata: {
        contact: { phone, city, email },
      },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          contact {
            city
            phone
            email
          }
        }
      }
    }
  `);

  return (
    <StyledContactWrap>
      <StyledContactItem>
        <StyledContactIconWrap>
          <Phone />
        </StyledContactIconWrap>
        <StyledContactItemDetails>
          <StyledContactItemKey>Phone</StyledContactItemKey>
          <dd>
            <StyledContactItemValue href={`tel:+${phone}`}>
              {formatPhoneNumber(phone)}
            </StyledContactItemValue>
          </dd>
        </StyledContactItemDetails>
      </StyledContactItem>

      <StyledContactItem>
        <StyledContactIconWrap>
          <Location />
        </StyledContactIconWrap>
        <StyledContactItemDetails>
          <StyledContactItemKey>Location</StyledContactItemKey>
          <dd>
            <StyledContactItemValue
              href="https://goo.gl/maps/T7sBujABHYG2"
              rel="noopener noreferrer"
              target="_blank"
            >
              {city}
            </StyledContactItemValue>
          </dd>
        </StyledContactItemDetails>
      </StyledContactItem>

      <StyledContactItem>
        <StyledContactIconWrap>
          <Envelope />
        </StyledContactIconWrap>
        <StyledContactItemDetails>
          <StyledContactItemKey>Email</StyledContactItemKey>
          <dd>
            <StyledContactItemValue href={`mailto:${email}`}>
              {email}
            </StyledContactItemValue>
          </dd>
        </StyledContactItemDetails>
      </StyledContactItem>
    </StyledContactWrap>
  );
};

export default ContactInfo;
