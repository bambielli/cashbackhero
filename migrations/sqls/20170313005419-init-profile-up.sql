CREATE TABLE profile (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES user,
  card_ids INTEGER[]
);
