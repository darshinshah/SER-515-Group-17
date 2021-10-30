INSERT INTO TournamentDirector VALUES(90001,"admin","admin","admin@asu.com",22,"male");

INSERT INTO Referee VALUES(5001,"Craig","Smith","craigsmith@gmail.com",22,"male",6001,70002);
INSERT INTO Referee VALUES(5002,"Sam","Khan","sam@gmail.com",22,"male",6002,70002);
INSERT INTO Referee VALUES(5003,"Nina","Crow","nina@gmail.com",22,"female",6003,70002);

INSERT INTO TEAMS VALUES(2001,"ASUS","USA",70001);
INSERT INTO TEAMS VALUES(2002,"USC","USA",70003);
INSERT INTO TEAMS VALUES(2003,"UTD","USA",70004);
INSERT INTO TEAMS VALUES(2004,"NCSU","USA",70005);

INSERT INTO ManagerType VALUES(80001,"TEAM MANAGER");
INSERT INTO ManagerType VALUES(80003,"TEAM MANAGER");
INSERT INTO ManagerType VALUES(80004,"TEAM MANAGER");
INSERT INTO ManagerType VALUES(80005,"TEAM MANAGER");
INSERT INTO ManagerType VALUES(80002,"REFEREE MANAGER");


INSERT INTO GAMES VALUES(6001,2001,2002,"Small Goal Soccer",'2021-10-01',2,3,2002);
INSERT INTO GAMES VALUES(6002,2003,2004,"Rever View Sports Complex",'2021-10-10',5,3,2003);
INSERT INTO GAMES VALUES(6003,2001,2003,"Rever View Sports Complex",'2021-10-12',3,6,2003);

INSERT INTO field ( field_Id, field_Name,  latitude,  longitude,  city, image)
   VALUES
   ( 1, "Small Goal Soccer" , 33.3065 , -111.9427, "Texas", "https://images.unsplash.com/photo-1511204579483-e5c2b1d69acd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"  );
   
INSERT INTO field ( field_Id, field_Name,  latitude,  longitude,  city, image)
   VALUES
   ( 2, "Rever View Sports Complex" , 33.5313 , -115.1065, "Los Angeles" , "https://thumbs.dreamstime.com/z/aerial-view-football-stadium-soccer-field-top-view-above-aerial-view-football-stadium-soccer-field-top-view-above-125220294.jpg");
INSERT INTO field (field_Id, field_Name,  latitude,  longitude,  city, image)
   VALUES
   ( 3, "Tempe Sports Complex" , 33.3407 , -111.9508, "Tempe", "https://images.unsplash.com/photo-1592841897894-108b4aa4f076?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80"  );
   
INSERT INTO field ( field_Id, field_Name,  latitude,  longitude,  city, image)
   VALUES
   ( 4, "Eagle Stadium" , 33.1141 , -96.6570, "Allen", "https://upload.wikimedia.org/wikipedia/commons/0/02/Juventus_v_Real_Madrid%2C_Champions_League%2C_Stadium%2C_Turin%2C_2013.jpg"  );
INSERT INTO field ( field_Id, field_Name,  latitude,  longitude,  city, image)
   VALUES
   ( 5, "Al Lang Stadium" , 27.7681 , -82.6331, "Florida", "https://www.wowabouts.com/z-media/2018/10/Al%20Lang%20Stadium.jpg"  );

INSERT INTO field ( field_Id, field_Name,  latitude,  longitude,  city, image)
   VALUES
   ( 6, "Albert-Daly Field" , 37.2911 , -76.7330, "Virginia", "https://www.football-tickets-madrid.com/zorpress/wp-content/themes/twentysixteen-child/img/stadiums/bayernmunich.png"  );



INSERT INTO MANAGER VALUES(70001,"Palak","T","palak@asu.edu",23,"female",80001,90001);
INSERT INTO MANAGER VALUES(70002,"Nimil","S","nshah55@asu.edu",21,"male",80002,90001);
INSERT INTO MANAGER VALUES(70003,"Daniel","D","daniel@asu.edu",21,"male",80003,90001);
INSERT INTO MANAGER VALUES(70004,"Craig","C","craig@asu.edu",21,"male",80004,90001);
INSERT INTO MANAGER VALUES(70005,"Natalie","N","natalie@asu.edu",21,"female",80005,90001);


