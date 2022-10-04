import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT, NODE_ENV } =
  process.env;

  const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    port: PGPORT,
    dialect: "postgres",
    ...(NODE_ENV === "production" && {
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }),
  });
  console.log("sequelize instance created"); //Sequelize allows you to define instance methods for your model. Any instance method you define in the model can be called from the object returned by Sequelize query methods.
  
  export const testConnection = async () => {
    try {
      await sequelize.authenticate({ logging: false });
      console.log("Can be established");
    } catch (error) {
      console.log(error);
    }
  };
  
  export const connectDB = async () => {
    try {
      console.log("syncronizes all tables in connectDB"); // 5.
      await sequelize.sync({
        logging: false,
        /* force: true  */
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export default sequelize; 