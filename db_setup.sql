DROP TABLE IF EXISTS call_logs;
DROP TABLE IF EXISTS contacts;
DROP TABLE IF EXISTS user_keys;
DROP TABLE IF EXISTS user_login;

CREATE TABLE user_login (
	phone_no   NUMERIC      PRIMARY KEY,
	password   VARCHAR(255) NOT NULL,
	first_name VARCHAR(255) NOT NULL,
	last_name  VARCHAR(255) NOT NULL
);

CREATE TABLE user_keys (
	phone_no   	NUMERIC PRIMARY KEY,
	contact_key  	VARCHAR(128) CHARACTER SET utf8 NOT NULL,
	id_key		VARCHAR(128) CHARACTER SET utf8 NOT NULL,
	
	FOREIGN KEY (phone_no)
        	REFERENCES user_login(phone_no)
        	ON DELETE CASCADE
); 

/*contact entry exists between all users post calls to hold their relationships*/
/*difference between an personal contact and a relational contact is a name storing*/
CREATE TABLE contacts (
	owner_no 		NUMERIC NOT NULL,
	target_no 		NUMERIC NOT NULL,
	target_contact_key	VARCHAR(128) CHARACTER SET utf8, 
				/*may be null as we may not have their key*/
	stored_name 		VARCHAR(255),			
				/*may be null as the user may not create a contact for them, i.e. unnamed number*/
	call_made		BOOLEAN,

	PRIMARY KEY(owner_no, target_no),
	
	FOREIGN KEY (owner_no)
                REFERENCES user_login(phone_no)
                ON DELETE CASCADE,

	FOREIGN KEY (target_no)
                REFERENCES user_login(phone_no)
                ON DELETE CASCADE
); 

CREATE TABLE call_logs (
	caller_no 		NUMERIC NOT NULL,
        target_no               NUMERIC NOT NULL,
	caller_id		VARCHAR(255) NOT NULL,	
	missed 			BOOLEAN,
	start			DATE NOT NULL,
	start_time		TIME NOT NULL,
	end_time		TIME,
	
	FOREIGN KEY (caller_no)
                REFERENCES user_login(phone_no)
                ON DELETE CASCADE,

        FOREIGN KEY (target_no)
                REFERENCES user_login(phone_no)
                ON DELETE CASCADE
);

INSERT INTO user_login VALUES (215,'demo','Mary','Jane');
INSERT INTO user_login VALUES (202,'demo','Peter','Parker');
INSERT INTO user_login VALUES (908,'demo','Gwen','Stacy');
INSERT INTO user_login VALUES (267,'demo','James','Franco');
INSERT INTO user_login VALUES (212,'demo','Aunt','May');

INSERT INTO user_keys VALUES (215, "mj", "mjp");
INSERT INTO user_keys VALUES (202, "pp", "ppp");
INSERT INTO user_keys VALUES (908, "gs", "gsp");
INSERT INTO user_keys VALUES (267, "jf", "jfp");
INSERT INTO user_keys VALUES (212, "am", "amp");

/*mj and pp know eachother and have called and shared their keys*/
INSERT INTO contacts VALUES (202, 215, "mj", "MJ", true);
INSERT INTO contacts VALUES (215, 202, "pp", "Peter Parker", true);

/*gs called pp but he has not called her*/
INSERT INTO contacts VALUES (908, 202, NULL, "Spiderman", true);
INSERT INTO contacts VALUES (202, 908, "gs", NULL, false);

/*pp called am but she has not called him back*/
INSERT INTO contacts VALUES (202, 212, NULL, "Aunt May's New Phone", true);
INSERT INTO contacts VALUES (212, 202, "pp", "peter", false);

/*james franco is unknown by everyone*/

/*pp and mj call eachother*/
INSERT INTO call_logs VALUES (202, 215, "Peter Parker", false, "2019-08-22", "23:59:59", NULL);
INSERT INTO call_logs VALUES (215, 202, "Mary Jane", true, "2019-08-16", "12:35:00", NULL);

/*gs calls peter*/
INSERT INTO call_logs VALUES (908, 202, "Gwen Stacy", true, "2019-09-05", "08:30:15", NULL);

/*pp calls am*/
INSERT INTO call_logs VALUES (202, 212, "Peter Parker", true, "2019-08-17", "12:55:00", NULL);

