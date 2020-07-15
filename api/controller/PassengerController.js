import PassengerService from '../services/PassengerService';

class PassengerController {
  static async getRating({ passengerId }) {
    try {
      const rating = await PassengerService.getRatingByQuery({
        id: passengerId,
      });
      return rating;
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }

  static async giveRating({ bookingId, rating }) {
    try {
      const bookings = await PassengerService.giveRatingByQuery({
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

export default PassengerController;
