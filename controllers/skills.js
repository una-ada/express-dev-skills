/**
 * Skills controllers.
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.09
 * @module controllers/skills
 * @see module:routes/skills
 * @see module:model/skill
 */

/*----- Imports --------------------------------------------------------------*/
const Skill = require('../models/skill');

/*----- Methods --------------------------------------------------------------*/
/**
 * Render the skills index view.
 * @param {express.Request} req
 * @param {express.Response} res
 */
const index = function (req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
    });
  },
  /**
   * Render a single skill view.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  show = function (req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
    });
  },
  /**
   * Render a new skill form view.
   * @param {express.Request} req
   * @param {express.Response} res
   */
  newSkill = function (req, res) {
    res.render('/skills/new');
  };

/*----- Exports --------------------------------------------------------------*/
module.exports = {
  index,
  show,
  new: newSkill,
};
