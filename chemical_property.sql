LOAD DATA INFILE 'periodic.csv'
CREATE TABLE chemical_properties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    AtomicNumber INT,
    Element VARCHAR(50),
    Symbol VARCHAR(10),
    AtomicMass DECIMAL(10, 4),
    Phase VARCHAR(20),
    Radioactive BOOLEAN,
    Natural BOOLEAN,
    Metal BOOLEAN,
    Nonmetal BOOLEAN,
    Metalloid BOOLEAN,
    Type VARCHAR(20),
    AtomicRadius DECIMAL(7, 2),
    Electronegativity DECIMAL(7, 4),
    FirstIonization DECIMAL(7, 2),
    Density DECIMAL(10, 8),
    MeltingPoint DECIMAL(7, 2),
    BoilingPoint DECIMAL(7, 2),
    NumberOfIsotopes INT,
    Discoverer VARCHAR(100),
    Year INT,
    SpecificHeat DECIMAL(7, 4),
    NumberofShells INT,
    NumberofValence INT
);

<<<<<<< HEAD:chemical_property.sql
LOAD DATA INFILE 'periodic.csv'
=======
LOAD DATA INFILE 'periodic.csv'
>>>>>>> 28c34b0b16789196dac36911489025c340c4dbb8:chemical_property.sql
INTO TABLE chemical_properties
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 LINES;
