CREATE table Teams(
		teamid INTEGER UNSIGNED auto_increment NOT NULL,
        name CHARACTER VARYING(128) NOT NULL,
		country CHARACTER VARYING(64) NOT NULL,
	    PRIMARY KEY(teamid),
        mgid INTEGER UNSIGNED NOT NULL,
        FOREIGN KEY(mgid) REFERENCES Manager(managerid)
)ENGINE=INNODB auto_increment = 2000;


--INSERT INTO TEAMS VALUES(2001,"ASUS","USA",70001);
--INSERT INTO TEAMS VALUES(2002,"USC","USA",70003);
--INSERT INTO TEAMS VALUES(2003,"UTD","USA",70004);
--INSERT INTO TEAMS VALUES(2004,"NCSU","USA",70005);
--INSERT INTO TEAMS(teamid, name,country, mgid) VALUES(2001,"ASUS","USA",70001);

