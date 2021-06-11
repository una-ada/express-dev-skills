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
router.post('/', skillsCtrl.create);
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show);
router.delete('/:id', skillsCtrl.deleteOne);

/*----- Exports --------------------------------------------------------------*/
module.exports = router;
