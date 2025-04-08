const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3500;

//serve static files
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
//app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
