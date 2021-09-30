CREATE TABLE Manager(
		managerid INTEGER UNSIGNED auto_increment NOT NULL,
		firstname CHARACTER VARYING(128) NOT NULL,
		lastname CHARACTER VARYING(128) NOT NULL,
		emailId CHARACTER VARYING(128) NOT NULL,
		age INTEGER NOT NULL,
		gender VARCHAR(23) NOT NULL,
		typeofrole INTEGER UNSIGNED NOT NULL,
        tdid INTEGER UNSIGNED NOT NULL,
        FOREIGN KEY (typeofrole) REFERENCES ManagerType(managerTid),
        FOREIGN KEY (tdid) REFERENCES TournamentDirector(tdid),
        PRIMARY KEY (managerid)
)ENGINE=INNODB auto_increment = 70000;