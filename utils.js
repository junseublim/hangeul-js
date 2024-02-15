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

module.exports = {
  isOnlyJongSong,
  isJungSung,
  isConsonant,
  isOnlyChosung,
};
