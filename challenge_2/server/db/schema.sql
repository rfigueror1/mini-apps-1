
CREATE DATABASE IF NOT EXISTS information;

USE information;

CREATE TABLE IF NOT EXISTS general_information (id INT NOT NULL AUTO_INCREMENT, firstName VARCHAR(100) NOT NULL,
lastName VARCHAR(100) NOT NULL, county VARCHAR(100) NOT NULL,
city VARCHAR(100) NOT NULL, role VARCHAR(100) NOT NULL,
sales INT NOT NULL, PRIMARY KEY(id));

INSERT INTO general_information (firstName, lastName, county, city, role, sales)
VALUES ('Ricardo', 'Figueroa', 'Tlalpan', 'Mexico City', 'Software Engineer', 10000);

SELECT * FROM general_information;
