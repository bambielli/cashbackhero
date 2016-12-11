DROP DATABASE IF EXISTS cb_dev;
CREATE DATABASE cb_dev;

\c cb_dev;

CREATE TABLE card (
  ID SERIAL PRIMARY KEY,
  name VARCHAR
);

INSERT INTO card (name)
  VALUES
    ('Discover IT'),
    ('Capital One Venture'),
    ('Chase Sapphire Reserve'),
    ('American Express Blue Cash Everyday'),
    ('Chase Freedom'),
    ('Amazon Rewards'),
    ('TJX Rewards');
