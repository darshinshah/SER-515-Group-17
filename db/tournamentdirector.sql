CREATE TABLE TournamentDirector (
	tdid INTEGER UNSIGNED auto_increment NOT NULL,
    firstname CHARACTER VARYING(128) NOT NULL,
    lastname CHARACTER VARYING(128) NOT NULL,
    emailId CHARACTER VARYING(128) NOT NULL,
    age INTEGER NOT NULL,
    gender VARCHAR(23) NOT NULL,
    PRIMARY KEY (tdid)
) ENGINE=INNODB auto_increment = 90000;

-- INSERT INTO TournamentDirector VALUES(90001,"NEEL","N","neel@asu.com",22,"male");