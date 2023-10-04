import * as s from "./styled";
import useApi from "../../../../hooks/useApi";
import { allVenues_URL } from "../../../../constants";
import { useState } from "react";
import { venueImagePlaceholder } from "../../../../placeholders/imageplaceholders";
import { FormLoader } from "../../../Loader";

/**
 * Functional component representing a search form for finding venues.
 * @component
 * @example
 * // Usage in a parent component
 * import { Search } from './Search';
 * // ...
 * <Search />
 */
export const Search = () => {
  const { data, isError } = useApi(allVenues_URL);

  console.log(data);
  const [searchQuery, setSearchQuery] = useState("");

  const inputQuery = (e) => {
    const inputValue = e.target.value;
    setSearchQuery(inputValue);
  };

  const filteredQuery = data.filter((venues) => {
    const venueName = venues.location.country?.trim().toLowerCase();
    const searchQueryToLowerCase = searchQuery.toLowerCase();
    console.log(venueName);

    return venueName?.includes(searchQueryToLowerCase) && searchQuery !== "";
  });

  return (
    <form>
      <s.SearchField
        type="search"
        name="search"
        value={searchQuery}
        onChange={inputQuery}
        autoFocus={false}
        placeholder="Find Your Destination"
      />
      {filteredQuery.length > 0 && (
        <s.ResultContainer>
          {isError ? (
            <p>There seems to be an error in our search engine</p>
          ) : (
            ""
          )}
          {filteredQuery.map((venue) => (
            <s.QueryResult
              to={`/venue/${venue?.id}`}
              key={venue.id}
              id={venue.id}
            >
              {venue?.media.length <= 0 ? (
                <s.QueryThumbnail
                  src={venueImagePlaceholder}
                  alt="Placeholder image"
                  title="No image was found"
                />
              ) : (
                <s.QueryThumbnail
                  src={venue?.media[0]}
                  alt={venue?.name}
                  title={venue?.name}
                />
              )}
              <div>
                <p>{venue?.name}</p>
                <p>{venue?.location.country}</p>
              </div>
            </s.QueryResult>
          ))}
        </s.ResultContainer>
      )}
    </form>
  );
};

export default Search;
