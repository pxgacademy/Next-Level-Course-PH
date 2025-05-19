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


