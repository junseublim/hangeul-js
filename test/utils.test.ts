import {
  hasJongsung,
  isHangeul,
  isJaeum,
  isMoeum,
  isHangeulJamo,
  isHangeulSyllable,
} from "@/utils";

test("hasJongsung", () => {
  expect(hasJongsung("안")).toEqual(true);
  expect(hasJongsung("녕")).toEqual(true);
  expect(hasJongsung("하")).toEqual(false);
  expect(hasJongsung("세")).toEqual(false);
  expect(hasJongsung("요")).toEqual(false);
});

test("isJaeum", () => {
  expect(isJaeum("김")).toEqual(false);
  expect(isJaeum("ㄱ")).toEqual(true);
  expect(isJaeum("ㅏ")).toEqual(false);
  expect(isJaeum("a")).toEqual(false);
  expect(isJaeum(".")).toEqual(false);
});

test("isMoeum", () => {
  expect(isMoeum("김")).toEqual(false);
  expect(isMoeum("ㄱ")).toEqual(false);
  expect(isMoeum("ㅏ")).toEqual(true);
  expect(isMoeum("a")).toEqual(false);
  expect(isMoeum(".")).toEqual(false);
});

test("isHangeulJamo", () => {
  expect(isHangeulJamo("김")).toEqual(false);
  expect(isHangeulJamo("ㄱ")).toEqual(true);
  expect(isHangeulJamo("ㅏ")).toEqual(true);
  expect(isHangeulJamo("a")).toEqual(false);
  expect(isHangeulJamo(".")).toEqual(false);
});

test("isHangeulSyllable", () => {
  expect(isHangeulSyllable("김")).toEqual(true);
  expect(isHangeulSyllable("ㄱ")).toEqual(false);
  expect(isHangeulSyllable("ㅏ")).toEqual(false);
  expect(isHangeulSyllable("a")).toEqual(false);
  expect(isHangeulSyllable(".")).toEqual(false);
});

test("isHangeul", () => {
  expect(isHangeul("김")).toEqual(true);
  expect(isHangeul("ㄱ")).toEqual(true);
  expect(isHangeul("a")).toEqual(false);
  expect(isHangeul(".")).toEqual(false);
});
