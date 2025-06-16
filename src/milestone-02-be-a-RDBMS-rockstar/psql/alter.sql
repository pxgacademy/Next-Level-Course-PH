SELECT * FROM person;

-- add a column into table
ALTER TABLE person ADD COLUMN email VARCHAR(50) DEFAULT 'default@mail.bd';

-- delete a column into table
ALTER TABLE person DROP COLUMN email;

-- change column name
ALTER TABLE person RENAME COLUMN email to user_email;

-- change data type
ALTER TABLE person ALTER COLUMN email TYPE VARCHAR(100);

-- add a data type
ALTER TABLE person ALTER COLUMN email set NOT NULL;

-- delete data type
ALTER TABLE person ALTER COLUMN email DROP DEFAULT;


ALTER TABLE person ADD constraint unique_person_user_age UNIQUE(age);
ALTER TABLE person ADD constraint pk_person_user_id PRIMARY KEY(user_id);
ALTER TABLE person DROP constraint unique_person_user_age



-- to delete a table
DROP Table person

-- to delete everything from a table
TRUNCATE Table person
