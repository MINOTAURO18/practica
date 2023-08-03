import express from "express";
import ruta from './routes/index.js'
const PORT = 3001;
const server = express();


server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


server.listen(PORT, () => {
  console.log(`Server connect in PORT ${PORT}`);
});


server.use(ruta)
server.use(express.json());

