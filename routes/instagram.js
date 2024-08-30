const express = require("express");
const router = express.Router();
const { ndown } = require("nayan-media-downloader");

router.post('/instagram', async (req, res) => {
    const { instaVidUrl } = req.body;
    try {
        let URL = await ndown(instaVidUrl)
        res.json({URL})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

module.exports = router;