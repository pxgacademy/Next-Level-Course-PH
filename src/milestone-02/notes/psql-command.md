## psql command

### to create a new user
- user name: user2
- password: 123456

```text
create user user2 with encrypted password '123456';
```
---

### to switch role/user
- role/user name: user1
- database name: postgres

```text
\c postgres user1
```
---

### to give view permission
- table name: test_table
- user name: user2

```text
grant select on table test_table to user2;
```
---


### to give all permission
- table name: test_table
- user name: user1

```text
grant all privileges on table test_table to user1;
```
---

### to see everything from a table
- table name: test_table
- * uses for select everything

```text
 select * from test_table;
```
---

### to insert a new row / record
- table name: test_table
- record name: test name

```text
 insert into test_table(name) values('test name');
```
---

