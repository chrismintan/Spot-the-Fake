DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS onions;
DROP TABLE IF EXISTS notonions;

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(15),
	password TEXT,
	correct INTEGER,
	wrong INTEGER
);

CREATE TABLE IF NOT EXISTS onions (
	id SERIAL PRIMARY KEY,
	headline TEXT,
	image_url TEXT,
	article_url TEXT,
	reddit_url TEXT,
	guess_right INTEGER,
	guess_wrong INTEGER
);

CREATE TABLE IF NOT EXISTS notonions (
	id SERIAL PRIMARY KEY,
	headline TEXT,
	image_url TEXT,
	article_url TEXT,
	reddit_url TEXT,
	guess_right INTEGER,
	guess_wrong INTEGER
);





