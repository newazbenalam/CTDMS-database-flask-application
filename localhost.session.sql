-- Insert fake data into the `drug` table
INSERT INTO `drug` (`drug_id`, `name`) VALUES
('D001', 'Aspirin'),
('D002', 'Paracetamol'),
('D003', 'Ibuprofen');

-- Insert fake data into the `employee` table
INSERT INTO `employee` (`employee_id`, `name`, `address`, `nid`, `role`, `location_id`) VALUES
('E001', 'John Doe', '123 Main St', '123456789', 'Doctor', 1),
('E002', 'Jane Smith', '456 Oak St', '987654321', 'Nurse', 2),
('E003', 'Michael Johnson', '789 Elm St', '456789123', 'Pharmacist', 3);

-- Insert fake data into the `location` table
INSERT INTO `location` (`location_id`, `address_1`, `address_2`, `city`, `state`, `zip`, `county`) VALUES
(1, '123 Main St', '', 'Anytown', 'CA', '12345', 'Any County'),
(2, '456 Oak St', '', 'Otherville', 'NY', '54321', 'Other County'),
(3, '789 Elm St', '', 'Anotherplace', 'TX', '67890', 'Another County');

-- Insert fake data into the `person` table
--@block
INSERT INTO `person` ( `name`, `gender`, `age`, `address`, `city`, `email`, `year_of_birth`, `month_of_birth`, `day_of_birth`, `birth_datetime`, `race_id`, `ethnicity_id`, `location_id`, `care_site_id`) VALUES
( 'Alice Johnson', 'Female', 30, '123 Elm St', 'Anytown', 'alice@example.com', 1994, 5, 12, '1994-05-12 00:00:00', 'R001', 1, 1, NULL),
( 'Bob Smith', 'Male', 45, '456 Oak St', 'Otherville', 'bob@example.com', 1979, 10, 25, '1979-10-25 00:00:00', 'R002', 2, 2, NULL),
( 'Charlie Brown', 'Male', 25, '789 Maple St', 'Anotherplace', 'charlie@example.com', 1999, 8, 3, '1999-08-03 00:00:00', 'R003', 3, 3, NULL);

-- Insert fake data into the `study` table
INSERT INTO `study` (`study_id`, `name`, `type`, `criteria`, `drug_of_interest_id`) VALUES
('S001', 'Clinical Trial A', 'Randomized Controlled Trial', 'Age > 18', 'D001'),
('S002', 'Clinical Trial B', 'Observational Study', 'None', 'D002'),
('S003', 'Clinical Trial C', 'Experimental Study', 'Gender = Female', 'D003');

-- Insert fake data into the `study` table
INSERT INTO `study` (`study_id`, `name`, `type`, `criteria`, `drug_of_interest_id`) VALUES
('S001', 'Clinical Trial A', 'Randomized Controlled Trial', 'Age > 18', 'D001'),
('S002', 'Clinical Trial B', 'Observational Study', 'None', 'D002'),
('S003', 'Clinical Trial C', 'Experimental Study', 'Gender = Female', 'D003');

-- Insert fake data into the `study` table
INSERT INTO `study` (`study_id`, `name`, `type`, `criteria`, `drug_of_interest_id`) VALUES
('S001', 'Clinical Trial A', 'Randomized Controlled Trial', 'Age > 18', 'D001'),
('S002', 'Clinical Trial B', 'Observational Study', 'None', 'D002'),
('S003', 'Clinical Trial C', 'Experimental Study', 'Gender = Female', 'D003');

-- Insert fake data into the `study` table
INSERT INTO `study` (`study_id`, `name`, `type`, `criteria`, `drug_of_interest_id`) VALUES
('S001', 'Clinical Trial A', 'Randomized Controlled Trial', 'Age > 18', 'D001'),
('S002', 'Clinical Trial B', 'Observational Study', 'None', 'D002'),
('S003', 'Clinical Trial C', 'Experimental Study', 'Gender = Female', 'D003');
