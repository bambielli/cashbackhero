CREATE TABLE location_types (
    id SERIAL PRIMARY KEY,
    location_id INTEGER NOT NULL,
    type_id INTEGER NOT NULL,
    UNIQUE (location_id, type_id)
);

INSERT INTO location_types (location_id, type_id)
VALUES
(1, 6),
(2, 9),
(3, 7),
(4, 7),
(5, 7),
(6, 4), (6, 2),
(7, 4), (7, 3),
(8, 11),
(9, 11),
(10, 11),
(11, 1),
(12, 1),
(13, 5),
(14, 5),
(15, 5),
(16, 8),
(17, 8),
(18, 10),
(19, 10),
(20, 10),
(21, 10),
(22, 10),
(23, 10),
(24, 10);