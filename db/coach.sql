CREATE TABLE Coach(
		coachid INTEGER UNSIGNED auto_increment NOT NULL,
		firstname CHARACTER VARYING(128) NOT NULL,
		lastname CHARACTER VARYING(128) NOT NULL,
		emailId CHARACTER VARYING(128) NOT NULL,
		age INTEGER NOT NULL, 
		gender VARCHAR(23) NOT NULL,
        teamid INTEGER UNSIGNED NOT NULL,
        location VARCHAR(23) NOT NULL,
        levelofexp VARCHAR(23) NOT NULL,
        coachmgrid INTEGER UNSIGNED NOT NULL, 
        FOREIGN KEY (coachmgrid) REFERENCES Manager(managerid),
		FOREIGN KEY (teamid) REFERENCES Teams(teamid),
		PRIMARY KEY (coachid)
)ENGINE=INNODB auto_increment = 3000;

--  SELECT * FROM COACH; 
--  INSERT INTO COACH VALUES(30001, "Frank", "Rijkaard", "Rijkaard@asu.edu",  56, "male", 2001,"US", "Senior", 70001 );
-- INSERT INTO TEAMS(teamid, name,country, mgid) VALUES(2001,"ASUS","USA",70001);
-- INSERT INTO COACH(coachid, firstname,lastname, emailId,age, gender, teamid, location, levelofexp,coachmgrid  ) VALUES (3001, "James", "smith", "james@smith@gmail.com", 45, "male", 2001, "USA", 23, 70001 );
