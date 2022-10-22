import { Model, DataTypes } from "sequelize";

import sequelizeConnection from "../config";

class Application extends Model {}

Application.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cvUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('pending', 'dropped', 'passed'),
      defaultValue: 'pending'
    }
  },
  {
    timestamps: true,
    sequelize: sequelizeConnection,
  }
);

export default Application;
