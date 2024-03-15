CREATE TABLE `webmyphone`.`login` (
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`username`)
);
INSERT INTO `webmyphone`.`login` (`username`, `password`) VALUES ('1', '1');


SELECT * FROM `webmyphone`.`login`;
