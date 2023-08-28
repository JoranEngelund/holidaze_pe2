import useApi from "../../../../hooks/useApi";
import { venueImagePlaceholder } from "../../../../placeholders/imageplaceholders";
import * as s from "./styled";
import { AllVenues_URL } from "../../../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPaw,
  faCar,
  faWifi,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";

/**
 * A component that displays a list of venues, including their details and images.
 * It fetches venue data from an API using the `useApi` hook.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the AllVenues component.
 */
const AllVenues = () => {
  const { data, isLoading, isError } = useApi(AllVenues_URL);
  console.log(data);
  console.log(venueImagePlaceholder);

  return (
    <s.VenuesContainer>
      <s.VenueHeading>Ready to Explore?</s.VenueHeading>
      {data.map((listing) => (
        <s.Card to={`/venue/${listing.id}`} key={listing.id} id={listing.id}>
          {listing.media.length <= 0 ? (
            <s.VenueImage
              src={venueImagePlaceholder}
              alt="Placeholder image"
              title="No image was found"
            />
          ) : (
            <s.VenueImage
              src={listing.media[0]}
              alt={listing.name}
              title={listing.name}
            />
          )}
          <s.HoverOverlay className="hoverOverlay">
            <s.ViewText>View</s.ViewText>
          </s.HoverOverlay>
          <s.TitleRating>
            <s.VenueTitle>{listing.name}</s.VenueTitle>
            <s.Rating>
              <FontAwesomeIcon icon={faStar} />
              {listing.rating}{" "}
            </s.Rating>
          </s.TitleRating>
          <div>
            <s.VenueLocation>{listing.location.city}</s.VenueLocation>
          </div>
          <s.Details>
            <s.VenuePrice>{listing.price} ,-</s.VenuePrice>
            <s.Meta>
              {listing.meta.wifi ? (
                <FontAwesomeIcon icon={faWifi} title="WiFi Included" />
              ) : (
                ""
              )}
              {listing.meta.parking ? (
                <FontAwesomeIcon icon={faCar} title="Parking Included" />
              ) : (
                ""
              )}
              {listing.meta.breakfast ? (
                <FontAwesomeIcon
                  icon={faMugSaucer}
                  title="Breakfast Included"
                />
              ) : (
                ""
              )}
              {listing.meta.pets ? (
                <FontAwesomeIcon icon={faPaw} title="Pets Allowed" />
              ) : (
                ""
              )}
            </s.Meta>
          </s.Details>
        </s.Card>
      ))}
    </s.VenuesContainer>
  );
};

export default AllVenues;
