const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainFinish: [],
  getLength() {
  return this.chainFinish.length
  },
  addLink(value) {
 this.chainFinish.push(value) 
 return this
  },
  removeLink(position) {
  if (typeof position !== 'number' || position < 1 || !Number.isInteger(position) || position > this.chainFinish.length) {
    this.chainFinish.length = 0;
    throw new Error("You can't remove incorrect link!"); 
  } else {
  this.chainFinish.splice(position-1, 1)
  }
  return this;
  },
  reverseChain() {
  this.chainFinish = this.chainFinish.reverse()
  return this
  },
  finishChain() {
  let result = []
  for (let i = 0; i < this.chainFinish.length; i++) {
    result.push(`( ${this.chainFinish[i]} )`)
  }
  this.chainFinish.length = 0;
  return result.join('~~')
  }
};

module.exports = {
  chainMaker
};
