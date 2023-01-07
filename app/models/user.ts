// general imports
import { DataTypes } from "sequelize";

// import database
import db from "../../database/connect";

// create user model
const User = db.define("user", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
});

export default User;
