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
      <form>
        <s.SearchField
          type="search"
          name="search"
          placeholder="Find Your Destination"
        />
      </form>
    </s.Banner>
  );
};

export default IntroBanner;
