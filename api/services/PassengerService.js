import { query } from '../db';

class PassengerService {
  static getRatingByQuery = async ({ id }) => {
    try {
      const getPassengerQuery = ` SELECT COUNT(passenger_rating), SUM(passenger_rating) FROM bookings WHERE passenger_id=$1 AND rate_by_driver = TRUE; `;
      const params = [id];
      const { rows } = await query(getPassengerQuery, params);
      console.log(rows[0]);
      const { count, sum } = rows[0];
      if (sum == null) return 'Not rated by drivers';
      return (sum / count).toFixed(2);
    } catch (err) {
      console.log(err);
      return new Error(err);
    }
  };

  static giveRatingByQuery = async ({ id, rating }) => {
    try {
      const giveRatingQuery = ` UPDATE bookings SET driver_rating=$1, rate_by_passenger=TRUE WHERE booking_id=$2; `;
      const params = [rating, id];
      const { rowCount } = await query(giveRatingQuery, params);
      return rowCount;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };
}
export default PassengerService;
