const {
  CHOSUNG,
  ONLY_CHOSUNG,
  JUNGSUNG,
  ONLY_JONGSUNG,
  HANGEUL_OFFSET,
  NUMBER_OF_JONGSUNG,
} = require("./constants");

// 초성인지 여부
const isChoSung = (char) => CHOSUNG.includes(char);

// 초성만 가능한 자음인지 여부
const isOnlyChosung = (char) => ONLY_CHOSUNG.includes(char);

// 종성만 가능한 자음인지 여부
const isOnlyJongSong = (char) => ONLY_JONGSUNG.includes(char);

// 자음인지 여부
const isConsonant = (cahr) => isChoSung(cahr) || isOnlyJongSong(cahr);

// 모음인지 여부
const isVowel = (char) => JUNGSUNG.includes(char);

// 한글 자음, 모음인지 여부
const isHangeulJamo = (char) => isConsonant(char) || isVowel(char);

// 한글 음절인지 여부
const isHangeulSyllables = (char) => {
  const code = char.charCodeAt(0);
  return code >= 0xac00 && code <= 0xd7a3;
};

const hasJongSung = (char) =>
  (char.charCodeAt(0) - HANGEUL_OFFSET) % NUMBER_OF_JONGSUNG !== 0;

// 한글인지 여부
const isHangeul = (char) => isHangeulJamo(char) || isHangeulSyllables(char);

module.exports = {
  isOnlyJongSong,
  isVowel,
  isConsonant,
  isOnlyChosung,
  isHangeulJamo,
  isHangeulSyllables,
  isHangeul,
  hasJongSung,
};
