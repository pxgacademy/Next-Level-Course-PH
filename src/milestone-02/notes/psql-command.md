## psql command

### to create a new user
- role/user: user2
- password: 123456

```text
create user user2 with encrypted password '123456';
```
---

### to switch role/user
- role/user: user1
- database: postgres

```text
\c postgres user1
```
---

### to give view permission
- table: test_table
- role/user: user2

```text
grant select on table test_table to user2;
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

### to insert a new row / record
- table: test_table
- record: test name

```text
 insert into test_table(name) values('test_name');
```
---

