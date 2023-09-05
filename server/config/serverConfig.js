import mongoose from 'mongoose';
import envConfig from './envConfig.js';
const db = envConfig.SERVER;
const server = mongoose;

export const connect = () => {
  server
    .connect(
      "mongodb+srv://nguyenducde:lalanganhaivip1@cluster0.m0jj83n.mongodb.net/shopping?retryWrites=true&w=majority",
      { useNewUrlParser: "true", useUnifiedTopology: "true" }
    )
    .then(() => {
      console.log("connected to mongoose");
    })
    .catch((err) => {
      throw err;
    });
};
