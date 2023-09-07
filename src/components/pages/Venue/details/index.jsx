import useSetup from "../setup/index.mjs";
import * as s from "../styled";
import { avatarPlaceholder } from "../../../../placeholders/imageplaceholders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

/**
 * OwnerDetails Component
 *
 * This component displays information about the owner of a venue,
 * including the owner's name, venue manager information, and maximum guest capacity.
 *
 * @component
 * @example
 * // Example usage of OwnerDetails component
 * <OwnerDetails />
 *
 * @returns {JSX.Element} The JSX element representing the OwnerDetails component.
 */
const OwnerDetails = () => {
  const { data } = useSetup();
  const { maxGuests, name, owner } = data;

  return (
    <s.VenueDetailsOwner>
      <s.OwnerInformation>
        <h1>{name}</h1>
        <s.ManagerInformation>
          Your Venue Manager, {owner?.name}
        </s.ManagerInformation>
        <s.Guests>
          <FontAwesomeIcon icon={faUserGroup} />
          <p>{maxGuests} guests</p>
        </s.Guests>
      </s.OwnerInformation>
      <s.OwnerAvatarWrapper>
        {owner?.avatar <= 0 ? (
          <s.OwnerAvatar
            src={avatarPlaceholder}
            alt={owner?.name}
            title={owner?.name}
          />
        ) : (
          <s.OwnerAvatar
            src={owner?.avatar}
            alt={owner?.name}
            title={owner?.name}
          />
        )}
      </s.OwnerAvatarWrapper>
    </s.VenueDetailsOwner>
  );
};

export default OwnerDetails;
