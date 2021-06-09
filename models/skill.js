/**
 * Skill model (database simulation).
 * @author Una Ada <una@anarchy.website>
 * @version 2021.06.09
 * @module models/skill
 * @see module:routes/skills
 * @see module:controllers/skills
 */

/*----- Model ----------------------------------------------------------------*/
/**
 * A skill.
 * @typedef {Object} Skill
 * @property {number} id A unique integer ID.
 * @property {string} skill A name for the skill.
 * @property {number} confidence How adepts I am at the skill.
 */
/** @const {Skill[]} skills Skills list. */
const skills = [
  { id: 1, skill: 'JavaScript', confidence: 5 },
  { id: 2, skill: 'HTML', confidence: 5 },
  { id: 3, skill: 'CSS', confidence: 5 },
];

/*----- Methods --------------------------------------------------------------*/
/**
 * Get all Skills.
 * @returns {Skill[]} An array of all Skills.
 */
const getAll = function () {
    return skills;
  },
  /**
   * Get a single Skill by ID.
   * @param {number} id The ID of the requested skill.
   * @returns {Skill} The skill with the specified ID.
   */
  getOne = function (id) {
    return skills.find(skill => skill.id === +id);
  };

/*----- Exports --------------------------------------------------------------*/
module.exports = {
  getAll,
  getOne,
};
