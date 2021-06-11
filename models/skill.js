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
 * @property {number} confidence How adept you are at the skill.
 */
/** @const {Skill[]} skills Skills list. */
const skills = [
  { id: 148755, skill: 'JavaScript', confidence: 5 },
  { id: 150269, skill: 'HTML', confidence: 5 },
  { id: 151663, skill: 'CSS', confidence: 5 },
  { id: 334505, skill: 'SCSS', confidence: 5 },
  { id: 348738, skill: 'Java', confidence: 4 },
  { id: 361627, skill: 'PHP', confidence: 3 },
  { id: 375927, skill: 'SQL', confidence: 3 },
  { id: 390269, skill: 'Python', confidence: 3 },
  { id: 402173, skill: 'Haskell', confidence: 2 },
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
  },
  /**
   * Create a new Skill.
   * @param {Object} skill The skill data object.
   * @param {string} skill.skill The name of the skill.
   * @param {number} skill.confidence How adept you are at the skill.
   */
  create = function (skill) {
    // Add ID to skill
    skill.id = +new Date() % 1e6;
    skills.push(skill);
  },
  /**
   * Delete a single Skill by ID.
   * @param {number} id The ID of the Skill to be deleted.
   */
  deleteOne = function (id) {
    (i =>
      // Check that Skill exists
      ~i &&
      // Remove Skill from skills[]
      skills.splice(i, 1))(
      // Pass in index of Skill
      skills.findIndex(
        // Find index of Skill with specified ID
        skill => skill.id === +id
      )
    );
  };

/*----- Exports --------------------------------------------------------------*/
module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
};
