const express = require("express");
const router = express.Router();

router.post('/youtube', async (req, res) => {
    const { ytVidUrl } = req.body;
    try {
        const { ytdown } = require("nayan-media-downloader")
        let URL = await ytdown(ytVidUrl)
        res.json({URL})
    } catch (error) {
        res.status(400).json({error: error})
    }
})

module.exports = router;