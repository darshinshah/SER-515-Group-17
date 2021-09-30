CREATE TABLE Referee(
        refereeid INTEGER UNSIGNED auto_increment NOT NULL,
        firstname CHARACTER VARYING(128) NOT NULL,
        lastname CHARACTER VARYING(128) NOT NULL,
        emailId CHARACTER VARYING(128) NOT NULL,
        age INTEGER NOT NULL, 
        gender VARCHAR(23) NOT NULL,
        gameid INTEGER UNSIGNED NOT NULL,
        refereemanager INTEGER UNSIGNED NOT NULL,
        PRIMARY KEY(refereeid,gameid),
        FOREIGN KEY(gameid) REFERENCES Games(gameid),
        FOREIGN KEY(refereemanager) REFERENCES Manager(managerid)
        )ENGINE=INNODB auto_increment = 5000;


-- INSERT INTO TournamentDirector VALUES(90001,"NEEL","N","neel@asu.com",22,"male");
-- INSERT INTO ManagerType VALUES(80001,"TEAM MANAGER");
-- INSERT INTO MANAGER VALUES(70001,"Palak","T","palak@asu.edu",23,"female",80001,90001);
-- INSERT INTO TEAMS VALUES(2001,"ASUS","USA",70001);
-- INSERT INTO PLAYER VALUES(1001,"Darshin","Shah","darshin@asu.edu",23,"male",2001);