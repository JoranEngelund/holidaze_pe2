import useSetup from "../setup/index.mjs";
import * as s from "../styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import checkToken from "../../../../auth";
import { useParams } from "react-router-dom";
import { BOOKING_URL } from "../../../../constants";

import "react-datepicker/dist/react-datepicker.css";
import useAuthForm from "../../../../hooks/useAuthForm";
import { FormLoader } from "../../../Loader";

/**
 * Booking component for displaying and handling booking details.
 *
 * @component
 * @param {Object} props - The component's properties.
 * @param {Function} props.handleShow - A function to handle showing the login modal.
 * @returns {JSX.Element} The JSX element representing the booking details.
 */
const Booking = ({ handleShow, handleBookingSuccess }) => {
  let { id } = useParams();
  const { data } = useSetup();
  const { price, rating, maxGuests, bookings } = data;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const { token } = checkToken();

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

  const { isLoading, isError, sendFormData, isSuccess } = useAuthForm();
  const { control, handleSubmit } = useForm();

  useEffect(() => {
    if (isSuccess) {
      handleBookingSuccess();
    }
  }, [isSuccess]);

  const onSubmit = async (formData) => {
    await sendFormData(BOOKING_URL, "POST", formData, true, false);
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
          <s.BookingForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
                    <option key={option} value={parseInt(option, 10)}>
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
            {token ? (
              <s.Button type="submit">
                {isLoading ? <FormLoader /> : "Reserve"}
              </s.Button>
            ) : (
              <s.StyledLink onClick={handleShow}>Reserve</s.StyledLink>
            )}
            {isError ? (
              <s.ErrorWrapper>
                <p>
                  Oops! There was an issue processing your venue booking
                  request.
                </p>
              </s.ErrorWrapper>
            ) : (
              ""
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
