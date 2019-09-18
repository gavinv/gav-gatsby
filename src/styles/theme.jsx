import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createGlobalStyle, keyframes } from "styled-components"

import "./styles.css";

const float = keyframes`
  0% {
  }
  32% {
    transform: translate(.8rem, 2.4rem) rotate(8deg);
  }
  56% {
    transform: translate(2.4rem, .8rem) rotate(10deg);
  }
  100% {
    transform: translate(0) rotate(0deg);
  }
`

const floatInverse = keyframes`
  0% {
  }
  32% {
    transform: translate(-2.4rem, -.8rem) rotate(-10deg);
  }
  56% {
    transform: translate(-.8rem, -2.4rem) rotate(-8deg);
  }
  100% {
    transform: translate(0) rotate(0deg);
  }
`

export const theme = {};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--dark);
    color: var(--coral);
    height: auto;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: var(--font-family-sans-serif);
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    max-width: 1600px;
    margin: 0 auto;
  }
  .main-content {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 0 auto;
    overflow-x: hidden;
  }

  h1.heading {
    font-family: Lato Black;
    font-size: 4.5rem;
    letter-spacing: -3.2px;
  }
  .sub-heading {
    font-family: Lato;
    font-weight: 500;
    font-size: 2rem;
    letter-spacing: 0.2rem;
    display: grid;
    grid-template: '. .' 1.4fr '. .' 3fr / 3fr 0.8fr;
    align-items: center;
    align-self: safe;
    justify-items: end;
    margin-left: 3rem;
  }
  .sideways {
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    grid-area: 2 / 2;
    justify-self: center;
  }
  .corner-ampersand {
    justify-self: center;
    align-self: center;
    font-weight: 400;
    color: var(--magenta);
    padding: 1.8rem 0 0 0;
  }
  .homepage-navigation {
    display: grid;
    grid-template: '. .' 1fr '. .' 1fr / 1fr 1fr;
    grid-gap: 4rem;
    max-width: 314px;
    font-family: Roboto;
    font-weight: 300;
  }
  .blurredbar {
    display: flex;
    backdrop-filter: blur(16px) brightness(80%) opacity(8);
    background-color: #63636333;
    border-radius: 24px 8px 24px 8px;
    justify-content: space-between;
    padding: 2rem;
  }
  .mainnavigation {
    max-width: 88vw;
    height: 5rem;
    margin: 2rem auto 0;
  }
  .footer {
    max-width: 16vw;
    height: 4rem;
    position: fixed;
    bottom: 2rem;
    right: 5rem;
    padding: 1.6rem;
    border-radius: 8px 24px 8px 24px;
  }
  .homepage-content {
    position: fixed;
    top: 24vh;
    left: 16vw;
  }
  .gavlogo {
    position: fixed;
    top: 24vh;
    right: 16vw;
  }
  .gavlogo-path {
    fill: rgba(0,0,0,0);
    stroke: var(--coral);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-width: 13px;
  }
  .gav-expanded-container {
    height: 40px;
    width: 104px;
    display: inlineFlex;
    align-self: center;
    cursor: pointer;
  }
  .gav-expanded {
    fill: rgba(0,0,0,0);
    stroke: var(--coral);
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
    stroke-width: 3px;
  }
  .pages {
    display: inline-flex;
    align-self: center;
    font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		font-size: .8rem;
		color: var(--coral);
    text-transform: uppercase;
    justify-content: space-between;
  }
  .pages > a {
    padding: 2rem 0 2rem 4rem;
  }
  h1,
  h2,
  h3 {
    margin: 0 auto;
  }
  .blobs-background {
    width: 48vw;
    max-height: 100vw;
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
  }
  .blob-0 {
    animation: ${float} 16s ease-in-out 256ms infinite alternate;
    svg {
      transform: rotate(83deg);
    }
  }
  .blob-1 {
    animation: ${floatInverse} 24s ease-in-out infinite alternate;
    svg {
      transform: rotate(179deg) translate(-8vw, 16vh);
    }
  }
  .blob-2 {
    animation: ${float} 15.6s ease-in-out 512ms infinite alternate;
    svg {
    transform: rotate(80deg) translate(-16em, -32rem);
    }
  }


`;

export default function Theme(props) {
  return (
    <>
      <GlobalStyle darkmode />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  );
}

Theme.propTypes = {
  children: PropTypes.node
};