const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb://auth_app_user:auth_app_user123@ac-idgyp8q-shard-00-00.wanbu59.mongodb.net:27017,ac-idgyp8q-shard-00-01.wanbu59.mongodb.net:27017,ac-idgyp8q-shard-00-02.wanbu59.mongodb.net:27017/auth_db?ssl=true&replicaSet=atlas-6ummqe-shard-0&authSource=admin&appName=Cluster0",
  )

  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log(err));

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
