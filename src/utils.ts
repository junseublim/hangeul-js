import {
  CHOSUNG,
  ONLY_CHOSUNG,
  JUNGSUNG,
  ONLY_JONGSUNG,
  HANGEUL_OFFSET,
  NUMBER_OF_JONGSUNG,
} from "./constants";

const wrapSingleCharValidator = (fn: (text: string) => boolean) => {
  return (text: string) => {
    if (text.length !== 1) {
      throw new Error("한글자만 입력가능합니다.");
    }

    return fn(text);
  };
};

// 초성인지 여부
const isChoSung = (char: string) => CHOSUNG.includes(char);

// 초성만 가능한 자음인지 여부
const isOnlyChoSung = (char: string) => ONLY_CHOSUNG.includes(char);

// 종성만 가능한 자음인지 여부
const isOnlyJongSong = (char: string) => ONLY_JONGSUNG.includes(char);

// 자음인지 여부
const isJaeum = (char: string) => isChoSung(char) || isOnlyJongSong(char);

// 모음인지 여부
const isMoeum = (char: string) => JUNGSUNG.includes(char);

// 한글 자음, 모음인지 여부
const isHangeulJamo = (char: string) => isJaeum(char) || isMoeum(char);

// 한글 음절인지 여부
const isHangeulSyllable = (char: string) => {
  const code = char.charCodeAt(0);
  return code >= 0xac00 && code <= 0xd7a3;
};

// 한글인지 여부
const isHangeul = (char: string) =>
  isHangeulJamo(char) || isHangeulSyllable(char);

// 종성이 있는지 여부
const hasJongSung = (char: string) =>
  isHangeulSyllable(char) &&
  (char.charCodeAt(0) - HANGEUL_OFFSET) % NUMBER_OF_JONGSUNG !== 0;

const wrappedIsChoSung = wrapSingleCharValidator(isChoSung);
const wrappedIsJaeum = wrapSingleCharValidator(isJaeum);
const wrappedIsMoeum = wrapSingleCharValidator(isMoeum);
const wrappedIsHangeul = wrapSingleCharValidator(isHangeul);
const wrappedIsHangeulJamo = wrapSingleCharValidator(isHangeulJamo);
const wrappedIsHangeulSyllable = wrapSingleCharValidator(isHangeulSyllable);
const wrappedHasJongSung = wrapSingleCharValidator(hasJongSung);

export {
  wrappedIsChoSung as isChosung,
  wrappedIsJaeum as isJaeum,
  wrappedIsMoeum as isMoeum,
  wrappedIsHangeul as isHangeul,
  wrappedIsHangeulJamo as isHangeulJamo,
  wrappedIsHangeulSyllable as isHangeulSyllable,
  wrappedHasJongSung as hasJongSung,
  isOnlyChoSung,
  isOnlyJongSong,
};
