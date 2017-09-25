CREATE TABLE emails (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(180),
    email VARCHAR(180),
    message TEXT
)