INSERT INTO users (facebook_id, email, first_name, last_name, gender, age_range_min, age_range_max, locale)
VALUES (185990558567960, 'open_ixykpde_user@tfbnw.net', 'Open', 'User', 'male', 21, null, 'en_US')
ON CONFLICT (facebook_id) DO NOTHING
RETURNING *
