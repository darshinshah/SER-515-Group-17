CREATE table Teams(
		teamid INTEGER UNSIGNED auto_increment NOT NULL,
        name CHARACTER VARYING(128) NOT NULL,
		country CHARACTER VARYING(64) NOT NULL,
	    PRIMARY KEY(teamid),
        mgid INTEGER UNSIGNED NOT NULL,
        FOREIGN KEY(mgid) REFERENCES Manager(managerid)
)ENGINE=INNODB auto_increment = 2000;