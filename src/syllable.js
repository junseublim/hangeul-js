const { isHangeulSyllables, hasJongSung } = require("./utils");
const {
  CHOSUNG,
  CHOSUNG_OFFSET,
  JUNGSUNG,
  JUNGSUNG_OFFSET,
  JONGSUNG,
  NUMBER_OF_JONGSUNG,
  HANGEUL_OFFSET,
} = require("./constants");

const throwErrorOnNotHangeul = (letter) => {
  if (!isHangeulSyllables(letter)) {
    throw new Error("한글 음절만 입력 가능합니다.");
  }
};

const getChoSung = (letter) => {
  throwErrorOnNotHangeul(letter);

  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return CHOSUNG[Math.floor(code / CHOSUNG_OFFSET)];
};

const getJungSung = (letter) => {
  throwErrorOnNotHangeul(letter);

  const chosung = getChoSung(letter);
  const chosungIndex = CHOSUNG.indexOf(chosung);
  const code =
    letter.charCodeAt(0) - HANGEUL_OFFSET - chosungIndex * CHOSUNG_OFFSET;
  return JUNGSUNG[Math.floor(code / JUNGSUNG_OFFSET)];
};

const getJongSung = (letter) => {
  throwErrorOnNotHangeul(letter);

  if (!hasJongSung(letter)) {
    return "";
  }

  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return JONGSUNG[(code % NUMBER_OF_JONGSUNG) - 1];
};

module.exports = {
  getChoSung,
  getJungSung,
  getJongSung,
};
