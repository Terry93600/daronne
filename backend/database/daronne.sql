-- Se connecter à MySQL : mysql -h hostname -u username -p
-- Afficher les bases de données : SHOW DATABASES;
-- Utiliser une base de données : USE database_name;
-- Afficher les tables de la base de données : SHOW TABLES;
-- Afficher la structure d'une table de données : DESCRIBE table_name;
-- Charger un fichier SQL (exemple : daronne.sql) : source database/daronne.sql;

DROP DATABASE IF EXISTS daronne;

CREATE DATABASE daronne;

USE daronne;

CREATE TABLE daronne.categories (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE
);

INSERT INTO daronne.categories (nom) VALUES
('tableaux'),
('cadre'),
('vase');

CREATE TABLE daronne.tableaux (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL UNIQUE,
    prix DECIMAL(10,2) NOT NULL,
    description TEXT,
    image TEXT,
    categories_id INT UNSIGNED,
    FOREIGN KEY (categories_id) REFERENCES daronne.categories(id)
);

INSERT INTO daronne.tableaux (nom, prix, description, image, categories_id) VALUES
('Champetre', '12.00', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur nisi sapiente, debitis animi eveniet odio iure dolores impedit molestias incidunt reiciendis accusamus sequi nesciunt nobis consequuntur adipisci, iste repellat doloremque?', "https://res.cloudinary.com/dbswf4zf2/image/upload/v1716215989/daronne/u2ehveuqsohg1qzekhfb.png", 1),

('Texas', '10.00', 'cacaca', "https://res.cloudinary.com/dbswf4zf2/image/upload/v1716216032/daronne/fzhpyun5ebxe697c7spb.png", 2),

('Vase Papillons', '10.00', 'cacaca', "https://res.cloudinary.com/dbswf4zf2/image/upload/v1716216091/daronne/woptyongacbgpbiz2ol5.png", 3);
