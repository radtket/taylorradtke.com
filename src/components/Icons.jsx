import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { blink, squeeze } from "../styles/Animations";

export const PaginationPrev = () => (
  <svg viewBox="0 0 32 32" xmlns="https://www.w3.org/2000/svg">
    <path d="M6.5 19.7l11 10.8c1 .9 2.2 1.5 3.6 1.5s2.6-.5 3.6-1.5l.9-.9c1-.9 1.5-2.2 1.5-3.5 0-1.3-.5-2.6-1.5-3.5L18.9 16l6.6-6.5c1-.9 1.5-2.2 1.5-3.5s-.5-2.6-1.5-3.5l-.9-.9C23.6.5 22.4 0 21 0s-2.6.5-3.6 1.5l-11 10.8c-1 1-1.5 2.3-1.5 3.7.1 1.4.6 2.7 1.6 3.7zm1.7-5.6l11-10.8c.5-.5 1.2-.7 1.8-.7.7 0 1.3.2 1.8.7l.9.9c1 1 1 2.6 0 3.6L15.4 16l8.4 8.3c1 1 1 2.6 0 3.6l-.9.9c-.5.5-1.2.7-1.8.7-.7 0-1.3-.2-1.8-.7L8.2 18c-.5-.5-.8-1.2-.7-2-.1-.7.2-1.4.7-1.9z" />
  </svg>
);

export const PaginationNext = () => (
  <svg viewBox="0 0 32 32" xmlns="https://www.w3.org/2000/svg">
    <path d="M25.5 12.3l-11-10.8C13.6.5 12.3 0 11 0 9.6 0 8.4.5 7.4 1.5l-.9.9C5.5 3.3 5 4.6 5 5.9s.5 2.6 1.5 3.5l6.6 6.5-6.6 6.5c-1 .9-1.5 2.2-1.5 3.5 0 1.3.5 2.6 1.5 3.5l.9.9c1 .9 2.2 1.5 3.6 1.5s2.6-.5 3.6-1.5l11-10.8c1-1 1.5-2.3 1.5-3.7-.1-1.2-.6-2.5-1.6-3.5zm-1.7 5.6l-11 10.8c-.5.5-1.2.7-1.8.7-.7 0-1.3-.2-1.8-.7l-.9-.9c-1-1-1-2.6 0-3.6l8.4-8.3-8.5-8.2c-1-1-1-2.6 0-3.6l.9-.9c.5-.5 1.2-.7 1.8-.7.7 0 1.3.2 1.8.7l11 10.8c.5.5.8 1.2.7 2 .2.7-.1 1.4-.6 1.9z" />
  </svg>
);

export const PaginationHome = () => (
  <svg viewBox="0 0 32 32" xmlns="https://www.w3.org/2000/svg">
    <path d="M24.4 16l6-6c2-2 2-5.4 0-7.4l-1-1c-1-1-2.3-1.5-3.7-1.5C24.3 0 23 .5 22 1.5l-6 6-6-6C9 .5 7.7 0 6.3 0 4.9 0 3.5.5 2.6 1.5l-1 1c-2 2-2 5.4 0 7.4l6 6-6 6c-2 2-2 5.4 0 7.4l1 1c1 1 2.3 1.5 3.7 1.5 1.4 0 2.7-.5 3.7-1.5l6-6 6 6c1 1 2.3 1.5 3.7 1.5 1.4 0 2.7-.5 3.7-1.5l1-1c2-2 2-5.4 0-7.4l-6-5.9zm4.4 11.8l-1 1c-.6.6-1.3.8-2.1.8-.7 0-1.5-.3-2-.8L16 21.1l-7.7 7.7c-.6.6-1.3.8-2 .8s-1.5-.3-2-.8l-1-1c-1.1-1.1-1.1-3 0-4.1L11 16 3.2 8.3c-1.1-1.1-1.1-3 0-4.1l1-1c.6-.6 1.3-.8 2-.8s1.5.3 2 .8l7.7 7.7 7.7-7.7c.6-.6 1.3-.8 2-.8s1.5.3 2.1.8l1 1c1.1 1.1 1.1 3 0 4.1L21.1 16l7.7 7.7c1.1 1.1 1.1 3 0 4.1z" />
  </svg>
);

export const CheckMark = () => (
  <svg viewBox="0 0 36 36" xmlns="https://www.w3.org/2000/svg">
    <path
      d="M35.7 6.4L31 2.2c-.2-.1-.4-.2-.6-.2-.2 0-.4.1-.5.2L12.6 22l-6.2-8.2c-.1-.2-.3-.3-.5-.3s-.4 0-.5.1L.3 17.4c-.3.2-.4.7-.1 1l11.4 15.1c.1.2.3.3.6.3.2 0 .4-.1.6-.3l23-26.1c.3-.3.3-.7-.1-1z"
      fill="#c0a062"
    />
  </svg>
);

export const ArrowLeft = () => (
  <svg viewBox="0 0 20 35" xmlns="https://www.w3.org/2000/svg">
    <path d="M.7 15.8L15.8.7c1-1 2.5-1 3.5 0s1 2.5 0 3.5L5.9 17.5l13.4 13.3c1 1 1 2.5 0 3.5s-2.5 1-3.5 0L.7 19.3c-.9-1-.9-2.6 0-3.5z" />
  </svg>
);

export const ArrowRight = () => (
  <svg viewBox="0 0 20 35" xmlns="https://www.w3.org/2000/svg">
    <path d="M19.3 19.2L4.2 34.3c-1 1-2.5 1-3.5 0s-1-2.5 0-3.5l13.4-13.3L.7 4.2c-1-1-1-2.5 0-3.5s2.5-1 3.5 0l15.1 15c.9 1 .9 2.6 0 3.5z" />
  </svg>
);

export const SendAirplane = () => (
  <svg viewBox="0 0 512 367.5" xmlns="https://www.w3.org/2000/svg">
    <path d="M505.2 14.3a34.9 34.9 0 0 0-36.6-13.2L26.4 112.4a34.9 34.9 0 0 0-9.4 63.8l93.5 56.1v123a12.2 12.2 0 0 0 19.7 9.6l87.7-68.3 72 43.2a34.9 34.9 0 0 0 47.7-11.6l169.2-275a34.9 34.9 0 0 0-1.6-38.9zm-199.5 287l-109.6-65.8 111.2-95.8a4.2 4.2 0 0 0-4.3-7.1L133.6 198l-82.3-49.4L463.5 44.9z" />
  </svg>
);

export const Envelope = () => (
  <svg viewBox="0 0 241.061 241.061" xmlns="https://www.w3.org/2000/svg">
    <path d="M198.602 70.402l-78.063 68.789-78.08-68.79a7.5 7.5 0 1 0-9.916 11.255l83.039 73.159c1.417 1.248 3.188 1.872 4.958 1.872s3.542-.624 4.959-1.873l83.022-73.159a7.502 7.502 0 0 0 .668-10.586 7.505 7.505 0 0 0-10.587-.667z" />
    <path d="M218.561 38.529H22.5c-12.406 0-22.5 10.093-22.5 22.5v119.002c0 12.407 10.094 22.5 22.5 22.5h196.061c12.406 0 22.5-10.093 22.5-22.5V61.029c0-12.406-10.094-22.5-22.5-22.5zm7.5 141.502c0 4.135-3.364 7.5-7.5 7.5H22.5c-4.136 0-7.5-3.365-7.5-7.5V61.029c0-4.135 3.364-7.5 7.5-7.5h196.061c4.136 0 7.5 3.365 7.5 7.5v119.002z" />
  </svg>
);

export const Phone = () => (
  <svg viewBox="0 0 490.78 490.78" xmlns="https://www.w3.org/2000/svg">
    <path d="M.001 418.576l9.741 10.589c5.383 5.852 53.842 57.289 96.964 61.265 2.53.233 5.169.351 7.851.351 57.813-.005 150.329-55.167 235.693-140.53 42.922-42.922 78.975-88.442 104.262-131.64 18.221-31.127 39.244-75.81 35.917-111.906-3.974-43.122-55.412-91.581-61.264-96.964L418.577 0 287.048 131.528l44.169 44.169-155.519 155.519-44.168-44.169L.001 418.576zm41.975.451l89.553-89.553 44.168 44.169 197.946-197.945-44.169-44.169 89.573-89.573c16.152 17.034 39.522 45.947 41.509 67.503 2.025 21.976-9.316 55.358-31.935 93.997-24.011 41.019-58.447 84.445-99.584 125.582-77.565 77.563-165.764 131.738-214.487 131.742-1.76 0-3.472-.075-5.09-.224-21.377-1.971-50.612-25.616-67.484-41.529z" />
  </svg>
);

export const Location = () => (
  <svg viewBox="0 0 217.109 217.109" xmlns="https://www.w3.org/2000/svg">
    <path d="M108.552 0C62.42 0 24.89 37.535 24.89 83.672c0 32.967 13.802 66.314 39.914 96.437 19.503 22.499 38.831 35.246 39.645 35.778a7.495 7.495 0 0 0 8.208 0c.813-.532 20.144-13.279 39.647-35.777 26.114-30.124 39.917-63.471 39.917-96.438C192.22 37.535 154.686 0 108.552 0zm0 200.4C93.165 188.934 39.89 144.806 39.89 83.672 39.89 45.806 70.691 15 108.552 15c37.864 0 68.668 30.806 68.668 68.672 0 61.134-53.28 105.262-68.668 116.728z" />
    <path d="M108.557 50.449c-18.31 0-33.206 14.897-33.206 33.209 0 18.307 14.896 33.201 33.206 33.201 18.31 0 33.205-14.894 33.205-33.201 0-18.311-14.896-33.209-33.205-33.209zm0 51.41c-10.039 0-18.206-8.165-18.206-18.201 0-10.041 8.167-18.209 18.206-18.209 10.038 0 18.205 8.168 18.205 18.209 0 10.036-8.167 18.201-18.205 18.201z" />
  </svg>
);

export const CodePen = () => (
  <svg viewBox="0 0 30.8 31.7" xmlns="https://www.w3.org/2000/svg">
    <path d="M16.5.4c-.9-.6-2-.6-2.8 0L1.1 9.2C.4 9.7 0 10.4 0 11.3v9.4c0 .8.4 1.6 1.1 2.1l12.8 8.5c.8.6 1.9.6 2.8 0l13-8.6c.7-.5 1.1-1.2 1.1-2.1v-9.3c0-.8-.4-1.6-1.1-2.1L16.5.4zm9.7 10.2l-4.8 3.2-4.5-3.3V4c-.1.1 9.3 6.6 9.3 6.6zM13.6 4.1v6.3L9 13.6l-4.6-3.1 9.2-6.4zM3 13.7l3 2-3 2.1v-4.1zm10.6 13.5L4.3 21 9 17.7l4.7 3.1v6.4zm-1.7-11.5l3-2.1 3.5 2.3-3.1 2.1-3.4-2.3zm5 11.5v-6.4l4.5-3 4.8 3.2-9.3 6.2zm10.6-9.3l-3.2-2.1 3.2-2.1v4.2z" />
  </svg>
);

export const GitHub = () => (
  <svg viewBox="0 0 475.1 402" xmlns="https://www.w3.org/2000/svg">
    <path d="M436.2 110.2c5.1-15.4 7.7-31.4 7.7-48 0-22.1-4.9-42.8-14.6-62.2-20.4 0-38.3 3.7-54 11.1-15.6 7.4-33.4 18.9-53.4 34.5-25.1-6.1-51.8-9.1-79.9-9.1-30.8 0-60.2 3.3-88.2 10-20.4-16-38.4-27.7-54-35.3S66.2 0 45.7 0C36 19.4 31.1 40.2 31.1 62.2c0 16.8 2.6 32.9 7.7 48.5C12.9 141 0 178.7 0 223.8c0 39.6 5.9 71.1 17.7 94.5 6.3 12.4 14.5 23.3 24.6 32.8 10.1 9.5 21.6 17.2 34.5 23.1 12.9 5.9 26 10.8 39.1 14.7 13.1 3.9 27.6 6.8 43.5 8.6 15.9 1.8 29.9 3 42.1 3.6 12.2.6 25.7.9 40.5.9 17.5 0 33.4-.4 47.7-1.3 14.3-.9 30.6-3 49-6.3s34.5-7.9 48.5-13.6c14-5.7 27.4-13.9 40.3-24.6 12.8-10.7 22.9-23.3 30.1-38 11.6-23.6 17.4-55.1 17.4-94.5.1-45.2-12.9-83-38.8-113.5zM402 317.9c-6.1 12.5-13.8 22.3-23.1 29.4-9.3 7.1-20.9 12.8-34.8 17.1-13.9 4.3-27.2 7.1-40 8.4-12.8 1.3-26.9 2-42.5 2h-48c-15.6 0-29.8-.7-42.5-2-12.8-1.3-26.1-4.1-40-8.4-13.9-4.3-25.5-10-34.8-17.1-9.3-7.1-17-16.9-23.1-29.4-6.2-12.5-9.2-27.1-9.2-43.8 0-22.8 6.6-42.3 19.7-58.2 13.1-16 30.9-24 53.4-24 8.2 0 26.7 2 55.7 6 13.5 2.1 28.5 3.1 44.8 3.1 16.4 0 31.3-1 44.8-3.1 29.3-4 47.9-6 55.7-6 22.5 0 40.3 8 53.4 24 13.1 16 19.7 35.4 19.7 58.2-.1 16.7-3.1 31.4-9.2 43.8z" />
    <path d="M166.9 229c-5.8-6.5-12.7-9.7-20.7-9.7s-14.9 3.2-20.7 9.7c-5.8 6.5-9.9 13.7-12.3 21.7-2.4 8-3.6 15.8-3.6 23.4 0 7.6 1.2 15.4 3.6 23.4 2.4 8 6.5 15.2 12.3 21.7 5.8 6.5 12.7 9.7 20.7 9.7s14.9-3.2 20.7-9.7c5.8-6.5 9.9-13.7 12.3-21.7 2.4-8 3.6-15.8 3.6-23.4 0-7.6-1.2-15.4-3.6-23.4-2.4-8-6.5-15.2-12.3-21.7zm182.7 0c-5.8-6.5-12.7-9.7-20.7-9.7s-14.9 3.2-20.7 9.7c-5.8 6.5-9.9 13.7-12.3 21.7-2.4 8-3.6 15.8-3.6 23.4 0 7.6 1.2 15.4 3.6 23.4 2.4 8 6.5 15.2 12.3 21.7 5.8 6.5 12.7 9.7 20.7 9.7s14.9-3.2 20.7-9.7c5.8-6.5 9.9-13.7 12.3-21.7 2.4-8 3.6-15.8 3.6-23.4 0-7.6-1.2-15.4-3.6-23.4-2.4-8-6.5-15.2-12.3-21.7z" />
  </svg>
);

export const Instagram = () => (
  <svg viewBox="0 0 97.4 97.4" xmlns="https://www.w3.org/2000/svg">
    <path d="M12.5 0h72.4c6.9 0 12.5 5.1 12.5 12.5v72.4c0 7.4-5.6 12.5-12.5 12.5H12.5C5.6 97.4 0 92.3 0 84.9V12.5C0 5.1 5.6 0 12.5 0zm58.4 10.8c-2.4 0-4.4 2-4.4 4.4v10.5c0 2.4 2 4.4 4.4 4.4h11c2.4 0 4.4-2 4.4-4.4V15.2c0-2.4-2-4.4-4.4-4.4h-11zm15.5 30.4h-8.6c.8 2.7 1.3 5.5 1.2 8.4 0 16.2-13.6 29.3-30.3 29.3-16.7 0-30.3-13.1-30.3-29.3 0-2.9.4-5.7 1.2-8.4h-8.9v41.1c0 2.1 1.7 3.9 3.9 3.9h67.8c2.1 0 3.9-1.7 3.9-3.9l.1-41.1zM48.8 29.5c-10.8 0-19.6 8.5-19.6 19s8.8 19 19.6 19 19.6-8.5 19.6-19-8.8-19-19.6-19z" />
  </svg>
);

export const LinkedIn = () => (
  <svg viewBox="0 0 93.1 92.9" xmlns="https://www.w3.org/2000/svg">
    <path d="M11.2 0C5 0 0 5 0 11.2c0 6.2 5 11.2 11.2 11.2 6.2 0 11.2-5 11.2-11.2C22.4 5 17.4 0 11.2 0zM1.5 30.8h19.3v62.1H1.5V30.8zm68.4-1.5c-9.4 0-15.7 5.1-18.2 10h-.3v-8.5H32.9v62.1h19.3V62.2c0-8.1 1.5-15.9 11.6-15.9 9.9 0 10 9.3 10 16.5V93h19.3V59c0-16.8-3.6-29.7-23.2-29.7z" />
  </svg>
);

export const Twitter = () => (
  <svg viewBox="0 0 97.6 79.5" xmlns="https://www.w3.org/2000/svg">
    <path d="M97.5 9.5c-.1-.2-.4-.2-.6-.1-2.9 1.3-6 2.2-9.2 2.8 3.4-2.5 5.9-6 7.1-10 .1-.3-.1-.5-.3-.6h-.4c-3.8 2.2-7.9 3.8-12.2 4.7-3.7-4-9-6.3-14.5-6.3-11.2 0-20.3 9.1-20.3 20.3 0 1.4.1 2.7.4 4-15.5-1-30-8.4-39.9-20.5-.2-.2-.5-.2-.7-.1l-.1.1C5 7 4 10.5 4 14.1c0 6.2 2.8 12 7.6 15.9-2.5-.3-4.9-1.1-7.1-2.3-.2-.1-.5 0-.7.2 0 .1-.1.1-.1.2v.3c0 8.9 5.9 16.8 14.3 19.4-2.2.4-4.5.3-6.8-.1-.3 0-.5.1-.6.4v.2c2.5 7.8 9.5 13.4 17.6 14-6.8 5-14.8 7.6-23.3 7.6-1.6 0-3.1-.1-4.7-.3-.2 0-.4.1-.5.3-.1.2 0 .5.2.6 9.1 5.9 19.8 9 30.7 9 35.6 0 56.9-28.9 56.9-56.9v-2.3c3.8-2.8 7.2-6.3 9.8-10.2.4-.2.4-.5.2-.6z" />
  </svg>
);

const AllSeeingEyeWrap = styled.svg`
  margin: auto;

  #eye {
    animation: ${squeeze} 2.4s infinite;
  }
  #lid {
    animation: ${blink} 2.4s infinite;
  }
`;

export const AllSeeingEye = () => (
  <AllSeeingEyeWrap height="100" version="1.1" viewBox="0 0 30 30" width="100">
    <defs>
      <path
        d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z"
        id="outline"
      />
      <mask id="mask">
        <rect fill="white" height="100%" width="100%" />
        <use fill="black" id="lid" xlinkHref="#outline" />
      </mask>
    </defs>
    <g id="eye">
      <path
        d="M0,15.089434 C0,16.3335929 5.13666091,24.1788679 14.9348958,24.1788679 C24.7325019,24.1788679 29.8697917,16.3335929 29.8697917,15.089434 C29.8697917,13.8456167 24.7325019,6 14.9348958,6 C5.13666091,6 0,13.8456167 0,15.089434 Z M14.9348958,22.081464 C11.2690863,22.081464 8.29688487,18.9510766 8.29688487,15.089434 C8.29688487,11.2277914 11.2690863,8.09740397 14.9348958,8.09740397 C18.6007053,8.09740397 21.5725924,11.2277914 21.5725924,15.089434 C21.5725924,18.9510766 18.6007053,22.081464 14.9348958,22.081464 L14.9348958,22.081464 Z M18.2535869,15.089434 C18.2535869,17.0200844 16.7673289,18.5857907 14.9348958,18.5857907 C13.1018339,18.5857907 11.6162048,17.0200844 11.6162048,15.089434 C11.6162048,13.1587835 13.1018339,11.593419 14.9348958,11.593419 C15.9253152,11.593419 14.3271242,14.3639878 14.9348958,15.089434 C15.451486,15.7055336 18.2535869,14.2027016 18.2535869,15.089434 L18.2535869,15.089434 Z"
        fill="#050505"
      />
      <use fill="#111111" mask="url(#mask)" xlinkHref="#outline" />
    </g>
  </AllSeeingEyeWrap>
);

export const IconGen = ({ codepen, github, twitter, linkedin, instagram }) => {
  if (github) {
    return <GitHub />;
  }
  if (codepen) {
    return <CodePen />;
  }
  if (twitter) {
    return <Twitter />;
  }
  if (linkedin) {
    return <LinkedIn />;
  }
  if (instagram) {
    return <Instagram />;
  }
  return <span />;
};

IconGen.propTypes = {
  codepen: PropTypes.bool,
  github: PropTypes.bool,
  twitter: PropTypes.bool,
  linkedin: PropTypes.bool,
  instagram: PropTypes.bool,
};

IconGen.defaultProps = {
  codepen: false,
  github: false,
  twitter: false,
  linkedin: false,
  instagram: false,
};
