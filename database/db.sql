
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    birthDate VARCHAR(255) NOT NULL,
    identification VARCHAR(255) NOT NULL,
    profession VARCHAR(255) NOT NULL,
    monthlyIncome VARCHAR(255) NOT NULL,
    vehicle VARCHAR(255) NOT NULL,
    married BOOLEAN NOT NULL DEFAULT 0,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);