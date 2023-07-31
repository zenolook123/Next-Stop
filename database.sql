CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    usernames varchar(60) NOT NULL,
    passwords varchar(1000) NOT NULL
);

CREATE TABLE "meetups" (
    id SERIAL PRIMARY KEY,
    meetup_name varchar(120) NOT NULL,
    meetup_description varchar(120) NOT NULL,
    meetup_picture varchar(120) NOT NULL,
    meet_address varchar(120) NOT NULL,
    meet_date DATE NOT NULL,
    meet_type int NOT NULL,
    creator_id int NOT NULL,
    FOREIGN KEY (creator_id) REFERENCES "user" (id)
);

CREATE TABLE meetup_pictures (
    id SERIAL PRIMARY KEY,
    meetup_id INT NOT NULL,
    user_id INT NOT NULL,
    picture_url varchar(255) NOT NULL,
    FOREIGN KEY (meetup_id) REFERENCES meetups (id),
    FOREIGN KEY (user_id) REFERENCES "user" (id)
);

CREATE TABLE meetup_attendees (
    meetup_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (meetup_id) REFERENCES meetups (id),
    FOREIGN KEY (user_id) REFERENCES "user" (id)
);

CREATE TABLE car (
    id SERIAL PRIMARY KEY,
    make varchar(60) NOT NULL,
    model varchar(60) NOT NULL,
    year varchar(60) NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user" (id)
);