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




--  INSERT INTO Referee VALUES(5001,"Craig","Smith","craigsmith@gmail.com",22,"male",6001,70002);
--  INSERT INTO Referee VALUES(5002,"Sam","Khan","sam@gmail.com",22,"male",6002,70002);
--  INSERT INTO Referee VALUES(5003,"Nina","Crow","nina@gmail.com",22,"female",6003,70002);

