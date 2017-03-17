INSERT INTO users (facebook_id, email, first_name, last_name, gender, age_range_min, age_range_max, locale)
VALUES (${facebook_id}, ${email}, ${first_name}, ${last_name}, ${gender}, ${age_range_min}, ${age_range_max}, ${locale})
ON CONFLICT (facebook_id) DO NOTHING
RETURNING *;
