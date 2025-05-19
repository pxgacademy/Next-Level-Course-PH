# PSQL COMMANDS



## insert / create command

### to create a new database
- database: test

```sql
create database test;
```
---

### to rename database
- old database: test
- new database: ph

```sql
 alter database test rename to ph;
```
---

### to delete database
- database: ph

```sql
 drop database ph;
```
---

### to create a new user
- role/user: user2
- password: 123456

```sql
create user user2 with encrypted password '123456';
```
---

### to insert a new row / record
- table: test_table
- record: test name

```sql
 insert into test_table(name) values('test_name');
```
---

### to switch role/user
- role/user: user1
- database: postgres

```sql
\c postgres user1
```
---


## permission command

### to give view permission for a table
- table: test_table
- role/user: user2

```sql
grant select on table test_table to user2;
```
---

### to give view permission for all tables
- role/user: role1
- schema: public

```sql
grant select on all tables in schema public to role1;
```
---

### to give all permission of a table
- table: test_table
- role/user: user1

```sql
grant all privileges on table test_table to user1;
```
---

### to give all permission of a database
- rose/user: user2
- schema: public

```sql
grant all privileges on all tables in schema public to user2;
```
---

### to give role1 permission to role3
role3 will have every permission role1 has.
- rose/user: role1, role3

```sql
grant role1 to role3;
```
---

### to delete view permission
- table: test_table
- role/user: user2

```sql
revoke select on table test_table from user2;
```
---

### to see everything from a table
- table: test_table
- * uses for select everything

```sql
 select * from test_table;
```
---

## local commands

### to see all database
```sql
 \l
```
---


## FIELD VALIDATION
### NOT NULL    
```sql
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
 )
```
### UNIQUE    
```sql
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE
 )
```
### PRIMARY KEY  
```sql
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL
 )
```
### FOREIGN KEY  
```sql
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(customer_id)
 )
```
### DEFAULT  
```sql
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    status BOOLEAN DEFAULT true
 )
```
### CHECK  
```sql
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    age INTEGER CHECK (age >= 18)
 )
```


## ROW / RECORD INSERT
### Single Row Insert
```sql
 INSERT INFO your_table (column1, column2, column3)
 VALUES (value1, value2, value3);
```
### Multi Row Insert
```sql
 INSERT INFO your_table (column1, column2, column3)
 VALUES (value1, value2, value3), (value1, value2, value3), (value1, value2, value3);
```
### Single Row Insert
```sql
 INSERT INFO your_table VALUES (value1, value2, value3);
 
 -- Assuming the table has columns (id, name, age)
 INSERT INFO your_table VALUES (1, 'John Doe', 25);
```

# ALTER
## MODIFY TABLES
### Single Row Insert
```sql
 INSERT INFO your_table (column1, column2, column3)
 VALUES (value1, value2, value3);
```
### Column Insert
```sql
 ALTER TABLE person ALTER COLUMN age SET UNIQUE;
```
### Column Remove / Drop
```sql
 ALTER TABLE person ALTER COLUMN age DROP UNIQUE;
```
### Add constraint
```sql
 ALTER TABLE person ADD constraint unique_person_user_age UNIQUE(age);
 ALTER TABLE person ADD constraint pk_person_user_age PRIMARY KEY(age);
```
### Drop / Remove constraint
```sql
 ALTER TABLE person DROP constraint unique_person_user_age;
 ALTER TABLE person DROP constraint pk_person_user_age;
```
### Drop / Remove all Records / Rows
```sql
 TRUNCATE TABLE person;
```
### Drop / Remove Table / Relation
```sql
 DROP TABLE person;
```

# SELECT
```sql
SELECT * FROM students;

SELECT email, age FROM students;
SELECT age, blood_group, grade FROM students;

SELECT email as student_email FROM students;
SELECT email as student_email, age FROM students;


SELECT * FROM students ORDER BY first_name ASC; -- ascending
SELECT * FROM students ORDER BY first_name DESC; -- descending
SELECT * FROM students ORDER BY age ASC; -- ascending
SELECT * FROM students ORDER BY dob ASC; -- ascending



SELECT country FROM students ORDER BY country ASC; -- ascending
SELECT DISTINCT country FROM students; -- see all unique country
SELECT DISTINCT blood_group FROM students; -- see all unique blood groups



SELECT * FROM students WHERE country = 'USA'; -- select USA students only

-- select grade A and physics students only
SELECT * FROM students WHERE grade = 'A' AND course = 'Physics'; 

-- select country USA or Australia students only
SELECT * FROM students WHERE country = 'USA' OR country = 'Australia'; 
SELECT * FROM students WHERE (country = 'USA' OR country = 'Australia') AND age = 20; 
SELECT * FROM students WHERE age > 20 AND course = 'History'; 
SELECT * FROM students WHERE age >= 20; 
SELECT * FROM students WHERE age < 20; 
SELECT * FROM students WHERE age != 20; -- not equal
SELECT * FROM students WHERE age <> 20; -- not equal



-- Scalar
SELECT upper(first_name) FROM students;
SELECT upper(first_name) as first_name_in_upper FROM students;
SELECT lower(first_name) as first_name_in_lower FROM students;

SELECT concat(first_name, last_name) FROM students;
SELECT concat(first_name, ' ', last_name) FROM students;
SELECT LENGTH (first_name) FROM students;

-- aggregate function
SELECT AVG(age) FROM students;
SELECT MIN (age) FROM students;
SELECT MAX (age) FROM students;
SELECT COUNT (age) FROM students;
SELECT SUM (age) FROM students;
SELECT COUNT (*) FROM students; -- how many rows
SELECT max(LENGTH(first_name)) FROM students;


SELECT * FROM students;
SELECT * FROM students WHERE email IS NULL;
SELECT * FROM students WHERE email IS NOT NULL;

SELECT COALESCE(email, 'Not Provided') FROM students; -- set default value for null value;
SELECT COALESCE(email, 'Not Provided') as email FROM students;
```