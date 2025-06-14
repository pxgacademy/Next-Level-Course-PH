/*
A trigger is a database object in PostgreSQL (and other database management systems) that automatically executes a specified set of actions in response to certain database events or conditions. 
*/

-- Table-Level Events:
    -- INSERT, UPDATE, DELETE, TRUNCATE
-- Database-Level Events
    -- Database Startup, Database Shutdown, Connection start and end etc

-- CREATE TRIGGER trigger_name
-- {BEFORE | AFTER | INSTEAD OF} {INSERT | UPDATE | DELETE | TRUNCATE}
-- ON table_name
-- [FOR EACH ROW] 
-- EXECUTE FUNCTION function_name();


/*
CREATE TRIGGER test_trigger BEFORE DELETE ON users FOR EACH ROW
EXECUTE FUNCTION function_name();
*/

CREATE TABLE my_users(
    username VARCHAR(50),
    email VARCHAR(50)
);

INSERT INTO my_users VALUES('Rakib', 'rakib@mail.com'), ('Sakib', 'sakib@mail.com');


CREATE TABLE delete_user_audit(
    deleted_user_email VARCHAR(50),
    deleted_at TIMESTAMP
);

CREATE OR REPLACE FUNCTION function_save_deleted_user() RETURNS TRIGGER LANGUAGE plpgsql AS
$$
BEGIN
    INSERT INTO delete_user_audit VALUES(OLD.email, now());
    RETURN OLD;
END
$$;

CREATE TRIGGER trigger_save_deleted_user BEFORE DELETE ON my_users FOR EACH ROW
EXECUTE FUNCTION function_save_deleted_user();

DELETE FROM my_users WHERE username = 'Rakib';


SELECT * FROM my_users;
SELECT * FROM delete_user_audit;