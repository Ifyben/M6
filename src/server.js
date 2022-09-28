import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";

const server = express();

const port = process.env.PORT || 3001

// ******************************* MIDDLEWARES ************************************

server.use(cors());
server.use(express.json());

// ******************************* ROUTES *****************************************

// ******************************* ERROR HANDLERS *********************************

server.listen(port, () => {
    console.table(listEndpoints(server));

    console.log(`Server running on port ${port}`);
    
})