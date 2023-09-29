import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaw,
  faCar,
  faWifi,
  faMugSaucer,
} from "@fortawesome/free-solid-svg-icons";
import * as s from "./styled";
import { useForm, Controller } from "react-hook-form";
import { countries, continents } from "../../../helpers/arrays";
import useAuthForm from "../../../hooks/useAuthForm";
import { FormLoader } from "../../Loader";
import { useEffect } from "react";
import useStorage from "../../../hooks/useStorage";
import useModal from "../../../hooks/useModal";
import useSetup from "../Venue/setup";
import { useParams } from "react-router-dom";
import UpdateSuccess from "../../Modals/updateSuccess.jsx";
import DeleteAlert from "../../Modals/delete/deleteAlert";
import DeleteSuccess from "../../Modals/delete/deleteSuccess";

/**
 * Represents a function component for editing or deleting a venue.
 *
 * @function
 * @returns {JSX.Element} The UI for editing or deleting a venue.
 */
const CreateVenue = () => {
  const { id } = useParams();
  const { isLoading, isError, sendFormData, isSuccess } = useAuthForm();
  const { data } = useSetup();
  const EDIT_VENUE = `https://nf-api.onrender.com/api/v1/holidaze/venues/${id}`;
  const { load } = useStorage();
  const {
    handleOpenUpdateSuccess,
    handleCloseUpdateSuccess,
    showUpdateSuccess,
    handleOpenDeleteAlert,
    handleCloseDeleteAlert,
    showDeleteAlert,
    showDeleteSuccess,
    handleOpenDeleteSuccess,
    handleCloseDeleteSuccess,
  } = useModal();

  const user = load("user");
  const userName = user ? user.name : "";
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      handleOpenUpdateSuccess();
    }
  }, [isSuccess]);

  const onSubmit = async (formData) => {
    formData.price = parseFloat(formData.price);
    formData.rating = parseFloat(formData.rating);
    formData.maxGuests = parseFloat(formData.maxGuests);

    formData.media = formData.media.filter(
      (mediaUrl) => mediaUrl.trim() !== ""
    );

    if (formData.media.length === 0) {
      delete formData.media;
    }

    console.log(formData);
    await sendFormData(EDIT_VENUE, "PUT", formData, true, false, false);
  };

  return (
    <s.PageWrapper>
      <s.StyledLinks to={`/profile/${userName}`}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Profile
      </s.StyledLinks>
      <hr />
      <s.HeadingWrapper>
        <h1>Edit Venue Settings</h1>
        <s.SubNav>
          <s.StyledNav href="#venue-location">Venue Location</s.StyledNav>
          <s.StyledNav href="#delete-venue">Delete Venue</s.StyledNav>
        </s.SubNav>
      </s.HeadingWrapper>
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <s.InputGroup>
          <s.InputContainer>
            <s.Label htmlFor="name">Name of the venue *</s.Label>
            <i>Current name: {data?.name}</i>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^[a-zA-Z0-9\s]*$/,
                  message: "Special characters not allowed",
                },
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              }}
              render={({ field }) => (
                <>
                  <s.Input
                    {...field}
                    type="text"
                    name="name"
                    placeholder="Update name"
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert">Name is required</p>
                  )}
                  {errors.name?.message && (
                    <p role="alert">{errors.name?.message}</p>
                  )}
                </>
              )}
            />
          </s.InputContainer>
          <s.InputContainer>
            <s.Label htmlFor="price">Price per night *</s.Label>
            <i>Current Price: {data?.price},-</i>
            <Controller
              name="price"
              control={control}
              defaultValue="" // Set defaultValue to a numeric value
              rules={{
                required: true,
                minLength: {
                  value: 0,
                  message: "Minimum price of 0",
                },
              }}
              render={({ field }) => (
                <>
                  <s.Input
                    {...field}
                    type="number"
                    name="price"
                    placeholder="Update price: 0"
                  />
                  {errors.price?.type === "required" && (
                    <p role="alert">Price is required</p>
                  )}
                  {errors.price?.message && (
                    <p role="alert">{errors.price?.message}</p>
                  )}
                </>
              )}
            />
          </s.InputContainer>
          <s.InputContainer>
            <s.Label htmlFor="guests">How many guests are allowed? *</s.Label>
            <i>Current Max Guests: {data?.maxGuests}</i>
            <Controller
              name="maxGuests"
              control={control}
              defaultValue="" // Set defaultValue to a numeric value
              rules={{
                required: true,
                minLength: {
                  value: 1,
                  message: "Minimum guests of 1",
                },
                maxLength: {
                  value: 100,
                  message: "Maximum guests of 100",
                },
              }}
              render={({ field }) => (
                <>
                  <s.Input
                    {...field}
                    type="number"
                    name="maxGuests"
                    placeholder="Update max guests: "
                  />
                  {errors.maxGuests?.type === "required" && (
                    <p role="alert">Max guests are required</p>
                  )}
                  {errors.maxGuests?.message && (
                    <p role="alert">{errors.guests?.message}</p>
                  )}
                </>
              )}
            />
          </s.InputContainer>
          <s.InputContainer>
            <s.Label htmlFor="rating">What's your venue's rating?</s.Label>
            <i>Current Rating: {data?.rating}</i>
            <Controller
              name="rating"
              control={control}
              defaultValue=""
              rules={{
                minLength: {
                  value: 0,
                  message: "Minimum rating of 0",
                },
                maxLength: {
                  value: 5,
                  message: "Maximum rating of 5",
                },
              }}
              render={({ field }) => (
                <>
                  <s.Input
                    {...field}
                    type="number"
                    name="rating"
                    placeholder="Update rating: 0"
                  />
                  {errors.rating?.message && (
                    <p role="alert">{errors.rating?.message}</p>
                  )}
                </>
              )}
            />
          </s.InputContainer>
        </s.InputGroup>
        <s.InputGroup>
          <s.InputContainer>
            <s.Label htmlFor="description">
              Write a description of your venue *
            </s.Label>
            <s.DescriptionPlaceholder>
              <b>Current Description:</b> {data?.description}
            </s.DescriptionPlaceholder>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters of description",
                },
              }}
              render={({ field }) => (
                <>
                  <s.Description
                    {...field}
                    name="description"
                    placeholder="Update description ..."
                  />
                  {errors.description?.type === "required" && (
                    <p role="alert">Description is required</p>
                  )}
                  {errors.description?.message && (
                    <p role="alert">{errors.description?.message}</p>
                  )}
                </>
              )}
            />
          </s.InputContainer>
          <s.GalleryGroup>
            <s.Label htmlFor="media">Add a gallery for your venue</s.Label>
            {["media1", "media2", "media3"].map((media, index) => (
              <Controller
                key={index}
                name={`media[${index}]`}
                control={control}
                defaultValue=""
                rules={{
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters for media URL",
                  },
                }}
                render={({ field }) => (
                  <>
                    <s.Input
                      {...field}
                      type="url"
                      name={`media[${index}]`}
                      placeholder={`URL ${index + 1}`}
                    />
                    {errors.media?.[index]?.type === "required" && (
                      <p role="alert">Media URL is required</p>
                    )}
                    {errors.media?.[index]?.message && (
                      <p role="alert">{errors.media?.[index]?.message}</p>
                    )}
                  </>
                )}
              />
            ))}
          </s.GalleryGroup>
        </s.InputGroup>
        <s.MetaGroup>
          <s.MetaHeading>Your venue offers</s.MetaHeading>
          <div>
            <Controller
              name="meta.wifi"
              control={control}
              defaultValue={false}
              render={({ field }) => <input type="checkbox" {...field} />}
            />
            <s.Meta>
              <s.StyledFontAwesomeIcon icon={faWifi} />
              Wi-Fi
            </s.Meta>
          </div>
          <div>
            <Controller
              name="meta.parking"
              control={control}
              defaultValue={false}
              render={({ field }) => <input type="checkbox" {...field} />}
            />
            <s.Meta>
              <s.StyledFontAwesomeIcon icon={faCar} />
              Parking
            </s.Meta>
          </div>
          <div>
            <Controller
              name="meta.breakfast"
              control={control}
              defaultValue={false}
              render={({ field }) => <input type="checkbox" {...field} />}
            />
            <s.Meta>
              <s.StyledFontAwesomeIcon icon={faMugSaucer} /> Breakfast
            </s.Meta>
          </div>
          <div>
            <Controller
              name="meta.pets"
              control={control}
              defaultValue={false}
              render={({ field }) => <input type="checkbox" {...field} />}
            />
            <s.Meta>
              <s.StyledFontAwesomeIcon icon={faPaw} /> Pets
            </s.Meta>
          </div>
        </s.MetaGroup>
        <s.Line />
        <s.LocationHeading id="venue-location">
          What's your venue's location?
        </s.LocationHeading>
        <s.InputGroup>
          <s.InputContainer>
            <i>Current Address: {data?.location?.address}</i>
            <Controller
              name="location.address"
              control={control}
              defaultValue=""
              rules={{
                pattern: {
                  value: /^[a-zA-Z0-9\s]*$/,
                  message: "Special characters not allowed",
                },
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              }}
              render={({ field }) => (
                <>
                  <s.Input
                    {...field}
                    type="text"
                    name="location.address"
                    placeholder="Update address"
                  />
                  {errors.address?.message && (
                    <p role="alert">{errors.address?.message}</p>
                  )}
                </>
              )}
            />
          </s.InputContainer>
          <s.InputContainer>
            <i>Current City: {data?.location?.city}</i>
            <Controller
              name="location.city"
              control={control}
              defaultValue=""
              rules={{
                pattern: {
                  value: /^[a-zA-Z0-9\s]*$/,
                  message: "Special characters not allowed",
                },
                minLength: {
                  value: 3,
                  message: "Minimum 3 characters",
                },
              }}
              render={({ field }) => (
                <>
                  <s.Input
                    {...field}
                    type="text"
                    name="location.city"
                    placeholder="Update city"
                  />
                  {errors.city?.message && (
                    <p role="alert">{errors.city?.message}</p>
                  )}
                </>
              )}
            />
          </s.InputContainer>
        </s.InputGroup>
        <s.InputGroup>
          <div>
            <i>Current Country: {data?.location?.country}</i>
            <Controller
              name="location.country"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <s.Select {...field}>
                  <option value="" disabled>
                    Update country
                  </option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </s.Select>
              )}
            />
          </div>
          <div>
            <i>Current Continent: {data?.location?.continent}</i>
            <Controller
              name="location.continent"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <s.Select {...field}>
                  <option value="" disabled>
                    Update continent
                  </option>
                  {continents.map((continent) => (
                    <option key={continent} value={continent}>
                      {continent}
                    </option>
                  ))}
                </s.Select>
              )}
            />
          </div>
        </s.InputGroup>
        <s.Line />
        <div>
          <s.Button type="submit">
            {isLoading ? <FormLoader /> : "Update Venue"}
          </s.Button>
          {isError ? (
            <s.ErrorWrapper>
              <p>We're struggling to update your venue</p>
              <p>Try again to refresh and fill in the form again</p>
              <s.Button onClick={() => Window.location.reload}>
                Refresh
              </s.Button>
            </s.ErrorWrapper>
          ) : (
            ""
          )}
        </div>
      </s.Form>
      <s.Line />
      <section>
        <h2 id="delete-venue">Delete Venue</h2>
        <s.DeleteWrapper>
          <s.DeleteInfo>
            <s.DeleteSubheading>Ready to remove your venue?</s.DeleteSubheading>
            <s.DeleteParagraph>
              Deleting your hosted venue on Holidaze is a breeze. Just one
              click, and your property will be removed from our platform
            </s.DeleteParagraph>
          </s.DeleteInfo>
          <div>
            <s.Button onClick={() => handleOpenDeleteAlert()}>
              Remove Venue
            </s.Button>
          </div>
        </s.DeleteWrapper>
      </section>
      <UpdateSuccess
        showUpdateSuccess={showUpdateSuccess}
        handleCloseUpdateSuccess={handleCloseUpdateSuccess}
      />
      <DeleteAlert
        showDeleteAlert={showDeleteAlert}
        handleOpenDeleteSuccess={handleOpenDeleteSuccess}
        handleCloseDeleteAlert={handleCloseDeleteAlert}
      />
      <DeleteSuccess
        showDeleteSuccess={showDeleteSuccess}
        handleCloseDeleteSuccess={handleCloseDeleteSuccess}
      />
    </s.PageWrapper>
  );
};
export default CreateVenue;
