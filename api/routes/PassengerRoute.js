import { Router } from 'express';
import PassengerController from '../controller/PassengerController';
import Validate from '../utils/Validators';
import processRequest from '../utils/ProcessRequest';
import HttpResponse from '../utils/HttpResponse';
import { Pool } from 'pg';

const router = Router();

router.get('/:test', async (req, res, next) => {
  try {
    console.log('here');
    const { data, pathParams } = processRequest(req);
    // const { bookingId, driverId, passengerId } = data;
    const { test } = pathParams;
    const result = await Pool.query('SELECT * FROM bookings');
    await Pool.end();
    return HttpResponse.success(req, res, result);
  } catch (err) {
    return HttpResponse.internalError(req, res, err.message);
  }
});

router.get('/rate/:passengerId', async (req, res, next) => {
  try {
    const { data, pathParams } = processRequest(req);
    // const { bookingId, driverId, passengerId } = data;
    const { passengerId } = pathParams;

    // Validate passenger (*can be santized also*)
    if (!Validate.validatePassenger(passengerId)) {
      return HttpResponse.badRequest(req, res, 'send valid passengerId');
    }

    const rating = await PassengerController.getRating({ passengerId });
    return HttpResponse.success(req, res, rating);
  } catch (err) {
    return HttpResponse.internalError(req, res, error.message);
  }
});

router.put('/rate/:passengerId', async (req, res, next) => {
  try {
    const { data, pathParams } = processRequest(req);
    const { bookingId, rating } = data;
    const { passengerId } = pathParams;

    // Validate passenger (*can be santized also*)
    if (!Validate.validatePassenger(passengerId)) {
      return HttpResponse.badRequest(req, res, 'send valid passengerId');
    }

    // Validate booking (*can be santized also*)
    if (!Validate.validateBooking(bookingId)) {
      return HttpResponse.badRequest(req, res, 'send valid bookingId');
    }

    // Validate rating (*can be santized also*)
    if (!Validate.validateRating(rating)) {
      return HttpResponse.badRequest(req, res, 'send valid rating');
    }

    await PassengerController.giveRating({ bookingId, rating });
    return HttpResponse.success(req, res, rating);
  } catch (err) {
    return HttpResponse.internalError(req, res, error.message);
  }
});

export default router;
