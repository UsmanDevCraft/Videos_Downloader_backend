const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

//routes for all pages
app.get("", (req, res)=>{
    res.send("App working fine 🥰");
})
app.use("/api", require("./routes/youtube.js"));
app.use("/api", require("./routes/facebook.js"));
app.use("/api", require("./routes/instagram.js"));
app.use("/api", require("./routes/allShortsDownloader.js"));

app.listen(port, ()=>{
    console.log(`Server running fine on http://localhost:${port}`)
})