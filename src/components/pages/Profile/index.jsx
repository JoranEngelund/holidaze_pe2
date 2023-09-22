import setup from "./setup/index.mjs";
import * as s from "./styled";
import { Loader } from "../../Loader";
import useModal from "../../../hooks/useModal";
import VenueManagerModal from "../../Modals/venueManager.jsx";
import TabsComp from "./tabs";
import ProfileCard from "./profileCard";
import SettingsCard from "./settingsCard";

/**
 * The Profile component displays user information, profile settings, and related tabs.
 * @returns {JSX.Element} A rendered Profile component.
 * @description This component fetches user data and manages modal functionality
 * for profile settings. It presents user information, allows for profile settings
 * updates, and provides tabs for navigating related content.
 */
const Profile = () => {
  const { data, isLoading, isError, bookingData, loading, error } = setup();
  const { _count, bookings } = data || {};
  const { venues, bookings: trips } = _count || {};

  const { handleManagerModal, handleCloseManagerModal, showManagerModal } =
    useModal();

  return (
    <s.PageWrapper>
      {isLoading ? <Loader /> : ""}
      {isError ? <h1>Error occured</h1> : ""}
      <s.ProfileWrapper>
        <ProfileCard data={data} trips={trips} venues={venues} />
        <SettingsCard data={data} handleManagerModal={handleManagerModal} />
      </s.ProfileWrapper>
      <TabsComp
        data={data}
        _count={_count}
        bookings={bookings}
        venues={venues}
        bookingData={bookingData}
        loading={loading}
        error={error}
      />
      <VenueManagerModal
        showManagerModal={showManagerModal}
        handleCloseManagerModal={handleCloseManagerModal}
      />
    </s.PageWrapper>
  );
};
export default Profile;
