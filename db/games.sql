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