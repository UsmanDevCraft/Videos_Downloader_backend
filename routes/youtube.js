const express = require("express");
const ytdown = require("nayan-media-downloader");
const router = express.Router();

router.post('/youtube', async (req, res) => {
    const { ytVidUrl } = req.body;
    try {
        let URL = await ytdown(ytVidUrl)
        res.json({URL})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;