import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// Connect immediately
connectDB();

// Define Schemas
const testimonialSchema = new mongoose.Schema({
  quote: { type: String, required: true },
  name: { type: String, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true },
  logo: { type: String, default: "/placeholder.svg" },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  tags: [{ type: String }],
  hasImage: { type: Boolean, default: false },
});

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  logo: { type: String, default: "/placeholder.svg" },
});

// Create Models
const Testimonial = mongoose.model("Testimonial", testimonialSchema);
const Project = mongoose.model("Project", projectSchema);
const Experience = mongoose.model("Experience", experienceSchema);

// Export Models
export { Testimonial, Project, Experience };
