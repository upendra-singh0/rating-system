--  CREATE DATABASE rating_service;

-- DROP TABLE bookings;

-- create table bookings(
-- 	booking_id BIGSERIAL PRIMARY KEY,
-- 	passenger_id BIGINT NOT NULL,
-- 	driver_id BIGINT NOT NULL,
--     rate_by_driver BOOLEAN NOT NULL DEFAULT FALSE,
--     rate_by_passenger BOOLEAN NOT NULL DEFAULT FALSE,
-- 	driver_rating NUMERIC (3, 2) NOT NULL DEFAULT 0,
--     passenger_rating NUMERIC (3, 2) NOT NULL DEFAULT 0,
-- 	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
-- 	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
-- );

-- insert into bookings ( passenger_id, driver_id) values (777, 123);
-- insert into bookings ( passenger_id, driver_id) values (777, 432);
-- insert into bookings ( passenger_id, driver_id) values (777, 62354);
-- insert into bookings ( passenger_id, driver_id) values (777, 959);
-- insert into bookings ( passenger_id, driver_id) values (64271, 30272);
-- insert into bookings ( passenger_id, driver_id) values (64271, 959);
-- insert into bookings ( passenger_id, driver_id) values (64271, 49);
-- insert into bookings ( passenger_id, driver_id) values (64271, 711);
-- insert into bookings ( passenger_id, driver_id) values (22924, 959);
-- insert into bookings ( passenger_id, driver_id) values (22924, 432);
-- insert into bookings ( passenger_id, driver_id) values (22924, 432);
-- insert into bookings ( passenger_id, driver_id) values (22924, 123);
-- insert into bookings ( passenger_id, driver_id) values (22924, 123);

select * from bookings;