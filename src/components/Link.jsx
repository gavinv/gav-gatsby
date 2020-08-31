import { Link } from "@reach/router";
import styled from "styled-components";

export default styled(Link)`
  color: ${props => (props.color ? props.color : "var(--coral)")};
  text-decoration: underline 1px dotted;
  cursor: not-allowed;
  opacity: 0.32;
  transition: all 256ms;
  ${props => !props.disabled && `
    cursor: pointer;
    opacity: 1;
    transition: 256;
    :hover {
      font-weight: 720;
      font-variation-settings: 'CASL' 1;
    }
    > * {
      transition: all 256ms;
    }
  `}
`;
