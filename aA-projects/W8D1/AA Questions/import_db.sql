-- DROP DATABASE questions if exists;
-- CREATE DATABASE questions;


PRAGMA foreign_keys = ON;

DROP TABLE if exists question_likes;
DROP TABLE if exists replies;
DROP TABLE if exists question_follows;
DROP TABLE if exists questions;
DROP TABLE if exists users;

CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);

CREATE TABLE questions
(   id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL,

    FOREIGN KEY (author_id) REFERENCES users(id)
);

-- ToDo: make sure the fiels are unique
CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    parent_reply_id INTEGER ,
    question_id INTEGER NOT NULL, 
    user_id INTEGER NOT NULL,

    FOREIGN KEY (parent_reply_id) REFERENCES replies(id),
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- ToDo: make sure the fiels are unique
CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL, 
    user_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);



INSERT INTO users 
    (fname, lname)
VALUES 
    ('Brett', 'Meyer'),
    ('Dwayne', 'Johnson');
    

INSERT INTO questions 
    (title, body, author_id)
VALUES 
    ('What is 1 + 1?', '5', 2),
    ('What is 2 + 2?', '0', 1);
    

INSERT INTO replies 
    (body, parent_reply_id, question_id, user_id)
VALUES 
    ('idk lol', NULL, 1, 1),
    ('XD', 1, 1, 2);
    


 INSERT INTO question_likes
    (question_id, user_id)
VALUES 
    (1, 1),
    (1, 2),
    (2, 2);


