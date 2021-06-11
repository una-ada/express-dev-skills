/**
 * Skills router.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.09
 * @module routes/skills
 * @see module:controllers/skills
 * @see module:model/skill
 */

/*----- Imports --------------------------------------------------------------*/
const express = require('express'),
  /** @const {express.Router} router The skills router. */
  router = express.Router(),
  skillsCtrl = require('../controllers/skills');

/*----- Routes ---------------------------------------------------------------*/
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);
router.get('/new', skillsCtrl.new);

/*----- Exports --------------------------------------------------------------*/
module.exports = router;
