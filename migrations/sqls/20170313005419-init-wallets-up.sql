CREATE TABLE wallets (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  card_ids INTEGER[]
);

INSERT INTO wallets(user_id, card_ids)
VALUES (1, '{1,2,4}')
