import { useState } from "react";

/**
 * Custom hook for managing modal states.
 *
 * @returns {Object} An object containing state variables and functions to control modals.
 * @property {boolean} show - A boolean indicating whether the main modal is visible.
 * @property {Function} handleClose - A function to close the main modal.
 * @property {Function} handleShow - A function to open the main modal.
 * @property {boolean} showRegister - A boolean indicating whether the registration modal is visible.
 * @property {Function} handleRegister - A function to open the registration modal.
 * @property {Function} handleRegisterClose - A function to close the registration modal.
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
  };
};

export default useModal;
