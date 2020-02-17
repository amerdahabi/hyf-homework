use meal_database;


CREATE TABLE `meal` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `location` VARCHAR(255) NOT NULL,
    `when` DATETIME NOT NULL,
    `max_reservation` INT UNSIGNED NOT NULL,
    `price` DECIMAL(6 , 2 ) UNSIGNED NOT NULL,
    `created_date` DATETIME NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `reservation` (
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `number_of_guests` INT(10) UNSIGNED NOT NULL,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `created_date` DATETIME NOT NULL,
    FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`id`)
        ON DELETE CASCADE
);

CREATE TABLE `review` (
    `id` INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT,
    `meal_id` INT(10) UNSIGNED NOT NULL,
    `star` INT(10) UNSIGNED,
    `created_date` DATETIME NOT NULL,
    FOREIGN KEY (`meal_id`)
        REFERENCES `meal` (`id`)
        ON DELETE CASCADE ON UPDATE CASCADE
);

insert into meal (title, description, location, `when`, max_reservation, price, created_date) values ('Syrian Kebab', 'Meat on grill', 'copenhagen', '2020-02-14 18:00:00', 20, 100.00, NOW());
insert into meal (title, description, location, `when`, max_reservation, price, created_date) values ('Humous', 'chickpeas with tahinah ', 'copenhagen', '2020-02-15 10:00:00', 5, 20.00, NOW());
insert into meal (title, description, location, `when`, max_reservation, price, created_date) values ('taboulah', 'green salad whith burgul', 'copenhagen', '2020-02-16 12:00:00', 10, 30.00, NOW());
insert into meal (title, description, location, `when`, max_reservation, price, created_date) values ('Koubbeh', 'burgel and meat', 'copenhagen', '2020-02-17 18:00:00', 30, 80.00, NOW());
insert into meal (title, description, location, `when`, max_reservation, price, created_date) values ('Mutabal', 'eggplant with tahenah and garlic', 'copenhagen', '2020-02-14 18:00:00', 20, 100.00, NOW());
insert into meal (title, description, location, `when`, max_reservation, price, created_date) values ('baba ghanoug', 'burgel barselly and eggplant', 'copenhagen', '2020-02-17 18:00:00', 30, 80.00, '2020-01-01 00:00:00');

insert into reservation (number_of_guests, meal_id, created_date) values (6, 1, '2020-04-17 18:00:00');
insert into reservation (number_of_guests, meal_id, created_date) values (10, 3, '2020-05-07 12:00:00');
insert into reservation (number_of_guests, meal_id, created_date) values (2, 6, '2020-03-01 14:00:00');
insert into reservation (number_of_guests, meal_id, created_date) values (5, 4, '2020-08-17 18:30:00');
insert into reservation (number_of_guests, meal_id, created_date) values (10, 4, '2020-01-17 18:30:00');

insert into review (title, description, meal_id, star, created_date) values ('very good', 'WOW', 1, 4, '2020-02-14 20:20:00');
insert into review (title, description, meal_id, star, created_date) values ('perfect', 'it was so delicious', 3, 5, '2020-12-24 13:40:00');
insert into review (title, description, meal_id, star, created_date) values ('good', 'WOW', 5, 5, '2020-02-14 20:20:00');

-- queries mael --------------------

-- get all meals
select * from meal;
-- add new meal 
insert into meal (title, description, location, `when`, max_reservation, price, created_date) values ('yalanji', 'wineleef with burgul and humous and spicies', 'copenhagen', '2020-02-15 10:00:00', 5, 20.00, NOW());
-- get a meal with any ID
select title from meal where id = 1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
update meal set location = 'Odense' where id = 6;
-- Delete a meal with any id, fx 1
delete from meal where id = 2;

-- queries reservation -------------------

-- get all reservation
select * from reservation;
-- add new reservation 
insert into reservation (number_of_guests, meal_id, created_date) values (15, 6, '2020-01-17 18:00:00');
-- get a meal with any ID
select * from reservation where id = 1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
update reservation set number_of_guests = 50 where id = 6;
-- Delete a reservation with any id, fx 1
delete from reservation where id = 2;

-- queries review --------------------

-- get all review
select * from review;
-- add new review 
insert into review (title, description, meal_id, star, created_date) values ('i will give a 5 star for the taste', 'really amazing', 1, 4, '2020-02-14 20:20:00');
-- get a review with any ID
select * from review where id = 1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
update review set title = 'i like the food' where id = 2;
-- Delete a review with any id, fx 1
delete from review where id = 3;


-- Additional queries -------------------

-- Get meals that has a price smaller than a specific price fx 90
select * from meal where price < 50 ;
-- Get meals that still has available reservations
select meal.*, reservation.number_of_guests from meal join reservation ON meal.id = reservation.meal_id
 where `when` > NOW() and reservation.number_of_guests <= meal.max_reservation ;
 -- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
 select * from meal where title like '%kebab%';
 -- Get meals that has been created between two dates
 select * from meal where created_date between '2020-02-01 00:00:00' and '2020-02-15 00:00:00:';
 -- Get only specific number of meals fx return only 5 meals
 select * from meal limit 4;
 -- Get the meals that have good reviews
 select meal.*, review.title as review from meal join review on meal.id = review.meal_id
 where review.star >= 4;
 -- Get reservations for a specific meal sorted by created_date
 select meal.*, reservation.created_date as reservation from meal join reservation 
 on meal.id = reservation.meal_id order by reservation.created_date;
 -- Sort all meals by average number of stars in the reviews
 select Meal.Id, Meal.Title, AVG(Review.Star) from Meal
join Review ON Meal.id = Review.Meal_id group by Meal.Id
order BY AVG(Review.Star) desc;
