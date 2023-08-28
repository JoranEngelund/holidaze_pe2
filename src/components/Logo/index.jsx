import * as s from "./styled";

/**
 * A component that displays the logo for the Holidaze application.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Logo component.
 */
const Logo = () => {
  return (
    <s.StyledLogo
      onClick={() => {
        window.replace("");
      }}
      src="/assets/logo/logo_alt2.png"
      alt="logo for Holidaze"
      title="Home"
    />
  );
};

export default Logo;
