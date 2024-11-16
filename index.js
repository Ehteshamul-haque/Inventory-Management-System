import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import routes from "./Routes/index.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(routes);

// Server Health
app.get("/api/health", (req, res) => res.send("Server is running..."));

app.listen(PORT, () => console.log(`Server is running on PORT:${PORT}`));