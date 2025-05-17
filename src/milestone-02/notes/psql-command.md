# PSQL COMMANDS



## insert / create command

### to create a new database
- database: test

```text
create database test;
```
---

### to rename database
- old database: test
- new database: ph

```text
 alter database test rename to ph;
```
---

### to delete database
- database: ph

```text
 drop database ph;
```
---

### to create a new user
- role/user: user2
- password: 123456

```text
create user user2 with encrypted password '123456';
```
---

### to insert a new row / record
- table: test_table
- record: test name

```text
 insert into test_table(name) values('test_name');
```
---

### to switch role/user
- role/user: user1
- database: postgres

```text
\c postgres user1
```
---


## permission command

### to give view permission for a table
- table: test_table
- role/user: user2

```text
grant select on table test_table to user2;
```
---

### to give view permission for all tables
- role/user: role1
- schema: public

```text
grant select on all tables in schema public to role1;
```
---

### to give all permission of a table
- table: test_table
- role/user: user1

```text
grant all privileges on table test_table to user1;
```
---

### to give all permission of a database
- rose/user: user2
- schema: public

```text
grant all privileges on all tables in schema public to user2;
```
---

### to give role1 permission to role3
role3 will have every permission role1 has.
- rose/user: role1, role3

```text
grant role1 to role3;
```
---

### to delete view permission
- table: test_table
- role/user: user2

```text
revoke select on table test_table from user2;
```
---

### to see everything from a table
- table: test_table
- * uses for select everything

```text
 select * from test_table;
```
---

## local commands

### to see all database
```text
 \l
```
---


## FIELD VALIDATION
### NOT NULL    
```bash
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL
 )
```
### UNIQUE    
```bash
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    email VARCHAR(50) UNIQUE
 )
```
### PRIMARY KEY  
```bash
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL
 )
```
### FOREIGN KEY  
```bash
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(customer_id)
 )
```
### DEFAULT  
```bash
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    status BOOLEAN DEFAULT true
 )
```
### CHECK  
```bash
 CREATE TABLE new_table (
    id SERIAL PRIMARY KEY,
    age INTEGER CHECK (age >= 18)
 )
```


## ROW / RECORD INSERT
### Single Row Insert
```bash
 INSERT INFO your_table (column1, column2, column3)
 VALUES (value1, value2, value3);
```
### Multi Row Insert
```bash
 INSERT INFO your_table (column1, column2, column3)
 VALUES (value1, value2, value3), (value1, value2, value3), (value1, value2, value3);
```
### Single Row Insert
```bash
 INSERT INFO your_table VALUES (value1, value2, value3);
 
 # Assuming the table has columns (id, name, age)
 INSERT INFO your_table VALUES (1, 'John Doe', 25);
```