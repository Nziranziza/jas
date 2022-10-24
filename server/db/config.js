import { Sequelize } from "sequelize";

const { DB_NAME, DB_USER, DB_HOST, DB_PASSWORD, DATABASE_URL } = process.env;

let sequelizeConnection;

if(!DATABASE_URL) {
  sequelizeConnection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: "postgres",
  });
} else {
  sequelizeConnection = new Sequelize(DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  })
}

export default sequelizeConnection;
