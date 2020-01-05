import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    border: 0;
    font: inherit;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: scrollbar;
    box-sizing: border-box;
    font-size: 62.5%;
    line-height: 1.15;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    color: #333333;
    font-family: "Open Sans", sans-serif;
    font-size: 1.6em;
    font-weight: 400;
    line-height: 1.5;
  }

  main {
    display: block;
  }

  a {
    background-color: transparent;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Oswald, sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    text-transform: uppercase;
  }

  ol,
  ul {
    list-style: none;
  }
`;

export default GlobalStyles;
