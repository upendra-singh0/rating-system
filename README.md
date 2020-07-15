# RATING SYSTEM

(Node.js Express.js PostgreSQL)
After the end of a ride passenger and driver is presented with the option to rate a ride.

### Building

=> Move .example.env to .env and fill the environment variables used
=> Seed database (see ./seedData.sql)

After that run following commands in sequence

```
cd ./rating-system
npm install
npm run dev-start
```

### Functionality

1. The passenger is able to rate a given ride.
2. The driver is able to see aggregated rating of his all rides
3. The driver is able to rate the passenger after ride
4. The passenger is able to see his aggregated rating based on all the rides he has
   taken.

### Assumption

1. Passenger has already completed a ride and there is entry in booking table corresponding to that ride.
2. Rating is optional for both driver and passenger. Default rating is 0 for both which will not be added in aggregated rating.

### Work to do

1. Implementing swagger.
2. Writing test cases
3. Adding Eslint prettier
