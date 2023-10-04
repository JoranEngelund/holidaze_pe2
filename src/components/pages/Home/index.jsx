import IntroBanner from "./IntroBanner";
import IntroText from "./IntroText";
import AllVenues from "./Venues";
import { Loader } from "../../Loader";
import useApi from "../../../hooks/useApi";
import { allVenues_URL } from "../../../constants";
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
