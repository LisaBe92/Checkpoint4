-- Table recipes déjà existante
CREATE TABLE recipes (
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    duration VARCHAR(50),
    difficulty ENUM('Facile', 'Moyen', 'Difficile') NOT NULL,
    servings INT NOT NULL,
    instructions TEXT NOT NULL,
    picture TEXT NOT NULL
);

-- Insertion des recettes
INSERT INTO recipes (title, description, duration, difficulty, servings, instructions, picture) 
VALUES 
("Flan pâtissier", "Un délicieux flan crémeux à la vanille.", "5 heures", "Facile", 8, 
"1. Faire chauffer le lait avec la vanille.\n2. Mélanger les œufs, le sucre et la fécule.\n3. Ajouter le lait chaud et remettre sur feu doux.\n4. Cuire et verser dans un moule.\n5. Cuire au four.\n5. Laisser reposer 4 heures au frais. ", 
"https://www.monquotidienautrement.com/wp-content/uploads/2020/04/flan-parisien-7087-790x430.jpg"),

("Gâteau au chocolat", 
"Un délicieux gâteau au chocolat fondant et gourmand.", "45 minutes", "Moyen", 8, 
"1. Préchauffer le four à 180°C.\n2. Faire fondre le chocolat et le beurre au bain-marie.\n3. Mélanger les œufs et le sucre jusqu'à blanchiment.\n4. Ajouter la farine, puis le chocolat fondu.\n5. Verser dans un moule beurré et enfourner 25 min.\n6. Laisser tiédir avant de déguster.", 
"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"),

("Tarte aux fraises", 
"Une tarte aux fraises fraîche et gourmande avec une crème pâtissière onctueuse.", "1 heure", "Moyen", 8, 
"1. Préparer la pâte sablée et la faire cuire à blanc.\n2. Réaliser une crème pâtissière et la laisser refroidir.\n3. Étaler la crème sur le fond de tarte refroidi.\n4. Disposer les fraises coupées sur la crème.\n5. Napper d’un peu de confiture pour la brillance.\n6. Réserver au frais avant de servir.", 
"https://l-herboriste.com/wp-content/uploads/2021/04/Tarte-aux-fraises.jpg"),

("Cookies aux pépites de chocolat", "Des cookies moelleux et croustillants à souhait.", "30 minutes", "Facile", 6,
"1. Préchauffer le four à 180°C.\n2. Mélanger beurre, sucre, œufs, farine, levure et pépites.\n3. Former des boules et déposer sur une plaque.\n4. Cuire 12 à 15 min.\n5. Laisser refroidir avant de déguster.",
"https://images.unsplash.com/photo-1599785209707-28b3ac2b5d64"),

("Madeleines", "De petites douceurs parfaites pour le goûter.", "45 minutes", "Facile", 8,
"1. Préchauffer le four à 200°C.\n2. Fouetter les œufs et le sucre.\n3. Ajouter farine, levure, beurre fondu et zeste.\n4. Répartir dans les moules.\n5. Cuire 10-12 min.",
"https://images.unsplash.com/photo-1620842258481-241cb6e4cdd2"),

("Clafoutis aux cerises", "Un dessert léger et fruité de saison.", "1 heure", "Facile", 6,
"1. Préchauffer le four à 180°C.\n2. Mélanger les œufs, sucre, lait, farine.\n3. Verser sur les cerises dans un moule.\n4. Cuire 35-40 min.",
"https://images.unsplash.com/photo-1564836235916-7f82d6a91d3a"),

("Cheesecake", "Un dessert crémeux avec une base biscuitée croustillante.", "6 heures", "Moyen", 8,
"1. Préparer la base avec biscuits écrasés et beurre fondu.\n2. Mélanger fromage frais, sucre, œufs.\n3. Cuire 45 min au four, puis réfrigérer 4h.",
"https://images.unsplash.com/photo-1589987607627-57c1d8d4e39e"),

("Moelleux au citron", "Un gâteau léger au goût frais de citron.", "50 minutes", "Facile", 6,
"1. Préchauffer le four.\n2. Mélanger les ingrédients.\n3. Verser dans un moule et enfourner 30 min.\n4. Arroser d’un sirop au citron.",
"https://images.unsplash.com/photo-1512058564366-18510be2db19"),

("Muffins myrtilles", "Muffins moelleux et fruités parfaits pour le petit-déjeuner.", "40 minutes", "Facile", 6,
"1. Préchauffer le four.\n2. Mélanger les ingrédients secs, puis humides.\n3. Ajouter les myrtilles.\n4. Verser dans les moules.\n5. Cuire 25 min.",
"https://images.unsplash.com/photo-1562440499-bb4c130735eb"),

("Brownie", "Un brownie fondant au cœur intense en chocolat.", "40 minutes", "Facile", 8,
"1. Faire fondre chocolat et beurre.\n2. Ajouter sucre, œufs, farine.\n3. Verser dans un moule.\n4. Cuire 25 min.",
"https://images.unsplash.com/photo-1600185365295-cf5f0b53544a"),

("Crêpes sucrées", "Des crêpes légères pour un goûter rapide.", "20 minutes", "Facile", 4,
"1. Mélanger farine, œufs, lait, sucre.\n2. Laisser reposer 30 min.\n3. Cuire les crêpes dans une poêle chaude.",
"https://images.unsplash.com/photo-1614691799746-39eaa9a03854"),

("Chouquettes", "Petits choux aériens et saupoudrés de sucre perlé.", "1 heure", "Difficile", 6,
"1. Préparer la pâte à choux.\n2. Dresser des petits tas.\n3. Saupoudrer de sucre perlé.\n4. Cuire à 180°C 25 min.",
"https://images.unsplash.com/photo-1587499529576-b7fbb2dc9c3e"),

("Tiramisu", "Un classique italien crémeux et gourmand.", "4 heures", "Moyen", 6,
"1. Séparer les blancs des jaunes.\n2. Fouetter les jaunes avec sucre, mascarpone.\n3. Monter les blancs et les incorporer.\n4. Tremper les biscuits dans le café.\n5. Monter en couches.\n6. Réfrigérer 3h minimum.",
"https://images.unsplash.com/photo-1620828229014-4a4a9ddfa437");

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
('Sucre glace'),
('Levure chimique'),
('Pépites de chocolat'),
('Citron'),
('Cerises'),
('Biscuits'),
('Fromage frais'),
('Myrtilles'),
('Mascarpone'),
('Biscuits cuillère'),
('Café'),
('Cacao'),
('Eau'),
('Sucre perlé');

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

-- Cookies aux pépites de chocolat
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(4, 8, 250.00, 'g'),  -- Farine
(4, 7, 125.00, 'g'),  -- Beurre
(4, 3, 100.00, 'g'),  -- Sucre
(4, 2, 2.00, 'unités'),  -- Œufs
(4, 11, 1.00, 'sachet'),  -- Levure chimique
(4, 12, 150.00, 'g');  -- Pépites de chocolat

-- Madeleines
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(5, 2, 3.00, 'unités'),  -- Œufs
(5, 3, 150.00, 'g'),  -- Sucre
(5, 8, 200.00, 'g'),  -- Farine
(5, 11, 1.00, 'sachet'),  -- Levure chimique
(5, 7, 100.00, 'g'),  -- Beurre
(5, 13, 1.00, 'zeste');  -- Citron

-- Clafoutis aux cerises
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(6, 2, 3.00, 'unités'),  -- Œufs
(6, 3, 100.00, 'g'),  -- Sucre
(6, 1, 300.00, 'ml'),  -- Lait
(6, 8, 100.00, 'g'),  -- Farine
(6, 14, 300.00, 'g');  -- Cerises

-- Cheesecake
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(7, 15, 200.00, 'g'),  -- Biscuits
(7, 7, 100.00, 'g'),  -- Beurre
(7, 16, 400.00, 'g'),  -- Fromage frais
(7, 3, 150.00, 'g'),  -- Sucre
(7, 2, 3.00, 'unités');  -- Œufs

-- Moelleux au citron
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(8, 8, 200.00, 'g'),  -- Farine
(8, 2, 3.00, 'unités'),  -- Œufs
(8, 3, 150.00, 'g'),  -- Sucre
(8, 7, 100.00, 'g'),  -- Beurre
(8, 13, 1.00, 'zeste');  -- Citron

-- Muffins myrtilles
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(9, 8, 250.00, 'g'),  -- Farine
(9, 3, 150.00, 'g'),  -- Sucre
(9, 2, 2.00, 'unités'),  -- Œufs
(9, 1, 100.00, 'ml'),  -- Lait
(9, 11, 1.00, 'sachet'),  -- Levure chimique
(9, 17, 150.00, 'g');  -- Myrtilles

-- Brownie
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(10, 6, 200.00, 'g'),  -- Chocolat noir
(10, 7, 150.00, 'g'),  -- Beurre
(10, 3, 150.00, 'g'),  -- Sucre
(10, 2, 3.00, 'unités'),  -- Œufs
(10, 8, 100.00, 'g');  -- Farine

-- Crêpes sucrées
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(11, 8, 250.00, 'g'),  -- Farine
(11, 2, 3.00, 'unités'),  -- Œufs
(11, 1, 500.00, 'ml'),  -- Lait
(11, 3, 50.00, 'g');  -- Sucre

-- Chouquettes
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(12, 8, 150.00, 'g'),  -- Farine
(12, 7, 100.00, 'g'),  -- Beurre
(12, 2, 4.00, 'unités'),  -- Œufs
(12, 22, 250.00, 'ml'),  -- Eau
(12, 23, 50.00, 'g');  -- Sucre perlé

-- Tiramisu
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit) VALUES
(13, 2, 3.00, 'unités'),  -- Œufs
(13, 3, 100.00, 'g'),  -- Sucre
(13, 18, 250.00, 'g'),  -- Mascarpone
(13, 19, 200.00, 'g'),  -- Biscuits cuillère
(13, 20, 200.00, 'ml'),  -- Café
(13, 21, 20.00, 'g');  -- Cacao

-- Vérifier que tous les IDs de recettes existent dans la table recipes
SELECT id FROM recipes;

-- Vérifier que tous les IDs d'ingrédients existent dans la table ingredients
SELECT id FROM ingredients;

-- Vérifier les références invalides dans la table recipe_ingredients
SELECT * 
FROM recipe_ingredients
WHERE recipe_id NOT IN (SELECT id FROM recipes)
   OR ingredient_id NOT IN (SELECT id FROM ingredients);

-- Supprimer les références invalides si nécessaire
DELETE FROM recipe_ingredients
WHERE recipe_id NOT IN (SELECT id FROM recipes)
   OR ingredient_id NOT IN (SELECT id FROM ingredients);
