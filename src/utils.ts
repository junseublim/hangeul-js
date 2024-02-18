import {
  CHOSUNG,
  ONLY_CHOSUNG,
  JUNGSUNG,
  ONLY_JONGSUNG,
  HANGEUL_OFFSET,
  NUMBER_OF_JONGSUNG,
} from "./constants";

// 초성인지 여부
export const isChoSung = (char: string) => CHOSUNG.includes(char);

// 초성만 가능한 자음인지 여부
export const isOnlyChosung = (char: string) => ONLY_CHOSUNG.includes(char);

// 종성만 가능한 자음인지 여부
export const isOnlyJongSong = (char: string) => ONLY_JONGSUNG.includes(char);

// 자음인지 여부
export const isJaeum = (char: string) =>
  isChoSung(char) || isOnlyJongSong(char);

// 모음인지 여부
export const isMoeum = (char: string) => JUNGSUNG.includes(char);

// 한글 자음, 모음인지 여부
export const isHangeulJamo = (char: string) => isJaeum(char) || isMoeum(char);

// 한글 음절인지 여부
export const isHangeulSyllables = (char: string) => {
  const code = char.charCodeAt(0);
  return code >= 0xac00 && code <= 0xd7a3;
};

// 한글인지 여부
export const isHangeul = (char: string) =>
  isHangeulJamo(char) || isHangeulSyllables(char);

// 종성이 있는지 여부
export const hasJongSung = (char: string) =>
  isHangeulSyllables(char) &&
  (char.charCodeAt(0) - HANGEUL_OFFSET) % NUMBER_OF_JONGSUNG !== 0;
