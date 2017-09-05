-- <M>
-- Universe database creation.
-- </M>

CREATE DATABASE IF NOT EXISTS universe;


-- <nn>
-- Table1: stars according types
-- </nn>
CREATE TABLE IF NOT EXISTS universe.tbl_stars(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	strClass VARCHAR(5) NOT NULL,
	strColor VARCHAR(32) NOT NULL,
	strTmprtr DECIMAL(10,3) NOT NULL,
	strMass DECIMAL(10,3) NOT NULL,
	strRad DECIMAL(10,3) NOT NULL,
	strLum DECIMAL(10,3) NOT NULL,
	strDesc TEXT NOT NULL,
	strPicFl VARCHAR(128) NOT NULL
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_bin COMMENT='Stars with AUT_INC id.';

-- <nn>
-- Upload tbl_stars from rnd_gen TXT file.
-- </nn>
LOAD DATA LOCAL INFILE 'F:/XAMPP/htdocs/SPACE_GAME/DATA/stars_0.txt'
INTO TABLE universe.tbl_stars 
FIELDS TERMINATED BY '|'
(strClass,strColor,strTmprtr,strMass,strRad,strLum,strDesc,strPicFl)
SET id = NULL;