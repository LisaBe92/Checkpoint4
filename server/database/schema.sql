-- Table recipes déjà existante
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

-- Insertion des recettes
INSERT INTO recipes (title, description, duration, difficulty, servings, instructions, picture, ingredients) 
VALUES 
("Flan pâtissier", "Un délicieux flan crémeux à la vanille.", "5 heures", "Facile", 8, 
"1. Faire chauffer le lait avec la vanille.\n2. Mélanger les œufs, le sucre et la fécule.\n3. Ajouter le lait chaud et remettre sur feu doux.\n4. Cuire et verser dans un moule.\n5. Cuire au four.\n5. Laisser reposer 4 heures au frais. ", 
"https://www.monquotidienautrement.com/wp-content/uploads/2020/04/flan-parisien-7087-790x430.jpg", "lait, oeufs, sucre, gousse de vanille, fécule de maïs"),
("Gâteau au chocolat", 
"Un délicieux gâteau au chocolat fondant et gourmand.", "45 minutes", "Moyen", 8, 
"1. Préchauffer le four à 180°C.\n2. Faire fondre le chocolat et le beurre au bain-marie.\n3. Mélanger les œufs et le sucre jusqu'à blanchiment.\n4. Ajouter la farine, puis le chocolat fondu.\n5. Verser dans un moule beurré et enfourner 25 min.\n6. Laisser tiédir avant de déguster.", 
"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
"chocolat noir, beurre, sucre, œufs, farine"),
("Tarte aux fraises", 
"Une tarte aux fraises fraîche et gourmande avec une crème pâtissière onctueuse.", "1 heure", "Moyen", 8, 
"1. Préparer la pâte sablée et la faire cuire à blanc.\n2. Réaliser une crème pâtissière et la laisser refroidir.\n3. Étaler la crème sur le fond de tarte refroidi.\n4. Disposer les fraises coupées sur la crème.\n5. Napper d’un peu de confiture pour la brillance.\n6. Réserver au frais avant de servir.", 
"https://l-herboriste.com/wp-content/uploads/2021/04/Tarte-aux-fraises.jpg", 
"farine, beurre, sucre, œufs, lait, vanille, fraises, sucre glace");

-- Table ingredients
CREATE TABLE ingredients (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(100) NOT NULL
);

-- Table recipe_ingredients
CREATE TABLE recipe_ingredients (
    recipe_id INT NOT NULL,
    ingredient_id INT NOT NULL,
    quantity DECIMAL(5,2) NOT NULL, -- Ex: 250.00
    unit VARCHAR(20) NOT NULL, -- Ex: g, ml, c.à.s, etc.
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(id) ON DELETE CASCADE,
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(id) ON DELETE CASCADE
);

-- Insérer des ingrédients dans la table ingredients
INSERT INTO ingredients (name) VALUES
('Lait'),
('Œufs'),
('Sucre'),
('Gousse de vanille'),
('Fécule de maïs'),
('Chocolat noir'),
('Beurre'),
('Farine'),
('Fraises'),
('Sucre glace');

-- Flan pâtissier
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(1, 1, 1.00, 'L'),  -- Lait
(1, 2, 4.00, 'unités'),  -- Œufs
(1, 3, 150.00, 'g'),  -- Sucre
(1, 4, 1.00, 'gousse'),  -- Gousse de vanille
(1, 5, 50.00, 'g');  -- Fécule de maïs

-- Gâteau au chocolat
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(2, 6, 200.00, 'g'),  -- Chocolat noir
(2, 7, 150.00, 'g'),  -- Beurre
(2, 3, 100.00, 'g'),  -- Sucre
(2, 2, 3.00, 'unités'),  -- Œufs
(2, 8, 200.00, 'g');  -- Farine

-- Tarte aux fraises
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(3, 8, 200.00, 'g'),  -- Farine
(3, 7, 150.00, 'g'),  -- Beurre
(3, 3, 100.00, 'g'),  -- Sucre
(3, 2, 3.00, 'unités'),  -- Œufs
(3, 1, 250.00, 'ml'),  -- Lait
(3, 9, 1.00, 'gousse'),  -- Vanille
(3, 10, 300.00, 'g');  -- Fraises
