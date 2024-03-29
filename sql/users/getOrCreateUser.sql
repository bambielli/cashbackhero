-- NOTE: this statement increments the serial row ID counter in the database each time it is executed.
--  TODO: think of a better way to do getOrCreate
WITH t AS (
  INSERT INTO users (facebook_id, email, first_name, last_name, gender, age_range_min, age_range_max, locale)
  VALUES (${facebook_id}, ${email}, ${first_name}, ${last_name}, ${gender}, ${age_range_min}, ${age_range_max}, ${locale})
  ON CONFLICT (facebook_id) DO NOTHING
  RETURNING *
)
SELECT * FROM t
UNION
SELECT * FROM users
  WHERE facebook_id=${facebook_id};
