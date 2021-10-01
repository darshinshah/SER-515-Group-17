DROP TABLE Coach; DROP TABLE Player; DROP TABLE Referee; DROP TABLE Games; DROP TABLE Teams; DROP TABLE Manager; DROP TABLE ManagerType; DROP TABLE TournamentDirector;  

CREATE TABLE TournamentDirector (
    tdid INTEGER UNSIGNED auto_increment NOT NULL,
    firstname CHARACTER VARYING(128) NOT NULL,
    lastname CHARACTER VARYING(128) NOT NULL,
    emailId CHARACTER VARYING(128) NOT NULL,
    age INTEGER NOT NULL, 
    gender VARCHAR(23) NOT NULL,
    PRIMARY KEY (tdid)
) ENGINE=INNODB auto_increment = 90000;

CREATE TABLE ManagerType(
        managerTid INTEGER UNSIGNED auto_increment NOT NULL,
        managertype VARCHAR(50) NOT NULL,
        PRIMARY KEY (managerTid)
)ENGINE=INNODB auto_increment = 80000;

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
        
CREATE table Teams(
        teamid INTEGER UNSIGNED auto_increment NOT NULL,
        name CHARACTER VARYING(128) NOT NULL,
        country CHARACTER VARYING(64) NOT NULL,
        PRIMARY KEY(teamid),
        mgid INTEGER UNSIGNED NOT NULL,
        FOREIGN KEY(mgid) REFERENCES Manager(managerid)
)ENGINE=INNODB auto_increment = 2000;

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
        
CREATE TABLE Player(
        playerid INTEGER UNSIGNED auto_increment NOT NULL,
        firstname CHARACTER VARYING(128) NOT NULL,
        lastname CHARACTER VARYING(128) NOT NULL,
        emailId CHARACTER VARYING(128) NOT NULL,
        age INTEGER NOT NULL, 
        gender VARCHAR(23) NOT NULL,
        teamid INTEGER UNSIGNED NOT NULL,
        FOREIGN KEY (teamid) REFERENCES Teams(teamid),
        PRIMARY KEY (playerid)
) ENGINE=INNODB auto_increment = 1000;

CREATE TABLE GAMES(
            gameid INTEGER UNSIGNED auto_increment NOT NULL,
            hometeam INTEGER UNSIGNED NOT NULL,
            awayteam INTEGER UNSIGNED NOT NULL,
            field VARCHAR(150) NOT NULL,
            timedate DATETIME NOT NULL,
            goalhome INTEGER UNSIGNED,
            goalaway INTEGER UNSIGNED,
            winner INTEGER UNSIGNED,
            PRIMARY KEY(gameid),
            FOREIGN KEY(hometeam) REFERENCES Teams(teamid),
            FOREIGN KEY(awayteam) REFERENCES Teams(teamid),
            FOREIGN KEY(winner) REFERENCES Teams(teamid)
        )ENGINE=INNODB auto_increment = 6000;
        
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
-- INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(1001,"Darshin","Shah","darshin@asu.edu",23,"male",2001);
-- INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1002,"Nimil","Shah","nimil@asu.edu",24,"male",2001);
