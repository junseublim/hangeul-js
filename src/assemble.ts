import {
  isOnlyJongSong,
  isJaeum,
  isOnlyChosung,
  isHangeul,
  isMoeum,
} from "./utils";
import {
  HANGEUL_OFFSET,
  CHOSUNG_OFFSET,
  JUNGSUNG_OFFSET,
  JUNGSUNG,
  JONGSUNG,
  CHOSUNG,
  ASSEMBLE_STATE,
} from "./constants";

const assembleSingleLetter = (letter: string[]) => {
  if (letter.length === 1) {
    return letter[0];
  }

  const [cho, jung, jong] = letter;
  let charCode = HANGEUL_OFFSET;

  charCode += CHOSUNG.indexOf(cho) * CHOSUNG_OFFSET;
  charCode += JUNGSUNG.indexOf(jung!) * JUNGSUNG_OFFSET;

  if (jong) {
    charCode += JONGSUNG.indexOf(jong) + 1;
  }

  return String.fromCharCode(charCode);
};

const getTextFromHangeulList = (hangeulList: string[]) => {
  const text = [];
  let letter = [];
  let nextState = ASSEMBLE_STATE.START;

  for (let index = 0; index < hangeulList.length; index++) {
    let char = hangeulList[index];
    let state = nextState;

    if (char === " ") {
      text.push(letter);
      text.push([" "]);
      letter = [];
      nextState = ASSEMBLE_STATE.START;
      continue;
    } else if (!isHangeul(char)) {
      continue;
    }

    letter.push(char);

    switch (state) {
      case ASSEMBLE_STATE.START:
        if (isOnlyJongSong(char) || isMoeum(char)) {
          text.push([letter.shift()]);
        } else {
          nextState = ASSEMBLE_STATE.HAS_CHOSUNG;
        }
        break;

      case ASSEMBLE_STATE.HAS_CHOSUNG:
        if (isOnlyJongSong(char)) {
          text.push([letter.shift(), letter.shift()]);
          nextState = ASSEMBLE_STATE.START;
        } else if (isJaeum(char)) {
          text.push([letter.shift()]);
        } else {
          nextState = ASSEMBLE_STATE.HAS_JUNGSUNG;
        }
        break;

      case ASSEMBLE_STATE.HAS_JUNGSUNG:
        if (isOnlyChosung(char)) {
          text.push([letter.shift(), letter.shift()]);
          nextState = ASSEMBLE_STATE.HAS_CHOSUNG;
        } else if (isOnlyJongSong(char)) {
          text.push([letter.shift(), letter.shift(), letter.shift()]);
          nextState = ASSEMBLE_STATE.START;
        } else if (isMoeum(char)) {
          text.push([letter.shift(), letter.shift()]);
          text.push([letter.shift()]);
          nextState = ASSEMBLE_STATE.START;
        } else {
          nextState = ASSEMBLE_STATE.HAS_CHOSUNG_OR_JONGSUNG;
        }
        break;

      case ASSEMBLE_STATE.HAS_CHOSUNG_OR_JONGSUNG:
        if (isMoeum(char)) {
          text.push([letter.shift(), letter.shift()]);
          nextState = ASSEMBLE_STATE.HAS_JUNGSUNG;
        } else if (isOnlyJongSong(char)) {
          text.push([letter.shift(), letter.shift(), letter.shift()]);
          text.push([letter.shift()]);
          nextState = ASSEMBLE_STATE.START;
        } else {
          text.push([letter.shift(), letter.shift(), letter.shift()]);
          nextState = ASSEMBLE_STATE.HAS_CHOSUNG;
        }
    }
  }
  if (letter.length) {
    text.push(letter);
  }

  return text;
};

export const assemble = (hangeulList: string[]) => {
  const text = getTextFromHangeulList(hangeulList);
  return text
    .map((letter) => assembleSingleLetter(letter as string[]))
    .join("");
};
