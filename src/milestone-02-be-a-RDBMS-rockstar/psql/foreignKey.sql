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



-- JOIN
SELECT title, username FROM posts JOIN users ON posts.user_id = users.id;
SELECT * FROM posts JOIN users ON posts.user_id = users.id;
SELECT posts.id FROM posts JOIN users ON posts.user_id = users.id;

INSERT INTO posts(title, user_id) VALUES ('Enjoy with nothing', NULL);
SELECT * FROM posts;
SELECT * FROM posts JOIN users ON posts.user_id = users.id;

-- LEFT JOIN
SELECT * FROM posts LEFT JOIN users ON posts.user_id = users.id;
SELECT * FROM users LEFT JOIN posts ON posts.user_id = users.id;

-- RIGHT JOIN
SELECT * FROM posts RIGHT JOIN users ON posts.user_id = users.id;
SELECT * FROM users RIGHT JOIN posts ON posts.user_id = users.id;


-- FULL JOIN
SELECT * FROM posts FULL JOIN users ON posts.user_id = users.id;
SELECT * FROM users FULL JOIN posts ON posts.user_id = users.id;


-- CROSS JOIN
SELECT * FROM posts CROSS JOIN users;

-- NATURAL JOIN
SELECT * FROM posts NATURAL JOIN users; -- it will not work properly. cause it will match column name id with id. Both table will have to two same column name.
