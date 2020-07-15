import PassengerRoute from './PassengerRoute';
import DriverRoute from './DriverRoute';

const setupRoutes = (app) => {
  app.use('/api/d', DriverRoute);
  app.use('/api/p', PassengerRoute);
};

export default setupRoutes;
