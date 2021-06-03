CREATE DATABASE jwtloginsystem; 

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(), 
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL
);

INSERT INTO users (user_name, user_email, user_password) 
VALUES ('InitTest', 'Test@gmail.com', '1234'); 


CREATE TABLE budget (salary NUMERIC NOT NULL, rent NUMERIC NOT NULL, aconto NUMERIC NOT NULL, 
el NUMERIC NOT NULL, fuel NUMERIC NOT NULL, ensurance NUMERIC NOT NULL, maintenance NUMERIC NOT NULL, 
tv NUMERIC NOT NULL, internet NUMERIC NOT NULL, licens NUMERIC NOT NULL, streaming NUMERIC NOT NULL, 
mobile NUMERIC NOT NULL, akasse NUMERIC NOT NULL, unions NUMERIC NOT NULL, fitness NUMERIC NOT NULL, 
cafe NUMERIC NOT NULL, arrangement NUMERIC NOT NULL, bio NUMERIC NOT NULL, supermarket NUMERIC NOT NULL, 
takeaway NUMERIC NOT NULL, housing NUMERIC NOT NULL, clothes NUMERIC NOT NULL, barber NUMERIC NOT NULL, 
electronic NUMERIC NOT NULL, gift NUMERIC NOT NULL); 

INSERT INTO budget (salary, rent, aconto, el, fuel, ensurance, maintenance, tv, internet, licens, 
streaming, mobile, akasse, unions, fitness, cafe, arrangement, bio, supermarket, takeaway, housing, 
clothes, barber, electronic, gift) 

VALUES (28000, 8000, 500, 200, 1100, 600, 250, 250, 300, 90, 200, 150, 400, 400, 250, 600, 200, 90, 
2000, 650, 200, 400, 350, 500, 120 ); 
