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

--INSERT INTO GAMES VALUES(6001,2001,2002,"Small Goal Soccer",'2021-10-01',2,3,2002);
--INSERT INTO GAMES VALUES(6002,2003,2004,"Rever View Sports Complex",'2021-10-10',5,3,2003);
--INSERT INTO GAMES VALUES(6003,2001,2003,"Rever View Sports Complex",'2021-10-12',3,6,2003);