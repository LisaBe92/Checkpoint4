// Importer les variables d'environnement pour la connexion à la base de données
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Créer un pool de connexions à la base de données
import mysql from "mysql2/promise";

const client = mysql.createPool({
  host: DB_HOST,
  port: Number.parseInt(DB_PORT as string),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Vérifier la connexion à la base de données
client
  .getConnection()
  .then(() => console.log("Connexion à la base de données réussie."))
  .catch((error) => {
    console.error("Erreur de connexion à la base de données :", error.message);
    process.exit(1); // Arrêter le processus si la connexion échoue
  });

// Exporter le client pour l'utiliser dans d'autres fichiers
export default client;

// Types export
import type { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";

type DatabaseClient = Pool;
type Result = ResultSetHeader;
type Rows = RowDataPacket[];

export type { DatabaseClient, Result, Rows };
