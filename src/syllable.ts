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
import { hasJongSung } from "./utils";

const wrapHangeulSyllableValidator = wrapValidator(
  isHangeulSyllable,
  "한글 음절만 입력 가능합니다."
);

const getChoSung = (letter: string) => {
  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return CHOSUNG[Math.floor(code / CHOSUNG_OFFSET)];
};

const getJungSung = (letter: string) => {
  const choSung = getChoSung(letter);
  const choSungIndex = CHOSUNG.indexOf(choSung);
  const code =
    letter.charCodeAt(0) - HANGEUL_OFFSET - choSungIndex * CHOSUNG_OFFSET;
  return JUNGSUNG[Math.floor(code / JUNGSUNG_OFFSET)];
};

const getJongSung = (letter: string) => {
  if (!hasJongSung(letter)) {
    return "";
  }

  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return JONGSUNG[(code % NUMBER_OF_JONGSUNG) - 1];
};

const wrappedGetChoSung = wrapSingleCharValidator(
  wrapHangeulSyllableValidator(getChoSung)
);
const wrappedGetJungSung = wrapSingleCharValidator(
  wrapHangeulSyllableValidator(getJungSung)
);
const wrappedGetJongSung = wrapSingleCharValidator(
  wrapHangeulSyllableValidator(getJongSung)
);

export {
  wrappedGetChoSung as getChoSung,
  wrappedGetJongSung as getJongSung,
  wrappedGetJungSung as getJungSung,
};
