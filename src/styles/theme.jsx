import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import 'typeface-lato'

import './font.css'
import "./styles.css"

export const theme = {
  
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: var(--dark);
    color: var(--coral);
    height: auto;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  * {
    font-family: 'Recursive', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    max-width: 1600px;
    margin: 0 auto;
  }
  .main-content {
    max-width: 88vw;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    grid-gap: 1em;
    grid-template-rows: 1fr;
    align-items: center;
    &.col-1 {
      grid-template-columns: repeat(1, 1fr);
    }
    &.col-2 {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  section.main {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    justify-items: start;
    margin: 1rem auto;
    padding-top: 1rem;
  }

  h1.heading {
    font-family: 'Lato Black', sans-serif;
    font-weight: 900;
    font-size: 4.5rem;
    letter-spacing: -3.2px;
  }
  .sub-heading {
    font-size: 2rem;
    letter-spacing: 0.2rem;
    display: grid;
    grid-template: '. .' 1fr '. .' 3fr / 4fr 1fr;
    align-items: center;
    align-self: safe;
    justify-items: end;
    margin-left: 3rem;
    font-variation-settings: 
      "MONO" 1,
      "CASL" 0,
      "slnt" 0,
      "ital" 0;
  }
  .sideways {
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    grid-area: 2 / 2;
    justify-self: center;
    font-weight: 564;
    font-variation-settings:
      "MONO" 0,
      "CASL" 1,
      "slnt" -8,
      "ital" 1;
  }
  .corner-ampersand {
    justify-self: center;
    align-self: center;
    font-weight: 564;
    color: var(--magenta);
    font-variation-settings:
      "MONO" 0,
      "CASL" .64,
      "slnt" -15,
      "ital" 1;
  }
  .homepage-navigation {
    display: grid;
    grid-template: '. .' 1fr '. .' 1fr / 1fr 1fr;
    grid-gap: 4rem;
    max-width: 314px;
    font-family: Roboto;
    font-weight: 300;
  }
  .blurred {
    display: flex;
    background-color: #63636333;
    border-radius: 24px 8px 24px 8px;
    justify-content: space-between;
    padding: 2rem;
    backdrop-filter: blur(8px) brightness(80%);
  }
  .menu-item, a {
    color: var(--coral);
    text-decoration: none;
  }
  .mainnavigation {
    max-width: 88vw;
    height: 5rem;
    margin: 2rem auto 0;
    @media screen and (max-width: 640px) {
      max-width: 16vw;
      height: 16vw;
      margin: 2rem auto 0;
      position: fixed;
      bottom: 4vh;
      right: 4vw;
      .gav-expanded-container,
      .pages {
        visibility: hidden;
      }
    }
  }
  .footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    align-items: center;
    justify-items: center;
    height: 4rem;
    position: fixed;
    bottom: 4vh;
    padding: 1.4rem;
    border-radius: 8px 24px 8px 24px;
    > .menu-item:hover {
      border-bottom: 1px dotted #fac9ce;
    }
    @media screen and (min-width: 640px) {
      right: 4vw;
    }
    @media screen and (max-width: 640px) {
      left: 4vw;
    }
  }
  .homepage-content {
    max-height: 32vw;
    max-width: 48vw;
    position: relative;
    margin: 1rem auto;
  }
  .gavlogo {
    max-height: 40vw;
    max-width: 48vw;
    position: relative;
    margin: 1rem auto;
    @media screen and (max-width: 640px) {
      position: fixed;
      bottom: 5.5vh;
      right: 6.5vw;
      height: 7.2vh;
      width: 7.2vh;
      margin: 0 auto;
    }
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
    path {
      fill: rgba(0,0,0,0);
      stroke: var(--coral);
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
      stroke-width: 3px;
    }
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
  p {
    margin-bottom: 1rem;
  }
`

export default function Theme(props) {
  return (
    <>
      <GlobalStyle darkmode />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </>
  )
}

Theme.propTypes = {
  children: PropTypes.node,
}
