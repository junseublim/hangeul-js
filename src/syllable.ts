import { isHangeulSyllable } from "./utils";
import { wrapSingleCharValidator, wrapValidator } from "./validator";
import {
  CHOSUNG,
  JUNGSUNG,
  HANGEUL_OFFSET,
  NUMBER_OF_JONGSUNG,
  JONGSUNG,
  CHOSUNG_OFFSET,
  JUNGSUNG_OFFSET,
} from "./constants";
import { hasJongsung } from "./utils";

const wrapHangeulSyllableValidator = wrapValidator(
  isHangeulSyllable,
  "한글 음절만 입력 가능합니다."
);

const getChosung = (letter: string) => {
  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return CHOSUNG[Math.floor(code / CHOSUNG_OFFSET)];
};

const getJungsung = (letter: string) => {
  const choSung = getChosung(letter);
  const choSungIndex = CHOSUNG.indexOf(choSung);
  const code =
    letter.charCodeAt(0) - HANGEUL_OFFSET - choSungIndex * CHOSUNG_OFFSET;
  return JUNGSUNG[Math.floor(code / JUNGSUNG_OFFSET)];
};

const getJongsung = (letter: string) => {
  if (!hasJongsung(letter)) {
    return "";
  }

  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return JONGSUNG[(code % NUMBER_OF_JONGSUNG) - 1];
};

const wrappedGetChosung = wrapSingleCharValidator(
  wrapHangeulSyllableValidator(getChosung)
);
const wrappedGetJungsung = wrapSingleCharValidator(
  wrapHangeulSyllableValidator(getJungsung)
);
const wrappedGetJongsung = wrapSingleCharValidator(
  wrapHangeulSyllableValidator(getJongsung)
);

export {
  wrappedGetChosung as getChosung,
  wrappedGetJongsung as getJongsung,
  wrappedGetJungsung as getJungsung,
};
