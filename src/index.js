const { assemble } = require("./assemble");
const { disassemble } = require("./disassemble");
const { getChoSung, getJongSung, getJungSung } = require("./syllable");
const {
  isMoeum,
  isJaeum,
  isHangeulJamo,
  isHangeulSyllables,
  isHangeul,
  hasJongSung,
} = require("./utils");

module.exports = {
  assemble,
  disassemble,
  getChoSung,
  getJungSung,
  getJongSung,
  isMoeum,
  isJaeum,
  isHangeulJamo,
  isHangeulSyllables,
  isHangeul,
  hasJongSung,
};
