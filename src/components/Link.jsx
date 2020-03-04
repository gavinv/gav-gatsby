import { Link } from "@reach/router";
import styled from "styled-components";

export default styled(Link)`
  color: ${props => (props.color ? props.color : "var(--coral)")};
  text-decoration: underline 1px dotted;
`;
