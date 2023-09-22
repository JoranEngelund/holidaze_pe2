import * as s from "../styled";

/**
 * Displays user profile settings options in a card.
 * @param {Object} data - User profile data.
 * @param {boolean} data.venueManager - Indicates if the user is a venue manager.
 * @param {function} handleManagerModal - Function to handle manager modal display.
 * @returns {JSX.Element} The rendered profile settings card.
 * @description This component renders profile settings options based on whether
 * the user is a venue manager or not.
 */
const SettingsCard = ({ data, handleManagerModal }) => {
  return (
    <s.SettingsCard>
      <h2>Profile Settings</h2>
      {data?.venueManager ? (
        <>
          <s.SettingsButton>Add Venue</s.SettingsButton>{" "}
          <s.SettingsButton>Update Avatar</s.SettingsButton>{" "}
          <s.QuitButton onClick={handleManagerModal}>
            Quit as Manager
          </s.QuitButton>
        </>
      ) : (
        <>
          <s.SettingsButton>Update Avatar</s.SettingsButton>{" "}
          <s.SettingsButton onClick={handleManagerModal}>
            Start Managing
          </s.SettingsButton>
        </>
      )}
    </s.SettingsCard>
  );
};

export default SettingsCard;
