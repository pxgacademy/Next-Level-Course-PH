SELECT * FROM employees;

CREATE VIEW dept_avg_salary AS
SELECT department_name, AVG(salary) FROM employees GROUP BY department_name;

SELECT * FROM dept_avg_salary;

CREATE VIEW max_hr_salary AS
SELECT max(salary) FROM employees WHERE department_name = 'HR';

SELECT * FROM employees WHERE salary >
(SELECT max(salary) FROM employees WHERE department_name = 'HR');
SELECT * FROM employees WHERE salary > (SELECT max FROM max_hr_salary);


DROP VIEW max_hr_salary 

SELECT * FROM employees WHERE salary;


CREATE VIEW employees_table AS
SELECT * FROM employees;

SELECT * FROM employees_table;