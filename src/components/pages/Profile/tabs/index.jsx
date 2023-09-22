import { useState, useEffect } from "react";
import { Loader } from "../../../Loader";
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
 * The TabsComp component displays tabs for user bookings and related information.
 * @param {Object} props - The component's input props.
 * @param {Object} props.data - User data.
 * @param {Object[]} props.bookings - User bookings data.
 * @param {Object[]} props.venues - User venue data.
 * @param {Object[]} props.bookingData - User booking details.
 * @param {boolean} props.loading - Indicates if data is being loaded.
 * @param {boolean} props.error - Indicates if an error occurred during data fetching.
 * @returns {JSX.Element} A rendered TabsComp component.
 * @description This component manages the display of tabs for user bookings, venue hosting,
 * and reservation information. It allows users to view and interact with their bookings
 * and related data.
 */
const TabsComp = ({ data, bookings, venues, bookingData, loading, error }) => {
  const [displayCount, setDisplayCount] = useState(2);
  const maxDisplayCount = bookingData?.length;
  const currentDate = new Date();

  const upcomingBookings = bookingData.filter(
    (booking) => new Date(booking.dateTo) > currentDate
  );

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
            {venues?.length <= 0 ? (
              ""
            ) : (
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
          <TabPanel>
            <h2>Reservations</h2>
            <hr />
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
