const {
  isOnlyJongSong,
  isJungSung,
  isConsonant,
  isOnlyChosung,
} = require("./utils");
const {
  HANGEUL_OFFSET,
  CHOSUNG_OFFSET,
  JUNGSUNG_OFFSET,
  JUNGSUNG,
  JONGSUNG,
  CHOSUNG,
  ASSEMBLE_STATE,
} = require("./constants");

const assembleSingleLetter = ([cho, jung = null, jong = null]) => {
  if (cho && !jung && !jong) {
    return cho;
  } else if (!jong) {
    return String.fromCharCode(
      HANGEUL_OFFSET +
        CHOSUNG.indexOf(cho) * CHOSUNG_OFFSET +
        JUNGSUNG.indexOf(jung) * JUNGSUNG_OFFSET
    );
  } else {
    return String.fromCharCode(
      HANGEUL_OFFSET +
        CHOSUNG.indexOf(cho) * CHOSUNG_OFFSET +
        JUNGSUNG.indexOf(jung) * JUNGSUNG_OFFSET +
        (JONGSUNG.indexOf(jong) + 1)
    );
  }
};

const assemble = (hangeulList) => {
  const text = [];
  const letter = [];
  let nextState = ASSEMBLE_STATE.START;

  for (index = 0; index < hangeulList.length; index++) {
    let char = hangeulList[index];
    letter.push(char);
    let state = nextState;

    switch (state) {
      case ASSEMBLE_STATE.START:
        if (isOnlyJongSong(char) || isJungSung(char)) {
          text.push([letter.shift()]);
        } else {
          nextState = ASSEMBLE_STATE.HAS_CHOSUNG;
        }
        break;

      case ASSEMBLE_STATE.HAS_CHOSUNG:
        if (isOnlyJongSong(char)) {
          text.push([letter.shift(), letter.shift()]);
          nextState = ASSEMBLE_STATE.START;
        } else if (isConsonant(char)) {
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
        } else if (isJungSung(char)) {
          text.push([letter.shift(), letter.shift()]);
          text.push([letter.shift()]);
          nextState = ASSEMBLE_STATE.START;
        } else {
          nextState = ASSEMBLE_STATE.HAS_CHOSUNG_OR_JONGSUNG;
        }
        break;

      case ASSEMBLE_STATE.HAS_CHOSUNG_OR_JONGSUNG:
        if (isJungSung(char)) {
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
  return text.map((letter) => assembleSingleLetter(letter)).join("");
};

module.exports = { assemble };
