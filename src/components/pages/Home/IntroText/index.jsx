import * as s from "./styled";

/**
 * A component that displays introductory text describing the Holidaze platform.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the IntroText component.
 */
const IntroText = () => {
  return (
    <s.Container>
      <s.IntroParagraph>
        <span>Discover limitless possibilities with Holidaze.</span> Whether
        you're a family craving fun, couples seeking romance, adventurers
        chasing thrills, or business travelers needing comfort, our platform
        caters to all. Join us for unforgettable getaways, from pet-friendly
        escapes to quick weekend retreats.{" "}
        <span>Your Holidaze starts now.</span>
      </s.IntroParagraph>
    </s.Container>
  );
};

export default IntroText;
