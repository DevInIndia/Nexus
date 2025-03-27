import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from "./routes/userRoutes.js"
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: "http://localhost:3000", // Allow requests only from Next.js frontend
  methods: ["GET", "POST"], // Allow only specific HTTP methods
  allowedHeaders: ["Content-Type"] // Allow only specific headers
}));
 // Add this line before defining routes
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

  // Middleware

app.use('/users', userRoutes);

// Sample Route
app.get('/', (req, res) => {
  res.send('MongoDB is connected to Express!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
