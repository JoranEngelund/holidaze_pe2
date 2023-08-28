import Logo from "../Logo";
import Navigation from "../Nav";
import * as s from "./styled";

/**
 * A component that represents the header section of the application.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Header component.
 */
const Header = () => {
  return (
    <s.Header>
      <Navigation />
    </s.Header>
  );
};

export default Header;
