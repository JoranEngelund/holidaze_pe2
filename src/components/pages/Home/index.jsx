import IntroBanner from "./IntroBanner";
import IntroText from "./IntroText";
import AllVenues from "./Venues";

/**
 * A component that represents the home page of the application.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Home component.
 */
const Home = () => {
  return (
    <>
      <IntroBanner />
      <IntroText />
      <AllVenues />
    </>
  );
};

export default Home;
