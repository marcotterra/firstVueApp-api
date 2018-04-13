import dotenv from "dotenv";

dotenv.config();

const configs = {
  PORT: 8000,
  DB: {
    url: process.env.MONGODB_URL,
  },
};

export default configs;
