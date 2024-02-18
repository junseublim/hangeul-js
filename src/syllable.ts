import { isHangeulSyllable, hasJongSung } from "./utils";
import {
  CHOSUNG,
  CHOSUNG_OFFSET,
  JUNGSUNG,
  JUNGSUNG_OFFSET,
  JONGSUNG,
  NUMBER_OF_JONGSUNG,
  HANGEUL_OFFSET,
} from "./constants";

const throwErrorOnNotHangeul = (letter: string) => {
  if (!isHangeulSyllable(letter)) {
    throw new Error("한글 음절만 입력 가능합니다.");
  }
};

export const getChoSung = (letter: string) => {
  throwErrorOnNotHangeul(letter);

  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return CHOSUNG[Math.floor(code / CHOSUNG_OFFSET)];
};

export const getJungSung = (letter: string) => {
  throwErrorOnNotHangeul(letter);

  const choSung = getChoSung(letter);
  const choSungIndex = CHOSUNG.indexOf(choSung);
  const code =
    letter.charCodeAt(0) - HANGEUL_OFFSET - choSungIndex * CHOSUNG_OFFSET;
  return JUNGSUNG[Math.floor(code / JUNGSUNG_OFFSET)];
};

export const getJongSung = (letter: string) => {
  throwErrorOnNotHangeul(letter);

  if (!hasJongSung(letter)) {
    return "";
  }

  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  return JONGSUNG[(code % NUMBER_OF_JONGSUNG) - 1];
};
