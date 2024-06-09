import express from 'express';
import DBConnection from './database/db.js';
import fileRouter from './routes/fileRoutes.js'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
          res.send("Hello")
});

DBConnection();

app.use("/", fileRouter);

app.listen(8000, () => {
          console.log("Server is listening on port 8000");
})