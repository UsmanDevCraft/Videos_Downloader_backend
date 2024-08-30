const express = require("express");
const router = express.Router();
const { ytdown } = require("nayan-media-downloader");

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