import { useState, useEffect } from "react";
import { Loader } from "../../../Loader";
import useStorage from "../../../../hooks/useStorage";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import * as s from "../styled";
import "react-tabs/style/react-tabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faPaw,
  faCar,
  faWifi,
  faMugSaucer,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

/**
 * Functional component for displaying user's venues, trips, and reservations in tabs.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object[]} props.data - User data containing venue manager details.
 * @param {Object[]} props.bookings - User's upcoming bookings data.
 * @param {Object[]} props.venues - User's hosted venues data.
 * @param {Object[]} props.bookingData - All user's booking data.
 * @param {boolean} props.loading - Indicates whether data is still loading.
 * @param {boolean} props.error - Indicates whether an error occurred while loading data.
 * @param {Object[]} props.venueData - User's hosted venue data.
 * @param {boolean} props.venueLoader - Indicates whether venue data is still loading.
 * @param {boolean} props.venueError - Indicates whether an error occurred while loading venue data.
 * @returns {JSX.Element} - Returns JSX elements to display user's venues, trips, and reservations in tabs.
 */
const TabsComp = ({
  data,
  bookings,
  venues,
  bookingData,
  loading,
  error,
  venueData,
  venueLoader,
  venueError,
}) => {
  const [displayCount, setDisplayCount] = useState(2);
  const maxDisplayCount = bookingData?.length;
  const currentDate = new Date();
  const upcomingBookings = bookingData.filter(
    (booking) => new Date(booking.dateTo) > currentDate
  );

  const { load } = useStorage();
  const user = load("user");
  const userName = user ? user.name : "";

  const displayedBookings = upcomingBookings.slice(0, displayCount);

  useEffect(() => {
    setDisplayCount(Math.min(upcomingBookings.length, 2));
  }, [upcomingBookings.length]);

  const handleShowMore = () => {
    setDisplayCount(Math.min(displayCount + 2, maxDisplayCount));
  };

  const handleShowLess = () => {
    setDisplayCount(Math.max(displayCount - 2, 2));
  };

  const [displayVenueCount, setDisplayVenueCount] = useState(2);
  const maxDisplayVenueCount = venueData?.length;

  useEffect(() => {
    if (maxDisplayVenueCount) {
      setDisplayVenueCount(Math.min(displayVenueCount, maxDisplayVenueCount));
    }
  }, [maxDisplayVenueCount]);

  const displayedVenues = venueData?.slice(0, displayVenueCount) || [];

  const handleShowMoreVenues = () => {
    setDisplayVenueCount(Math.min(displayVenueCount + 2, maxDisplayVenueCount));
  };

  const handleShowLessVenues = () => {
    setDisplayVenueCount(Math.max(displayVenueCount - 2, 2));
  };
  return (
    <s.DataWrapper>
      {data?.venueManager ? (
        <Tabs>
          <TabList>
            <Tab>Your Venues</Tab>
            <Tab>Your Trips</Tab>
            <Tab>Reservations</Tab>
          </TabList>
          <TabPanel>
            <h2>Your Venues</h2>
            {!(venueData?.length > 0) ? (
              <>
                <p>You're not hosting any venues yet</p>
                <hr />
                <s.Button
                  onClick={() =>
                    window.location.replace(
                      `${data?.name}/venue-manager-settings`
                    )
                  }
                >
                  Start hosting
                </s.Button>
              </>
            ) : (
              <>
                <p>
                  Displaying {displayVenueCount} of your {venueData?.length}{" "}
                  hosted venues
                </p>
                {displayVenueCount === (venueData?.length || 0) ? (
                  ""
                ) : (
                  <s.Button onClick={handleShowMoreVenues}>
                    Show more <FontAwesomeIcon icon={faPlus} />
                  </s.Button>
                )}
                {displayVenueCount <= 2 ? (
                  ""
                ) : (
                  <s.Button onClick={handleShowLessVenues}>
                    Show less <FontAwesomeIcon icon={faMinus} />
                  </s.Button>
                )}
                <hr />
                <s.VenuesContainer>
                  {venueLoader ? <Loader /> : ""}
                  {venueError ? <h2>Error Occurred</h2> : ""}
                  {displayedVenues.map(
                    (hosted, index) =>
                      hosted && (
                        <s.Card
                          to={`/profile/${userName}/venue-settings/${hosted.id}`}
                          key={`${hosted.id}-${index}`}
                          id={hosted.id}
                        >
                          {hosted?.media?.length <= 0 ? (
                            <s.VenueImage
                              src={venueImagePlaceholder}
                              alt="Placeholder image"
                              title="No image was found"
                            />
                          ) : (
                            <s.VenueImage
                              src={hosted?.media[0]}
                              alt={hosted?.name}
                              title={hosted?.name}
                            />
                          )}
                          <s.HoverOverlay className="hoverOverlay">
                            <s.ViewText>EDIT</s.ViewText>
                          </s.HoverOverlay>
                          <s.TitleRating>
                            <s.VenueTitle>{hosted?.name}</s.VenueTitle>
                            <s.Rating>
                              <FontAwesomeIcon icon={faStar} />
                              {hosted?.rating}{" "}
                            </s.Rating>
                          </s.TitleRating>
                          <div>
                            <s.VenueLocation>
                              {hosted?.location.city}
                            </s.VenueLocation>
                          </div>
                          <s.Details>
                            <s.VenuePrice>{hosted?.price} ,-</s.VenuePrice>
                            <s.Meta>
                              {hosted?.meta.wifi ? (
                                <FontAwesomeIcon
                                  icon={faWifi}
                                  title="WiFi Included"
                                />
                              ) : (
                                ""
                              )}
                              {hosted?.meta.parking ? (
                                <FontAwesomeIcon
                                  icon={faCar}
                                  title="Parking Included"
                                />
                              ) : (
                                ""
                              )}
                              {hosted?.meta.breakfast ? (
                                <FontAwesomeIcon
                                  icon={faMugSaucer}
                                  title="Breakfast Included"
                                />
                              ) : (
                                ""
                              )}
                              {hosted?.meta.pets ? (
                                <FontAwesomeIcon
                                  icon={faPaw}
                                  title="Pets Allowed"
                                />
                              ) : (
                                ""
                              )}
                            </s.Meta>
                          </s.Details>
                        </s.Card>
                      )
                  )}
                </s.VenuesContainer>
              </>
            )}
          </TabPanel>
          <TabPanel>
            <h2>Your Trips</h2>
            {bookingData?.length <= 0 ? (
              <>
                <p>You have no upcoming trips</p>
                <hr />
                <s.Button onClick={() => window.location.replace("/")}>
                  Explore Venues
                </s.Button>
              </>
            ) : (
              <>
                <p>
                  Displaying your {displayCount} next upcoming trips to date
                </p>
                {displayCount === bookings?.length ? (
                  ""
                ) : (
                  <s.Button onClick={handleShowMore}>
                    Show more <FontAwesomeIcon icon={faPlus} />
                  </s.Button>
                )}
                {displayCount <= 3 ? (
                  ""
                ) : (
                  <s.Button onClick={handleShowLess}>
                    Show less <FontAwesomeIcon icon={faMinus} />
                  </s.Button>
                )}
                <hr />
                <s.VenuesContainer>
                  {loading ? <Loader /> : ""}
                  {error ? <h2>Error Occurred</h2> : ""}
                  {displayedBookings.map((trip, index) => (
                    <s.Card
                      to={`/venue/${trip?.venue.id}`}
                      key={`${trip?.venue.id}-${index}`}
                      id={trip?.venue.id}
                    >
                      {trip?.media?.length <= 0 ? (
                        <s.VenueImage
                          src={venueImagePlaceholder}
                          alt="Placeholder image"
                          title="No image was found"
                        />
                      ) : (
                        <s.VenueImage
                          src={trip?.venue.media[0]}
                          alt={trip?.venue.name}
                          title={trip?.venue.name}
                        />
                      )}
                      <s.HoverOverlay className="hoverOverlay">
                        <s.ViewText>View</s.ViewText>
                      </s.HoverOverlay>
                      <s.TitleRating>
                        <s.VenueTitle>{trip?.venue.name}</s.VenueTitle>
                        <s.Rating>
                          <FontAwesomeIcon icon={faStar} />
                          {trip?.venue.rating}{" "}
                        </s.Rating>
                      </s.TitleRating>
                      <div>
                        <s.VenueLocation>
                          {trip?.venue.location.city}
                        </s.VenueLocation>
                      </div>
                      <s.DetailsReservation>
                        <s.VenuePrice>
                          Check-In:{" "}
                          {new Date(trip.dateFrom).toLocaleDateString()}
                        </s.VenuePrice>
                        <s.VenuePrice>
                          Check-Out:{" "}
                          {new Date(trip.dateTo).toLocaleDateString()}
                        </s.VenuePrice>
                      </s.DetailsReservation>
                    </s.Card>
                  ))}
                </s.VenuesContainer>
              </>
            )}
          </TabPanel>
          <TabPanel>
            <h2>Reservations</h2>
            {venueData?.length > 0 ? (
              venueData.map((venue, venueIndex) => (
                <s.ReservationWrapper key={venue.id}>
                  <hr />
                  <s.ReservationHeading
                    onClick={() =>
                      window.location.replace(`/venue/${venue.id}`)
                    }
                  >
                    {venue.name}{" "}
                  </s.ReservationHeading>
                  {venue.bookings.length > 0 ? (
                    <s.ReservationNumber>
                      {venue.bookings.length} reservations
                    </s.ReservationNumber>
                  ) : (
                    ""
                  )}
                  {venue.bookings.length > 0 ? (
                    <s.Table>
                      <thead>
                        <tr>
                          <th>Created</th>
                          <th>Date From</th>
                          <th>Date To</th>
                          <th>Guests</th>
                          <th>Updated</th>
                        </tr>
                      </thead>
                      <tbody>
                        {venue.bookings.map((reservation, reservationIndex) => (
                          <s.HoveredTR
                            title={venue.name}
                            key={reservation.id}
                            onClick={() =>
                              window.location.replace(`/venue/${venue.id}`)
                            }
                          >
                            <td>
                              {new Date(
                                reservation.created
                              ).toLocaleDateString()}
                            </td>
                            <td>
                              {new Date(
                                reservation.dateFrom
                              ).toLocaleDateString()}
                            </td>
                            <td>
                              {new Date(
                                reservation.dateTo
                              ).toLocaleDateString()}
                            </td>
                            <td>{reservation.guests}</td>
                            <td>
                              {new Date(
                                reservation.updated
                              ).toLocaleDateString()}
                            </td>
                          </s.HoveredTR>
                        ))}
                      </tbody>
                    </s.Table>
                  ) : (
                    <p>No reservations for this venue yet.</p>
                  )}
                </s.ReservationWrapper>
              ))
            ) : (
              <p>No venues available.</p>
            )}
          </TabPanel>
        </Tabs>
      ) : (
        <Tabs>
          <TabList>
            <Tab>Your Trips</Tab>
          </TabList>
          <TabPanel>
            <h2>Your Trips</h2>
            {bookingData?.length <= 0 ? (
              <>
                <p>You have no upcoming trips</p>
                <hr />
                <s.Button onClick={() => window.location.replace("/")}>
                  Explore Venues
                </s.Button>
              </>
            ) : (
              <>
                <p>
                  Displaying your {displayCount} next upcoming bookings to date
                </p>
                {displayCount === bookings?.length ? (
                  ""
                ) : (
                  <s.Button onClick={handleShowMore}>
                    Show more <FontAwesomeIcon icon={faPlus} />
                  </s.Button>
                )}
                {displayCount <= 3 ? (
                  ""
                ) : (
                  <s.Button onClick={handleShowLess}>
                    Show less <FontAwesomeIcon icon={faMinus} />
                  </s.Button>
                )}
                <hr />
                <s.VenuesContainer>
                  {displayedBookings.map((trip, index) => (
                    <s.Card
                      to={`/venue/${trip?.venue.id}`}
                      key={`${trip?.venue.id}-${index}`}
                      id={trip?.venue.id}
                    >
                      {trip?.media?.length <= 0 ? (
                        <s.VenueImage
                          src={venueImagePlaceholder}
                          alt="Placeholder image"
                          title="No image was found"
                        />
                      ) : (
                        <s.VenueImage
                          src={trip?.venue.media[0]}
                          alt={trip?.venue.name}
                          title={trip?.venue.name}
                        />
                      )}
                      <s.HoverOverlay className="hoverOverlay">
                        <s.ViewText>View</s.ViewText>
                      </s.HoverOverlay>
                      <s.TitleRating>
                        <s.VenueTitle>{trip?.venue.name}</s.VenueTitle>
                        <s.Rating>
                          <FontAwesomeIcon icon={faStar} />
                          {trip?.venue.rating}{" "}
                        </s.Rating>
                      </s.TitleRating>
                      <div>
                        <s.VenueLocation>
                          {trip?.venue.location.city}
                        </s.VenueLocation>
                      </div>
                      <s.Details>
                        <s.VenuePrice>{trip?.venue.price} ,-</s.VenuePrice>
                        <s.Meta>
                          {trip?.venue.meta.wifi ? (
                            <FontAwesomeIcon
                              icon={faWifi}
                              title="WiFi Included"
                            />
                          ) : (
                            ""
                          )}
                          {trip?.venue.meta.parking ? (
                            <FontAwesomeIcon
                              icon={faCar}
                              title="Parking Included"
                            />
                          ) : (
                            ""
                          )}
                          {trip?.venue.meta.breakfast ? (
                            <FontAwesomeIcon
                              icon={faMugSaucer}
                              title="Breakfast Included"
                            />
                          ) : (
                            ""
                          )}
                          {trip?.venue.meta.pets ? (
                            <FontAwesomeIcon
                              icon={faPaw}
                              title="Pets Allowed"
                            />
                          ) : (
                            ""
                          )}
                        </s.Meta>
                      </s.Details>
                    </s.Card>
                  ))}
                </s.VenuesContainer>
              </>
            )}
          </TabPanel>
        </Tabs>
      )}
    </s.DataWrapper>
  );
};

export default TabsComp;
