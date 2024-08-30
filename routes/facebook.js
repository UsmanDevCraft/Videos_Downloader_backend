const express = require("express");
const router = express.Router();
const { ndown } = require("nayan-media-downloader");

router.post('/facebook', async (req, res) => {
    const { fbVidUrl } = req.body;
    try {
        let URL = await ndown(fbVidUrl)
        res.json({URL})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;