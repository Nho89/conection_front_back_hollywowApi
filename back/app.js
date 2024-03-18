import 'dotenv/config';
import {PORT} from "./config.js"
import connection_db from "./database/connection_db.js";
import Poster from "./models/PosterModel.js"
import express from  "express";
import PosterRouter from "./routes/PosterRouter.js";
import cors from  "cors";

export const app = express();


app.use(express.json(),cors());
app.use('/api' , PosterRouter);

try {
    await connection_db.authenticate();
    console.log('✅ Connection has been established successfully.');
    await Poster.sync();
    console.log(`synchronized successfully`)
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }

  export const server = app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
  })