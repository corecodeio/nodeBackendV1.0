const express = require('express');

const router = express.Router();

router.use('/', (req, res, next) => {
  res.status(400).json({message: 'Invalid enpoint'});
});

module.exports = router;