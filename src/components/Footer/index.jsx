import { Link } from "react-router-dom";
import * as s from "./styled";

/**
 * A component that represents the footer section of the application.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Footer component.
 */
const Footer = () => {
  return (
    <s.Footer>
      <hr />
      <Link to="#">
        Copyright 2023 Engelund Utvikling - All rights reserved
      </Link>
    </s.Footer>
  );
};

export default Footer;
