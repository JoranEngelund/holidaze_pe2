import * as s from "./styled";
import Media from "./media";
import OwnerDetails from "./details";
import Meta from "./meta";
import Description from "./description";
import Booking from "./booking";

/**
 * Venue Component
 *
 * This component represents a venue page that displays various details about a venue.
 * It includes media content, venue owner information, a description of the venue, a booking component,
 * and meta information about venue amenities.
 *
 * @component
 * @example
 * // Example usage of Venue component
 * <Venue />
 *
 * @returns {JSX.Element} The JSX element representing the Venue component.
 */
const Venue = () => {
  return (
    <s.ContentWrapper>
      <Media />
      <s.VenueDetailsWrapper>
        <s.VenueDetails>
          <OwnerDetails />
          <hr />
          <Description />
          <s.VenueMetaWrapper>
            <Meta />
          </s.VenueMetaWrapper>
        </s.VenueDetails>
        <Booking />
      </s.VenueDetailsWrapper>
    </s.ContentWrapper>
  );
};

export default Venue;
