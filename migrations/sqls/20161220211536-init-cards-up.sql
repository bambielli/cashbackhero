CREATE TABLE cards (
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  network VARCHAR,
  base_amount NUMERIC(5, 2)
);

INSERT INTO cards (name, network, base_amount)
  VALUES
    ('Discover IT', 'Discover', 1.0),
    ('Capital One Venture', 'Visa', 1.5),
    ('Chase Sapphire Reserve', 'Visa', 1.0),
    ('American Express Blue Cash Everyday', 'AmEx', 1.0),
    ('Chase Freedom', 'Visa', 1.0),
    ('Amazon Rewards', 'Visa', 1.0),
    ('TJX Rewards', 'Master Card', 1.0);
