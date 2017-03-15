CREATE EXTENSION IF NOT EXISTS citext;

CREATE TABLE account (
  id SERIAL PRIMARY KEY,
  facebook_id BIGINT UNIQUE,
  email CITEXT UNIQUE,
  first_name VARCHAR,
  last_name VARCHAR,
  gender VARCHAR,
  age_range_min INTEGER,
  age_range_max INTEGER,
  locale VARCHAR
);
