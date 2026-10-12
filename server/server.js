import "dotenv/config";

import express from "express";
import cors from "cors";

import contactRoute from "./routes/contact.js";
import visitorsRoute from "./routes/visitors.js";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/contact", contactRoute);
app.use("/api/visitors", visitorsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
