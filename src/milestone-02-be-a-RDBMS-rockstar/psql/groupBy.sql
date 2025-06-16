-- GROUP BY clause

SELECT * FROM students;

SELECT country FROM students GROUP BY country;
SELECT country, COUNT(*) FROM students GROUP BY country;
SELECT country, COUNT(*), SUM(age), AVG(age) FROM students GROUP BY country;

SELECT country, SUM(age) FROM students GROUP BY country HAVING SUM(age) > 100;


-- count students born in each year
SELECT extract(YEAR FROM dob) as birth_year, COUNT(*) FROM students GROUP BY birth_year;

