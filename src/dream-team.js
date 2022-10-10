const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
let meow = []
if (!Array.isArray(members)) {
  return false
}
for (let i = 0; i < members.length; i++) {
  if (typeof members[i] === 'string') {
    members[i] = members[i].trim()
    meow.push(members[i][0].toUpperCase()) 
  }

}
let res = meow.sort().join('');
return res.replace(/\s/g, '');
}

module.exports = {
  createDreamTeam
};
