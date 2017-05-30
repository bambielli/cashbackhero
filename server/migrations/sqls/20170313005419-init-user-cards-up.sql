CREATE TABLE user_cards (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  card_id INTEGER REFERENCES cards (id),
  UNIQUE (user_id, card_id)
);

INSERT INTO user_cards(user_id, card_id)
VALUES (1, 1), (1, 2), (1, 3)
