const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

const cors = require("cors");

const app = express();
dotenv.config();

const port = process.env.PORT || 4001;
const MONOGO_URL = process.env.MONGO_URL;

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// DB Code
try {
  mongoose.connect(MONOGO_URL);
  console.log("Conntected to MonogDB");
} catch (error) {
  console.log(error);
}

// defining routes
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
