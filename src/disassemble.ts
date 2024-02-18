const {
  HANGEUL_OFFSET,
  CHOSUNG_OFFSET,
  JUNGSUNG_OFFSET,
  JUNGSUNG,
  JONGSUNG,
  CHOSUNG,
} = require("./constants");
const { isHangeulSyllable } = require("./utils");

const disassembleSingleLetter = (letter: string) => {
  if (letter === " ") {
    return [" "];
  }

  if (!isHangeulSyllable(letter)) {
    return [letter];
  }

  const result = [];

  const code = letter.charCodeAt(0) - HANGEUL_OFFSET;
  result.push(CHOSUNG[Math.floor(code / CHOSUNG_OFFSET)]);
  result.push(JUNGSUNG[Math.floor((code % CHOSUNG_OFFSET) / JUNGSUNG_OFFSET)]);

  if (code % JUNGSUNG_OFFSET > 0) {
    result.push(JONGSUNG[(code % JUNGSUNG_OFFSET) - 1]);
  }

  return result;
};

export const disassemble = (text: string) => {
  return text
    .split("")
    .map((letter) => disassembleSingleLetter(letter))
    .flat();
};
