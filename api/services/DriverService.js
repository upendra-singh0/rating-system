import { query } from '../db';

class DriverService {
  static getRatingByQuery = async ({ id }) => {
    try {
      const getDriverQuery = ` SELECT COUNT(driver_rating), SUM(driver_rating) FROM bookings WHERE driver_id=$1 AND rate_by_passenger = TRUE; `;
      const params = [id];
      const { rows } = await query(getDriverQuery, params);
      console.log(rows[0]);
      const { count, sum } = rows[0];
      if (sum == null) return 'Not rated by passengers';
      return (sum / count).toFixed(2);
    } catch (err) {
      console.log(err);
      return new Error(err);
    }
  };

  static giveRatingByQuery = async ({ id, rating }) => {
    try {
      const giveRatingQuery = ` UPDATE bookings SET passenger_rating=$1, rate_by_driver=TRUE WHERE booking_id=$2; `;
      const params = [rating, id];
      const { rowCount } = await query(giveRatingQuery, params);
      return rowCount;
    } catch (err) {
      console.log(err);
      throw new Error(err.message);
    }
  };
}
export default DriverService;
