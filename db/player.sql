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


INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(1001,"Darshin","Shah","darshin@asu.edu",23,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1002,"Nimil","Shah","nimil@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1003,"Martín","Martín","Martín@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1004,"Clemente","Rodríguez","Rodríguez@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1005,"Nicolás","Burdisso","Nicolás@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1006,"Mario","Bolatti","Mario@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1007,"Gabriel","Heinze","Gabriel@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1008,"Juan","Heinze","Heinze@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1009,"Ángel","Heinze","Rodríguez@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1010,"Gonzalo","Sebastián","Sebastián@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1011,"Verón","Rodríguez","Rodríguez@asu.edu",24,"male",2001);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1012,"Higuaín","Gonzalo","Higuaín@asu.edu",24,"male",2001);

INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(10013,"Darshin","Shah","darshin@asu.edu",23,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10014,"Nimil","Shah","nimil@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10015,"Martín","Martín","Martín@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10016,"Clemente","Rodríguez","Rodríguez@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10017,"Nicolás","Burdisso","Nicolás@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10018,"Mario","Bolatti","Mario@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10019,"Gabriel","Heinze","Gabriel@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10020,"Juan","Heinze","Heinze@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	10021,"Ángel","Heinze","Rodríguez@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1022,"Gonzalo","Sebastián","Sebastián@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1023,"Verón","Rodríguez","Rodríguez@asu.edu",24,"male",2002);
INSERT INTO PLAYER (playerid,firstname,lastname,email_id,age,gender,teamid) VALUES(	1024,"Higuaín","Gonzalo","Higuaín@asu.edu",24,"male",2002);



