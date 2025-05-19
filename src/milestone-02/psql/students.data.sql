CREATE Table students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INT check (age >= 18),
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(50),
    dob DATE,
    blood_group VARCHAR(5),
    country VARCHAR(50)
);

INSERT INTO students ( first_name,last_name,age,grade,course,email,dob,blood_group,country) VALUES ('John', 'Doe', 20, 'A', 'Math', 'john.doe@mail.com', '2004-01-15', 'O+', 'USA'), ('Jane', 'Smith', 22, 'A+', 'History', 'jane.smith@mail.com', '2002-03-18', 'B+', 'Canada'), ('Alice', 'Johnson', 21, 'B', 'Physics', 'alice.johnson@mail.com', '2003-07-10', 'A-', 'UK'), ('Michael', 'Brown', 23, 'B+', 'Chemistry', 'michael.brown@mail.com', '2001-11-02', 'O-', 'Australia'), ('Emily', 'Davis', 19, 'A-', 'Biology', 'emily.davis@mail.com', '2005-09-25', 'B+', 'USA'), ('Daniel', 'Miller', 20, 'C+', 'Economics', 'daniel.miller@mail.com', '2004-06-14', 'AB+', 'Germany'), ('Olivia', 'Wilson', 21, 'A', 'Engineering', 'olivia.wilson@mail.com', '2003-05-20', 'O+', 'Canada'), ('James', 'Moore', 22, 'B-', 'Computer Science', 'james.moore@mail.com', '2002-08-12', 'A+', 'USA'), ('Sophia', 'Taylor', 20, 'A', 'Art', 'sophia.taylor@mail.com', '2004-04-30', 'B-', 'France'), ('William', 'Anderson', 19, 'B+', 'Psychology', 'william.anderson@mail.com', '2005-02-17', 'O+', 'UK'), ('Isabella', 'Thomas', 23, 'A-', 'Law', 'isabella.thomas@mail.com', '2001-12-01', 'AB-', 'USA'), ('Benjamin', 'Jackson', 21, 'C', 'Math', 'benjamin.jackson@mail.com', '2003-03-09', 'B+', 'Australia'), ('Mia', 'White', 20, 'B+', 'History', 'mia.white@mail.com', '2004-07-21', 'O-', 'Canada'), ('Logan', 'Harris', 22, 'A', 'Physics', 'logan.harris@mail.com', '2002-10-11', 'A-', 'Germany'), ('Charlotte', 'Martin', 20, 'A+', 'Chemistry', 'charlotte.martin@mail.com', '2004-05-28', 'AB+', 'France'), ('Elijah', 'Thompson', 21, 'B-', 'Biology', 'elijah.thompson@mail.com', '2003-09-05', 'O+', 'USA'), ('Amelia', 'Garcia', 23, 'C+', 'Engineering', 'amelia.garcia@mail.com', '2001-04-22', 'B-', 'UK'), ('Lucas', 'Martinez', 20, 'A', 'Economics', 'lucas.martinez@mail.com', '2004-01-07', 'A+', 'Canada'), ('Harper', 'Robinson', 19, 'B', 'Computer Science', 'harper.robinson@mail.com', '2005-06-03', 'O-', 'Australia'), ('Ethan', 'Clark', 21, 'A-', 'Art', 'ethan.clark@mail.com', '2003-02-26', 'B+', 'USA')

