import setup from "./setup/index.mjs";
import * as s from "./styled";
import { Loader } from "../../Loader";
import useModal from "../../../hooks/useModal";
import VenueManagerModal from "../../Modals/venueManager.jsx";
import TabsComp from "./tabs";
import ProfileCard from "./profileCard";
import SettingsCard from "./settingsCard";
import UpdateAvatar from "../../Modals/updateAvatar";
import CheckAuth from "../../../auth/unauth";

/**
 * The Profile component displays user information, profile settings, and related tabs.
 * @returns {JSX.Element} A rendered Profile component.
 * @description This component fetches user data and manages modal functionality
 * for profile settings. It presents user information, allows for profile settings
 * updates, and provides tabs for navigating related content.
 */
const Profile = () => {
  const {
    data,
    isLoading,
    isError,
    bookingData,
    loading,
    error,
    venueData,
    venueError,
    venueLoading,
  } = setup();
  const { _count, bookings } = data || {};
  const { venues, bookings: trips } = _count || {};
  const {
    handleManagerModal,
    handleCloseManagerModal,
    showManagerModal,
    showUpdateAvatar,
    handleCloseUpdateAvatar,
    handleOpenUpdateAvatar,
  } = useModal();

  return (
    <s.PageWrapper>
      <CheckAuth />
      {isLoading ? <Loader /> : ""}
      {isError ? src / components / pages / Venue / booking / index.jsx : ""}
      <s.ProfileWrapper>
        <ProfileCard
          isError={isError}
          data={data}
          trips={trips}
          venues={venues}
        />
        <SettingsCard
          data={data}
          handleManagerModal={handleManagerModal}
          handleOpenUpdateAvatar={handleOpenUpdateAvatar}
        />
      </s.ProfileWrapper>
      <TabsComp
        data={data}
        venueData={venueData}
        _count={_count}
        bookings={bookings}
        venues={venues}
        bookingData={bookingData}
        loading={loading}
        error={error}
        venueError={venueError}
        venueLoading={venueLoading}
      />
      <VenueManagerModal
        showManagerModal={showManagerModal}
        handleCloseManagerModal={handleCloseManagerModal}
      />
      <UpdateAvatar
        showUpdateAvatar={showUpdateAvatar}
        handleCloseUpdateAvatar={handleCloseUpdateAvatar}
      />
    </s.PageWrapper>
  );
};
export default Profile;
