import useSetup from "../setup/index.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faCar,
  faWifi,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";
import * as s from "../styled";

/**
 * Meta Component
 *
 * This component displays meta information about a venue, including its available amenities.
 *
 * @component
 * @example
 * // Example usage of Meta component
 * <Meta />
 *
 * @returns {JSX.Element} The JSX element representing the Meta component.
 */
const Meta = () => {
  const { data } = useSetup();
  const { meta } = data;

  return (
    <>
      <s.VenueMetaTitle>This Venue Offers</s.VenueMetaTitle>
      <s.MetaWrapperFirstRow>
        {meta?.wifi ? (
          <s.Meta>
            <FontAwesomeIcon icon={faWifi} /> <p>Wi-Fi</p>
          </s.Meta>
        ) : (
          <s.UnavailableMeta>
            <FontAwesomeIcon className="UnAvailable" icon={faWifi} />{" "}
            <p>Wi-Fi</p>
          </s.UnavailableMeta>
        )}
        {meta?.breakfast ? (
          <s.Meta>
            <FontAwesomeIcon icon={faMugSaucer} /> <p>Breakfast</p>
          </s.Meta>
        ) : (
          <s.UnavailableMeta>
            <FontAwesomeIcon className="UnAvailable" icon={faMugSaucer} />{" "}
            <p>Breakfast</p>
          </s.UnavailableMeta>
        )}
        {meta?.parking ? (
          <s.Meta>
            <FontAwesomeIcon icon={faCar} /> <p>Parking</p>
          </s.Meta>
        ) : (
          <s.UnavailableMeta>
            <FontAwesomeIcon className="UnAvailable" icon={faCar} />{" "}
            <p>Parking</p>
          </s.UnavailableMeta>
        )}
        {meta?.pets ? (
          <s.Meta>
            <FontAwesomeIcon icon={faPaw} /> <p>Furry Friends Allowed</p>
          </s.Meta>
        ) : (
          <s.UnavailableMeta>
            <FontAwesomeIcon className="UnAvailable" icon={faPaw} />{" "}
            <p>Furry Friends Allowed</p>
          </s.UnavailableMeta>
        )}
      </s.MetaWrapperFirstRow>
      <hr />
    </>
  );
};

export default Meta;
