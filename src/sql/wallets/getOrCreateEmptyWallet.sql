-- NOTE: this statement increments the serial row ID counter in the database each time it is executed.
--  TODO: think of a better way to do getOrCreate
WITH t AS (
  INSERT INTO wallets (user_id, card_ids)
  VALUES (${user_id}, '{}')
  ON CONFLICT (user_id) DO NOTHING
  RETURNING *
)
SELECT * FROM t
UNION
SELECT * FROM wallets
  WHERE user_id=${user_id};
