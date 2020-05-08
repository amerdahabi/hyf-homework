--Part 1 working on tasks -----------------------

select * from task;

INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)  
VALUES ('add task', 'adding task to task table', '2020-02-03 13:00:00', '2020-02-04 11:00:00', '2020-03-04 11:00:00', 1, 3);

UPDATE task
SET title = 'title changed'
WHERE id = 36;

UPDATE task
SET due_date = '2020-06-01 10:00:00'
WHERE id =36;

UPDATE task 
SET status_id = 2
WHERE id = 36;

UPDATE task 
SET status_id = 3
where id = 36;

DELETE FROM task
WHERE id = 36;

--Part 2 School database -------------------------------------

use db_homework_school;
-- Class: with the columns: id, name, begins (date), ends (date)

CREATE TABLE class(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    begins DATETIME NOT NULL,
    ends DATETIME NOT NULL
);
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE student(
id INT(10) PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
phone VARCHAR(255),
class_id INT(10) NOT NULL,
FOREIGN KEY (class_id) REFERENCES class(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO class (name, begins, ends) VALUES ('javacsript', '2020-02-01 10:00:00', '2020-08-02 11:11:11');
INSERT INTO class (name, begins, ends) VALUES ('database', now(), '2020-04-02 11:11:11');
INSERT INTO class (name, begins, ends) VALUES ('node.js', NOW(), '2020-03-02 11:11:11');
INSERT INTO class (name, begins, ends) VALUES ('react', NOW(), '2020-05-02 11:11:11');
INSERT INTO class (name, begins, ends) VALUES ('python', NOW(), '2020-08-02 11:11:11');

INSERT INTO student (name, email, phone, class_id) VALUES ('jhon', 'jhon@example.com', '263748594', 1);
INSERT INTO student (name, email, phone, class_id) VALUES ('lucha', 'lucha@example.com', '264568594', 2);
INSERT INTO student (name, email, phone, class_id) VALUES ('swanthi', 'swanthi@example.com', '896748594', 3);
INSERT INTO student (name, email, phone, class_id) VALUES ('mohamad', 'mohamad@example.com', '263748594', 4);
INSERT INTO student (name, email, phone, class_id) VALUES ('ghofran', 'ghofran@example.com', '263748594', 4);

-- Create an index on the name column of the student table.
CREATE INDEX name_index ON student(name);

-- Add a new column to the class table named status which can only have the following values:
-- not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class
ADD status ENUM ('not-started', 'ongoing', 'finished') NOT NULL;

-- Part 3: More queries ------------------------------


-- Get all the tasks assigned to users whose email ends in @spotify.com
select task.title, user.name from task
 join user_task on task.id = user_task.task_id
	join user on user.id = user_task.user_id 
    where user.email like '%@spotify.com';

-- Get all the tasks for 'Donald Duck' with status 'Not started'
select task.title, user.name, status.name from task 
	join user_task on user_task.task_id = task.id
    join status on status.id = task.status_id 
    join user on user.id = user_task.user_id
    where user.name = 'Donald Duck' and status.name = 'Not started';
    
-- Get all the tasks for 'Maryrose Meadows' that were created in september
select task.title, user.name, task.created from task
	join user_task on task.id = user_task.task_id
	join user on user.id = user_task.user_id
    where user.name = 'Maryrose Meadows' and task.created like '____-09-%';
    
-- Find how many tasks where created in each month, e.g. how many tasks were created in october,
-- how many tasks were created in november, etc. (hint: use group by
select count(task.id) as number_of_task, month(created) as month from task
	group by month;

-- Part 4 Meal application ----------------------------
-- i'm working on it