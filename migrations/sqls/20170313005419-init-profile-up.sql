CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES account,
  card_ids INTEGER[]
);
