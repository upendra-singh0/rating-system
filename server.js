import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import logger from 'morgan';
import rateLimit from 'express-rate-limit';
import createError from 'http-errors';
import setupRoutes from './api/routes';
import Constants from './api/config/Constants';
// import { Database } from './db/connection';

const app = express();
// Database.connect();

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 Minutes
  max: 50, // limit each IP to 50 requests per windowMs
});

// app.use(compression()); // use compression
app.use(bodyParser.json({ limit: '50mb', strict: false }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5000/' }));
app.use(logger('dev'));
app.use(limiter);

// Set all the routes for the app
setupRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};
  res.status(err.status || 500).json(err.message);
});

//const PORT = 3000;
app.listen(Constants.PORT(), () => {
  console.log(`app is listening on PORT = ${Constants.PORT()}`);
});
