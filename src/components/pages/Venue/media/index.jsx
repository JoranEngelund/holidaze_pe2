import * as s from "../styled";
import { venueImagePlaceholder } from "../../../../placeholders/imageplaceholders";
import useSetup from "../setup/index.mjs";
import Carousel from "react-bootstrap/Carousel";

/**
 * Media Component
 *
 * This component displays media content related to a venue, including its location
 * and images in a carousel format.
 *
 * @component
 * @example
 * // Example usage of Media component
 * <Media />
 *
 * @returns {JSX.Element} The JSX element representing the Media component.
 */
const Media = () => {
  const { data } = useSetup();
  const { location, media, name } = data;

  return (
    <div>
      <s.Location>
        {location && location.address
          ? location.address
          : "Unspecified Address,"}
        {location && location.city
          ? `, ${location.city}`
          : " Unspecified City,"}
        {location && location.country
          ? `, ${location.country}`
          : " Unspecified Country"}
      </s.Location>

      {media && media.length > 0 ? (
        <Carousel>
          {media.map((image, index) => (
            <Carousel.Item key={index}>
              <s.CarouselMedia src={image} alt={name} title={name} />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <img src={venueImagePlaceholder} />
      )}
    </div>
  );
};

export default Media;
