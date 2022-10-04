import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import { testConnection, connectDB } from "./db/index.js"; //1.

const server = express();

const port = process.env.PORT || 3001

// ******************************* MIDDLEWARES ************************************

server.use(cors());
server.use(express.json());

// ******************************* ROUTES *****************************************

// ******************************* ERROR HANDLERS *********************************

server.listen(port, async() => {
    console.table(listEndpoints(server));

    console.log(`Server running on port ${port}`);
    await testConnection();
    await connectDB(); 
    
})