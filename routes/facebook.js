const express = require("express");
const router = express.Router();

router.post('/facebook', async (req, res) => {
    const { fbVidUrl } = req.body;
    try {
        const { ndown } = require("nayan-media-downloader")
        let URL = await ndown(fbVidUrl)
        res.json({URL})
    } catch (error) {
        res.status(400).json({error: error})
    }
})

module.exports = router;