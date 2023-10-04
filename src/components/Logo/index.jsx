import * as s from "./styled";
import logoImage from "../../assets/logo/logo_alt2.png";

/**
 * A component that displays the logo for the Holidaze application.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Logo component.
 */
const Logo = () => {
  const redirectToIndex = () => {
    window.location.href = "/";
  };

  return (
    <s.StyledLogo
      onClick={redirectToIndex}
      src={logoImage}
      alt="logo for Holidaze"
      title="Home"
    />
  );
};

export default Logo;
