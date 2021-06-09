/**
 * Skills router.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.09
 * @module routes/skills
 * @see module:controllers/skills
 */

/*----- Imports --------------------------------------------------------------*/
const express = require('express'),
  /** @const {express.Router} router The skills router. */
  router = express.Router(),
  skillsCtrl;

/*----- Routes ---------------------------------------------------------------*/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*----- Exports --------------------------------------------------------------*/
module.exports = router;
