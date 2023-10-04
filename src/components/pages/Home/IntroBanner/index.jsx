import Search from "../Search";
import * as s from "./styled";

/**
 * A component that displays an introductory banner with a slogan and a search field.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the IntroBanner component.
 */
const IntroBanner = () => {
  return (
    <s.Banner>
      <s.Slogan>Where every stay becomes a Holidaze</s.Slogan>
      <Search />
    </s.Banner>
  );
};

export default IntroBanner;
