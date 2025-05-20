CREATE Table users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL
);
INSERT INTO users(username) VALUES ('Akib'), ('Sakib'), ('Rakib'), ('Abul');


CREATE Table posts(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) NOT NULL
);

CREATE Table posts(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET DEFAULT DEFAULT 1
)

INSERT INTO posts(title, user_id) VALUES ('Enjoy a sunny day with Sakib', 2), ('Sakib just shared a amazing recipe', 2), ('Exploring adventures with Abul', 4), ('Rakib is walking on the floor', 3);


-------------------------------------------------


-- Deletion constraint on DELETE user
-- Restrict Deletion    -> ON DELETE RESTRICT / ON DELETE NO ACTION (default)
-- Cascading Deletion   -> ON DELETE CASCADE
-- Setting NULL         -> ON DELETE SET NULL
-- Set Default Value    -> ON DELETE SET DEFAULT


DELETE FROM users WHERE id = 4;


DROP TABLE users;
DROP TABLE posts;
SELECT * FROM users;
SELECT * FROM posts;

