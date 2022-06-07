const express = require('express');
const path = require('path');

const router = express.Router();

router.route('/auto/:id').get((req, res, next) => {
    res.sendFile(
        path.join(__dirname, '../../build', 'index.html')
    );
});
router.route('/hogar/:id').get((req, res, next) => {
    res.sendFile(
        path.join(__dirname, '../../build', 'index.html')
    );
});
router.route('/viajero/:id').get((req, res, next) => {
    res.sendFile(
        path.join(__dirname, '../../build', 'index.html')
    );
});
router.route('/cotizar/:id').get((req, res, next) => {
    res.sendFile(
        path.join(__dirname, '../../build', 'index.html')
    );
});
router.route('/pdf').get((req, res, next) => {
    res.sendFile(
        path.join(__dirname, '../../build', 'index.html')
    );
});

module.exports = router;