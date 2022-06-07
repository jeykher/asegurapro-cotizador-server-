const express = require('express');
const path = require('path');

const router = express.Router();

router.route('/').get((req, res, next) =>{
    res.send("Server on development mode.");
});

module.exports = router;