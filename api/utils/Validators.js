class Validation {
  static validateBooking = async (bookingId) => {
    return true;
  };

  static validatePassenger = async (passengerId) => {
    return true;
  };

  static validateDriver = async (driverId) => {
    return true;
  };

  static validateRating = async (rating) => {
    if (typeof rating != 'number') return false;
    if (rating < 0 || rating > 5) return false;
    return true;
  };
}
export default Validation;
