import React from "react"
import styled from "styled-components"

export const BaseButton = styled.button`
  cursor: pointer;
  border: none;
  height: 3.2rem;
  width: 7.2rem;
  background-color: ${props => (props.bg ? props.bg : "var(--coral)")};
  border-radius: ${props => (props.rad ? props.rad : "8px 24px 24px 24px")};
  color: ${props => (props.fg ? props.fg : "var(--beige)")};
  font-size: ${props => (props.fontSize ? props.fontSize : "1.2rem")};
  font-weight: 480;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  :hover,
  :focus {
    font-weight: 720;
    filter: brightness(112%);
    font-variation-settings:
      "CASL" 1,
      "slnt" -1.6,
      "ital" 0;
  }
  transition: all 256ms ease;
  ${(props) => props.disabled && `opacity: 0.25; cursor: not-allowed;`}
`

export default function Button(props) {
  return (
    <>
      <BaseButton name={props.label} {...props}>
        {props.label}
      </BaseButton>
    </>
  )
}
