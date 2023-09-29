import { useState } from "react";

/**
 * Custom hook for managing modal states.
 *
 * This custom hook provides functions and state variables for managing various modals,
 * including registration, booking success, manager modal, and venue success modal.
 *
 * @returns {Object} An object containing state variables and functions for managing modals.
 * @property {boolean} show - Indicates whether the main modal is visible.
 * @property {Function} handleClose - Function to close the main modal.
 * @property {Function} handleShow - Function to show the main modal.
 * @property {boolean} showRegister - Indicates whether the registration modal is visible.
 * @property {Function} handleRegister - Function to show the registration modal and hide the main modal.
 * @property {Function} handleRegisterClose - Function to close the registration modal.
 * @property {Function} handleBookingSuccess - Function to show the booking success modal.
 * @property {Function} handleCloseBookingSuccess - Function to close the booking success modal and reload the page.
 * @property {boolean} showBookingSuccess - Indicates whether the booking success modal is visible.
 * @property {Function} handleManagerModal - Function to show the manager modal.
 * @property {Function} handleCloseManagerModal - Function to close the manager modal.
 * @property {boolean} showManagerModal - Indicates whether the manager modal is visible.
 * @property {boolean} showVenueSuccess - Indicates whether the venue success modal is visible.
 * @property {Function} handleOpenVenueSuccess - Function to show the venue success modal.
 * @property {Function} handleCloseVenueSuccess - Function to close the venue success modal and reload the page.
 *
 * @example
 * // Example usage of the useModal hook:
 * const {
 *   show,
 *   handleClose,
 *   handleShow,
 *   showRegister,
 *   handleRegister,
 *   handleRegisterClose,
 * } = useModal();
 *
 * // Opening the main modal
 * handleShow();
 *
 * // Closing the registration modal
 * handleRegisterClose();
 */
const useModal = () => {
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [showManagerModal, setShowManagerModal] = useState(false);
  const [showVenueSuccess, setShowVenueSuccess] = useState(false);
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  const handleRegister = () => {
    setShow(false);
    setShowRegister(true);
  };

  const handleRegisterClose = () => {
    setShowRegister(false);
  };

  const handleBookingSuccess = () => {
    setShowBookingSuccess(true);
  };

  const handleCloseBookingSuccess = () => {
    setShowBookingSuccess(false);
    window.location.reload();
  };

  const handleManagerModal = () => {
    setShowManagerModal(true);
  };

  const handleCloseManagerModal = () => {
    setShowManagerModal(false);
  };

  const handleOpenVenueSuccess = () => {
    setShowVenueSuccess(true);
  };

  const handleCloseVenueSuccess = () => {
    setShowVenueSuccess(false);
    window.location.reload();
  };

  const handleOpenUpdateSuccess = () => {
    setShowUpdateSuccess(true);
  };

  const handleCloseUpdateSuccess = () => {
    setShowUpdateSuccess(false);
    window.location.reload();
  };

  const handleOpenDeleteAlert = () => {
    setShowDeleteAlert(true);
  };

  const handleCloseDeleteAlert = () => {
    setShowDeleteAlert(false);
  };

  const handleOpenDeleteSuccess = () => {
    setShowDeleteAlert(false);
    setShowDeleteSuccess(true);
  };

  const handleCloseDeleteSuccess = () => {
    setShowDeleteSuccess(false);
    window.location.replace("/");
  };

  return {
    show,
    handleClose,
    handleShow,
    showRegister,
    handleRegister,
    handleRegisterClose,
    handleBookingSuccess,
    handleCloseBookingSuccess,
    showBookingSuccess,
    handleManagerModal,
    handleCloseManagerModal,
    showManagerModal,
    showVenueSuccess,
    handleOpenVenueSuccess,
    handleCloseVenueSuccess,
    handleOpenUpdateSuccess,
    handleCloseUpdateSuccess,
    showUpdateSuccess,
    handleOpenDeleteAlert,
    handleCloseDeleteAlert,
    showDeleteAlert,
    handleOpenDeleteSuccess,
    handleCloseDeleteSuccess,
    showDeleteSuccess,
  };
};

export default useModal;
