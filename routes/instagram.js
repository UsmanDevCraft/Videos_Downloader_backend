const express = require("express");
const router = express.Router();

router.post('/instagram', async (req, res) => {
    const { instaVidUrl } = req.body;
    try {
        const { ndown } = require("nayan-media-downloader")
        let URL = await ndown(instaVidUrl)
        res.json({URL})
    } catch (error) {
        res.status(400).json({error: error})
    }
})

module.exports = router;