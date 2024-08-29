const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

//routes for all pages
app.use("/api", require("./routes/youtube"));
app.use("/api", require("./routes/facebook"));
app.use("/api", require("./routes/instagram"));
app.use("/api", require("./routes/allShortsDownloader"));

app.listen(port, ()=>{
    console.log(`Server running fine on http://localhost:${port}`)
})