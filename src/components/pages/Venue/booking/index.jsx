import useSetup from "../setup/index.mjs";
import * as s from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import checkToken from "../../../../auth";
import { useParams } from "react-router-dom";
import useSendForm from "../../../../hooks/useSendForm";
import { BOOKING_URL } from "../../../../constants";

/**
 * Booking Component
 *
 * This component represents the booking page where users can reserve a venue.
 * It allows users to select check-in and check-out dates, the number of guests,
 * and make a reservation.
 *
 * @component
 * @example
 * // Example usage of Booking component
 * <Booking />
 *
 * @returns {JSX.Element} The JSX element representing the Booking component.
 */
const Booking = () => {
  let { id } = useParams();
  const { data } = useSetup();
  const { price, rating, maxGuests, bookings } = data;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  checkToken();
  const weekend = (date) => new Date() < date;
  const guestOptions = Array.from(
    { length: maxGuests },
    (_, index) => index + 1
  );
  const excludeDateIntervals = bookings?.map((booking) => ({
    start: new Date(booking.dateFrom),
    end: new Date(booking.dateTo),
  }));

  const calculateTotalPrice = () => {
    if (startDate && endDate) {
      const numberOfNights = Math.ceil((endDate - startDate) / 86400000);
      const totalPrice = price * numberOfNights;
      return totalPrice;
    }
    return null;
  };

  const calculateNumberOfNights = () => {
    if (startDate && endDate) {
      const numberOfNights = Math.ceil((endDate - startDate) / 86400000);
      return numberOfNights;
    }
    return null;
  };

  const { control, handleSubmit } = useForm();
  const { isLoading, isError, sendFormData } = useSendForm(BOOKING_URL);

  const onSubmit = (formData) => {
    console.log(formData);
    sendFormData(formData);
  };

  return (
    <s.BookingDetails>
      <s.BookingCard>
        <s.BookingHeading>
          <h3>
            <s.Price>{price} kr</s.Price> / night
          </h3>
          <s.Rating>
            <FontAwesomeIcon icon={faStar} />
            {rating}
          </s.Rating>
        </s.BookingHeading>
        <div>
          <s.BookingForm onSubmit={handleSubmit(onSubmit)}>
            <s.InputGroup>
              <Controller
                name="dateFrom"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    name="dateFrom"
                    required
                    placeholderText="Check-In"
                    selectsStart
                    isClearable
                    filterDate={weekend}
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date);
                      field.onChange(date.toISOString());
                    }}
                    startDate={startDate}
                    excludeDateIntervals={excludeDateIntervals}
                  />
                )}
              />
              <Controller
                name="dateTo"
                control={control}
                defaultValue={null}
                render={({ field }) => (
                  <DatePicker
                    name="dateTo"
                    required
                    placeholderText="Check-Out"
                    selectsEnd
                    isClearable
                    filterDate={weekend}
                    selected={endDate}
                    onChange={(date) => {
                      setEndDate(date);
                      field.onChange(date.toISOString());
                    }}
                    endDate={endDate}
                    startDate={startDate}
                    minDate={startDate}
                    excludeDateIntervals={excludeDateIntervals}
                  />
                )}
              />
            </s.InputGroup>
            <Controller
              required
              name="guests"
              control={control}
              defaultValue={1} // Set your default value here
              render={({ field }) => (
                <s.GuestSelect {...field}>
                  {guestOptions.map((option) => (
                    <option key={option} value={option}>
                      {option} guests
                    </option>
                  ))}
                </s.GuestSelect>
              )}
            />
            <Controller
              name="venueId"
              control={control}
              defaultValue={id}
              render={() => {
                id;
              }}
            />
            {checkToken() ? (
              <s.Button>Login</s.Button>
            ) : (
              <s.Button type="submit">Reserve</s.Button>
            )}
          </s.BookingForm>
        </div>
        {calculateNumberOfNights() >= 1 ? <hr /> : ""}
        {calculateNumberOfNights() >= 1 ? (
          <s.ReservationDetails>
            <p>
              {price} kr NOK x {calculateNumberOfNights()} nights
            </p>
            <p>{calculateTotalPrice()} kr</p>
          </s.ReservationDetails>
        ) : (
          ""
        )}
        {calculateTotalPrice() >= 1 ? <hr /> : ""}
        {calculateTotalPrice() >= 1 ? (
          <s.ReservationDetails>
            <s.TotalPrice>Total price: </s.TotalPrice>
            <s.TotalPrice>{calculateTotalPrice()} kr NOK</s.TotalPrice>
          </s.ReservationDetails>
        ) : (
          ""
        )}
      </s.BookingCard>
    </s.BookingDetails>
  );
};

export default Booking;
