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

--INSERT INTO MANAGER VALUES(70001,"Palak","T","palak@asu.edu",23,"female",80001,90001);
--INSERT INTO MANAGER VALUES(70002,"Nimil","S","nshah55@asu.edu",21,"male",80002,90001);
--INSERT INTO MANAGER VALUES(70003,"Daniel","D","daniel@asu.edu",21,"male",80003,90001);
--INSERT INTO MANAGER VALUES(70004,"Craig","C","craig@asu.edu",21,"male",80004,90001);
--INSERT INTO MANAGER VALUES(70005,"Natalie","N","natalie@asu.edu",21,"female",80005,90001);

