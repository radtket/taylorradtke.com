import styled from "@emotion/styled";

export const Container = styled.div`
  margin: auto;
  max-width: 1200px;
  padding: 0 12px;
  width: 100%;
  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;

export const ContainerFull = styled.div`
  margin: 0 auto;
  max-width: 100%;
  padding: 0 12px;
  position: relative;
  width: 100%;

  &::after {
    clear: both;
    content: "";
    display: block;
  }
`;

export const ScreenReaderText = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const Section = styled.section`
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 1px solid #dddddd;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  padding: 140px 0;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    padding: 120px 0;
  }

  @media only screen and (max-width: 768px) {
    padding: 80px 0;
  }

  @media only screen and (max-width: 480px) {
    padding: 60px 0;
  }
`;

// Typography
export const HeadlineSecondary = styled.section`
  font-family: "Oswald", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.3rem;
  margin-bottom: 1.2rem;
  text-transform: uppercase;
`;
