const {
  CHOSUNG,
  ONLY_CHOSUNG,
  JUNGSUNG,
  ONLY_JONGSUNG,
} = require("./constants");

const isChoSung = (char) => CHOSUNG.includes(char);
const isOnlyJongSong = (char) => ONLY_JONGSUNG.includes(char);
const isConsonant = (cahr) => isChoSung(cahr) || isOnlyJongSong(cahr);
const isJungSung = (char) => JUNGSUNG.includes(char);
const isOnlyChosung = (char) => ONLY_CHOSUNG.includes(char);
const isHangeulJamo = (char) => isConsonant(char) || isJungSung(char);
const isHangeulSyllables = (char) => {
  const code = char.charCodeAt(0);
  return code >= 0xac00 && code <= 0xd7a3;
};
const isHangeul = (char) => isHangeulJamo(char) || isHangeulSyllables(char);

module.exports = {
  isOnlyJongSong,
  isJungSung,
  isConsonant,
  isOnlyChosung,
  isHangeulJamo,
  isHangeulSyllables,
  isHangeul,
};
