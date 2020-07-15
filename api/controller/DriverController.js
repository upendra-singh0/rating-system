import DriverService from '../services/DriverService';

class DriverController {
  static async getRating({ driverId }) {
    try {
      const rating = await DriverService.getRatingByQuery({
        id: driverId,
      });
      return rating;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  static async giveRating({ bookingId, rating }) {
    try {
      const bookings = await DriverService.giveRatingByQuery({
        id: bookingId,
        rating,
      });
      return bookings;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
}

export default DriverController;
