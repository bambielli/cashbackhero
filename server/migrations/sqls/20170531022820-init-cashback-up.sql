CREATE TABLE cashback (
    id SERIAL PRIMARY KEY,
    card_id INTEGER REFERENCES cards (id),
    type_id INTEGER REFERENCES types (id),
    amount NUMERIC(5, 2),
    UNIQUE (card_id, type_id)
);

INSERT INTO cashback (card_id, type_id, amount)
VALUES
(6, 6, 5.0),
(6, 5, 2.0),
(6, 11, 2.0)