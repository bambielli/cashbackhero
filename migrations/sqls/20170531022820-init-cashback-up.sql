CREATE TABLE cashback (
    id SERIAL PRIMARY KEY,
    card_id INTEGER REFERENCES cards (id),
    type_id INTEGER REFERENCES types (id),
    amount NUMERIC(5, 2),
    start_date DATE,
    end_date DATE,
    UNIQUE (card_id, type_id)
);

INSERT INTO cashback (card_id, type_id, amount, start_date, end_date)
VALUES
(6, 6, 5.0, '2017-05-01', '210-12-31'),
(6, 5, 2.0, '2017-05-01', '210-12-31'),
(6, 11, 2.0, '2017-05-01', '210-12-31')