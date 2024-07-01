-- tạo database

CREATE DATABASE IF NOT EXISTS `project-api-nej`;

-- sử dụng database

USE `project-api-nej`;

-- tạo bảng USERS(ID, EMAIL, PASSWORD, NAME, ROLE, AVATAR)

CREATE TABLE IF NOT EXISTS `CARS` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `productName` VARCHAR(255) NOT NULL,
    `category_id` INT(11),
    `price` DECIMAL(10, 2),
    PRIMARY KEY (`id`),
    FOREIGN KEY (`category_id`) REFERENCES `CATEGORY`(`id`)
);

INSERT INTO `CARS` (`productName`, `category_id`, `price`) VALUES
('Toyota Camry', 1, 24000.00),
('Honda Civic', 2, 22000.00),
('Ford F-150', 3, 28000.00),
('Chevrolet Bolt', 4, 36000.00);


CREATE TABLE IF NOT EXISTS `CATEGORY` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` VARCHAR(255),
    PRIMARY KEY (`id`)
);

INSERT INTO `CATEGORY` (`name`, `description`) VALUES
('Sedan', 'A passenger car in a three-box configuration'),
('Compact', 'Smaller cars that are easy to maneuver'),
('Truck', 'Vehicles designed to transport cargo'),
('Electric', 'Cars powered by electric motors');

CREATE TABLE IF NOT EXISTS `ACCOUNT` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `ACCOUNT` (`username`, `email`, `password`) VALUES
('john_doe', 'john@example.com', 'password123'),
('jane_smith', 'jane@example.com', 'securepass'),
('michael_brown', 'michael@example.com', 'mypass456'),
('emily_white', 'emily@example.com', 'password789');

SELECT * FROM ACCOUNT
