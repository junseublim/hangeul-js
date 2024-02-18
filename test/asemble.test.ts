import { assemble } from "@/assemble";

test("안녕하세요", () => {
  expect(
    assemble([
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
    ])
  ).toBe("안녕하세요");
});

test("자바스크립트", () => {
  expect(
    assemble([
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
    ])
  ).toBe("자바스크립트");
});

test("복잡한 한글", () => {
  expect(
    assemble([
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
    ])
  ).toBe("복잡한 한글");
});

test("ㅈ잘몼ㅅ된ㄴㄴ 한ㄴㄲ글ㄹㄹ", () => {
  expect(
    assemble([
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
    ])
  ).toBe("ㅈ잘몼ㅅ된ㄴㄴ 한ㄴㄲ글ㄹㄹ");
});

test("한english글", () => {
  expect(
    assemble([
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
    ])
  ).toEqual("한글");
});