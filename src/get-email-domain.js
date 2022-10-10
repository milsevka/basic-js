const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 let rever = email.split('').reverse().join('')
 let res = rever.split('@')[0];
 return res.split('').reverse().join('')
}

module.exports = {
  getEmailDomain
};
