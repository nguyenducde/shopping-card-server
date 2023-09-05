import mongoose from 'mongoose';
import envConfig from './envConfig.js';
const db = envConfig.SERVER;
const server = mongoose;

export const connect = () => {
  server
    .connect(db, { useNewUrlParser: "true", useUnifiedTopology: "true" })
    .then(() => {
      console.log("connected to mongoose");
    })
    .catch((err) => {
      throw err;
    });
};
