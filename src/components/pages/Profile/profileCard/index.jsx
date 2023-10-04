import { avatarPlaceholder } from "../../../../placeholders/imageplaceholders";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import * as s from "../styled";
import { ErrorWrapper } from "../../CreateVenue/styled";

/**
 * Displays user profile information in a card.
 * @param {Object} data - User profile data.
 * @param {string} data.name - User's name.
 * @param {string} data.avatar - User's avatar image URL.
 * @param {boolean} data.venueManager - Indicates if the user is a venue manager.
 * @param {number} trips - Number of trips.
 * @param {number} venues - Number of venues hosted (only if the user is a venue manager).
 * @returns {JSX.Element} The rendered profile card.
 * @description This component displays user profile information, including
 * their name, avatar, and role (venue manager or guest), along with trip and venue counts.
 */
const ProfileCard = ({ isError, data, trips, venues }) => {
  return (
    <s.UserWrapper>
      {isError ? (
        <ErrorWrapper>
          <p>Oops! There was an issue processing your booking request.</p>
          <p>Please refresh and try again, or try at a later time</p>
          <s.StyledLink onClick={window.location.reload}>Refresh</s.StyledLink>
        </ErrorWrapper>
      ) : (
        ""
      )}
      <s.UserDetails>
        {data?.avatar <= 0 ? (
          <s.Avatar
            src={avatarPlaceholder}
            alt={data?.name}
            title={data?.name}
          />
        ) : (
          <s.Avatar src={data?.avatar} alt={data?.name} title={data?.name} />
        )}
        <s.UserName>{data?.name}</s.UserName>
        {data?.venueManager ? (
          <s.ManagerTitle>
            <s.StyledFontAwesomeIcon icon={faCircleCheck} /> Venue Manager
          </s.ManagerTitle>
        ) : (
          <p>Guest</p>
        )}
      </s.UserDetails>
      <div>
        {data?.venueManager ? (
          <s.BookingCounts>
            <p>Trips: {trips}</p>
            <hr />
            <p>Venues: {venues}</p>
          </s.BookingCounts>
        ) : (
          <s.BookingCounts>
            <p>Trips: {trips}</p>
          </s.BookingCounts>
        )}
      </div>
    </s.UserWrapper>
  );
};

export default ProfileCard;
