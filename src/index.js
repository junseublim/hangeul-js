const { assemble } = require("./assemble");
const { disassemble } = require("./disassemble");
const { getChoSung, getJongSung, getJungSung } = require("./syllable");

module.exports = {
  assemble,
  disassemble,
  getChoSung,
  getJungSung,
  getJongSung,
};
