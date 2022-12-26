-- First Data
INSERT INTO dbtestjavan.user(name,gender,parent) VALUES 
("Bani","Laki-laki",""),
("Budi","Laki-laki","Bani"),
("Nilda","Perempuan","Bani"),
("Andi","Laki-laki","Bani"),
("Sigit","Perempuan","Bani"),
("Hari","Laki-laki","Budi"),
("Siti","Laki-laki","Budi"),
("Bila","Perempuan","Nilda"),
("Lesti","Perempuan","Nilda"),
("Diki","Laki-laki","Andi"),
("Doni","Laki-laki","Sigit"),
("Toni","Laki-laki","Sigit");

INSERT INTO dbtestjavan.asset(name,price) VALUES 
("Samsung Universe 9",1249),
("Samsung Galaxy Book",1499),
("iPhone 9",549),
("iPhone X",899),
("Huawei P30",499);

INSERT INTO dbtestjavan.assetperuser(userId,assetId) VALUES 
(2,1),
(2,2),
(6,3),
(7,4),
(3,5),
(8,1),
(9,5),
(9,4),
(4,1),
(10,2),
(5,5),
(11,4);

