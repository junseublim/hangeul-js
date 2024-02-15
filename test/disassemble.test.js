const { disassemble } = require("../src");

test("안녕하세요", () => {
  expect(disassemble("안녕하세요")).toEqual([
    "ㅇ",
    "ㅏ",
    "ㄴ",
    "ㄴ",
    "ㅕ",
    "ㅇ",
    "ㅎ",
    "ㅏ",
    "ㅅ",
    "ㅔ",
    "ㅇ",
    "ㅛ",
  ]);
});

test("자바스크립트", () => {
  expect(disassemble("자바스크립트")).toEqual([
    "ㅈ",
    "ㅏ",
    "ㅂ",
    "ㅏ",
    "ㅅ",
    "ㅡ",
    "ㅋ",
    "ㅡ",
    "ㄹ",
    "ㅣ",
    "ㅂ",
    "ㅌ",
    "ㅡ",
  ]);
});

test("복잡한 한글", () => {
  expect(disassemble("복잡한 한글")).toEqual([
    "ㅂ",
    "ㅗ",
    "ㄱ",
    "ㅈ",
    "ㅏ",
    "ㅂ",
    "ㅎ",
    "ㅏ",
    "ㄴ",
    " ",
    "ㅎ",
    "ㅏ",
    "ㄴ",
    "ㄱ",
    "ㅡ",
    "ㄹ",
  ]);
});

test("ㅈ잘몼ㅅ된ㄴㄴ 한ㄴㄲ글ㄹㄹ", () => {
  expect(disassemble("ㅈ잘몼ㅅ된ㄴㄴ 한ㄴㄲ글ㄹㄹ")).toEqual([
    "ㅈ",
    "ㅈ",
    "ㅏ",
    "ㄹ",
    "ㅁ",
    "ㅗ",
    "ㅆ",
    "ㅅ",
    "ㄷ",
    "ㅚ",
    "ㄴ",
    "ㄴ",
    "ㄴ",
    " ",
    "ㅎ",
    "ㅏ",
    "ㄴ",
    "ㄴ",
    "ㄲ",
    "ㄱ",
    "ㅡ",
    "ㄹ",
    "ㄹ",
    "ㄹ",
  ]);
});

test("한english글", () => {
  expect(disassemble("한english글")).toEqual([
    "ㅎ",
    "ㅏ",
    "ㄴ",
    "e",
    "n",
    "g",
    "l",
    "i",
    "s",
    "h",
    "ㄱ",
    "ㅡ",
    "ㄹ",
  ]);
});
