CREATE TABLE recipes (
     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
     title VARCHAR(100) NOT NULL,
     description TEXT NOT NULL,
     duration VARCHAR(50),
     difficulty ENUM('Facile', 'Moyen', 'Difficile') NOT NULL,
     servings INT NOT NULL,
     instructions TEXT NOT NULL,
     picture TEXT NOT NULL,
     ingredients TEXT NOT NULL
);

INSERT INTO recipes (title, description, duration, difficulty, servings, instructions, picture, ingredients) 
VALUES 
("Flan pâtissier", "Un délicieux flan crémeux à la vanille.", "5 heures", "Facile", 8, 
"1. Faire chauffer le lait avec la vanille.\n2. Mélanger les œufs, le sucre et la fécule.\n3. Ajouter le lait chaud et remettre sur feu doux.\n4. Cuire et verser dans un moule.\n5. Cuire au four.\n5. Laisser reposer 4 heures au frais. ", 
"https://www.monquotidienautrement.com/wp-content/uploads/2020/04/flan-parisien-7087-790x430.jpg", "lait, oeufs, sucre, gousse de vanille, fécule de maïs");

INSERT INTO recipes (title, description, duration, difficulty, servings, instructions, picture, ingredients) 
VALUES 
("Gâteau au chocolat", 
"Un délicieux gâteau au chocolat fondant et gourmand.", "45 minutes", "Moyen", 8, 
"1. Préchauffer le four à 180°C.\n2. Faire fondre le chocolat et le beurre au bain-marie.\n3. Mélanger les œufs et le sucre jusqu'à blanchiment.\n4. Ajouter la farine, puis le chocolat fondu.\n5. Verser dans un moule beurré et enfourner 25 min.\n6. Laisser tiédir avant de déguster.", 
"https://unsplash.com/fr/photos/gateau-au-chocolat-sur-plaque-de-ceramique-blanche-2UeBOL7UD34", 
"chocolat noir, beurre, sucre, œufs, farine");

INSERT INTO recipes (title, description, duration, difficulty, servings, instructions, picture, ingredients) 
VALUES 
("Tarte aux fraises", 
"Une tarte aux fraises fraîche et gourmande avec une crème pâtissière onctueuse.", "1 heure", "Moyen", 8, 
"1. Préparer la pâte sablée et la faire cuire à blanc.\n2. Réaliser une crème pâtissière et la laisser refroidir.\n3. Étaler la crème sur le fond de tarte refroidi.\n4. Disposer les fraises coupées sur la crème.\n5. Napper d’un peu de confiture pour la brillance.\n6. Réserver au frais avant de servir.", 
"https://l-herboriste.com/wp-content/uploads/2021/04/Tarte-aux-fraises.jpg", 
"farine, beurre, sucre, œufs, lait, vanille, fraises, sucre glace");


-- CREATE TABLE ingredients (
--     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
--     name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE recipe_ingredients (
--     recipe_id INT NOT NULL,
--     ingredient_id INT NOT NULL,
--     quantity DECIMAL(5,2) NOT NULL, -- Ex: 250.00
--     unit VARCHAR(20) NOT NULL, -- Ex: g, ml, c.à.s, etc.
--     PRIMARY KEY (recipe_id, ingredient_id),
--     FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
--     FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
-- );
