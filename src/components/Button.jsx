import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: ${props => (props.bg ? props.bg : "var(--coral)")};
  color: ${props => (props.fg ? props.fg : "var(--beige)")};
  font-size: ${props => (props.fontSize ? props.fontSize : "1.2rem")};
  filter: ${props =>
    props.fx ? props.fx : "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161))"};
  border: ${props => (props.border ? props.border : "none")};
  border-radius: ${props => (props.rad ? props.rad : "8px 24px 24px 24px")};
  height: ${props => (props.height ? props.height : "4rem")};
  width: ${props => (props.width ? props.width : "8rem")};
  cursor: pointer;
`;

export default function Button(props) {
  return (
    <>
      <Btn name={props.label} {...props}>
        {props.label}
      </Btn>
    </>
  );
}
