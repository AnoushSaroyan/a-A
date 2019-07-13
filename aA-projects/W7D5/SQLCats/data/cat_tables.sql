-- --
-- -- PostgreSQL database dump
-- --

-- SET statement_timeout = 0;
-- SET lock_timeout = 0;
-- SET client_encoding = 'UTF8';
-- SET standard_conforming_strings = on;
-- SET check_function_bodies = false;
-- SET client_min_messages = warning;

-- --
-- -- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
-- --

-- CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


-- --
-- -- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
-- --

-- COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


-- SET search_path = public, pg_catalog;

-- SET default_tablespace = '';

-- SET default_with_oids = false;

DROP TABLE cattoys;
DROP TABLE toys;
DROP TABLE cats;


CREATE TABLE cats
(
    id integer NOT NULL,
    name character varying(255),
    color character varying(255),
    breed character varying(255)
);

CREATE TABLE toys
(
    id integer NOT NULL,
    price float,
    color character varying(255),
    name character varying(255)
);

CREATE TABLE cattoys
(
    id integer NOT NULL,
    cat_id integer NOT NULL,
    toy_id integer NOT NULL
);

INSERT INTO cats
    (id, name, color, breed)
VALUES
    (1, 'cat1', 'pink1', 'breed1'),
    (2, 'cat2', 'pink2', 'breed2'),
    (3, 'cat3', 'pink3', 'breed3'),
    (4, 'cat4', 'pink4', 'breed4'),
    (5, 'cat5', 'pink5', 'breed5');


INSERT INTO toys
    (id, price, color, name)
VALUES
    (1, 1.01, 'pink1', 'toy1'),
    (2, 1.02, 'pink2', 'toy2'),
    (3, 1.03, 'pink3', 'toy3'),
    (4, 1.04, 'pink4', 'toy4'),
    (5, 1.05, 'pink5', 'toy5');


INSERT INTO cattoys
    (id, cat_id, toy_id)
VALUES
    (1, 1, 2),
    (2, 1, 3),
    (3, 2, 1),
    (4, 3, 5),
    (5, 5, 4);

-- COPY cats (id, name, color, breed) FROM stdin;
-- 1   cat1    pink1   breed1
-- 2   cat22   pink2   breed2
-- 3   cat3    pink3   breed3
-- 4   cat10   pink4   breed4
-- \. 


-- REVOKE ALL ON SCHEMA public FROM PUBLIC;
-- GRANT ALL ON SCHEMA public TO PUBLIC;


-- --
-- -- PostgreSQL database dump complete
-- --
