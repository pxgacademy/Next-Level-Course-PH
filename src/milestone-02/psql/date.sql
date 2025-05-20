-- DATE
CREATE Table timeZone (ts TIMESTAMP without TIME zone, tsz TIMESTAMP with time zone);
INSERT INTO timezone VALUES('2025-01-16 11:00:00', '2025-01-16 11:00:00');


SHOW timezone;
SELECT now();
SELECT CURRENT_DATE;
SELECT now()::date; -- casting
SELECT now()::time;


SELECT to_char(now(), 'dd/mm/yyyy');
SELECT to_char(now(), 'dd/Day/Month/yyyy')

SELECT to_char(now(), 'DDD');

SELECT CURRENT_DATE - INTERVAL '1 year 5 month'; -- 1 year 5 months ago
SELECT CURRENT_DATE - INTERVAL '1 month'


SELECT age(CURRENT_DATE, '1997-03-02')


SELECT *, age(CURRENT_DATE, dob) FROM students;

SELECT extract(YEAR FROM '2025-01-22'::date);
SELECT extract(MONTH FROM '2025-01-22'::date);
SELECT extract(DAY FROM '2025-01-22'::date);
SELECT extract(MONTH FROM CURRENT_DATE);

------------------------------------------------------------




SELECT * FROM timezone;



