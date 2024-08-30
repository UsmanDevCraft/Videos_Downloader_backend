const express = require("express");
const router = express.Router();
const {alldown} = require("nayan-media-downloader");

router.post('/shorts', async (req, res) => {
    const { shortsVidUrl } = req.body;
    try {
        const url = shortsVidUrl // past url

        alldown(url).then(data => {
        res.json({data})
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;