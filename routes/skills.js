/**
 * Skills router.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.09
 * @module routes/skills
 */

/*----- Imports --------------------------------------------------------------*/
const express = require('express'),
  router = express.Router();

/*----- Routes ---------------------------------------------------------------*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*----- Exports --------------------------------------------------------------*/
module.exports = router;
