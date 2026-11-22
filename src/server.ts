import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();
const PORT = 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({
        status: "healthy",
        application: "node-api",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API running at http://localhost:${PORT}`);
});
