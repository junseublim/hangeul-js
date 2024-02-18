import { getChosung, getJungsung, getJongsung } from "@/syllable";

test("getChosung", () => {
  expect(getChosung("안")).toEqual("ㅇ");
  expect(getChosung("녕")).toEqual("ㄴ");
  expect(getChosung("하")).toEqual("ㅎ");
  expect(getChosung("세")).toEqual("ㅅ");
  expect(getChosung("요")).toEqual("ㅇ");

  expect(getChosung("반")).toEqual("ㅂ");
  expect(getChosung("갑")).toEqual("ㄱ");
  expect(getChosung("습")).toEqual("ㅅ");
  expect(getChosung("니")).toEqual("ㄴ");
  expect(getChosung("다")).toEqual("ㄷ");

  expect(() => getChosung("a")).toThrow();
});

test("getJungsung", () => {
  expect(getJungsung("안")).toEqual("ㅏ");
  expect(getJungsung("녕")).toEqual("ㅕ");
  expect(getJungsung("하")).toEqual("ㅏ");
  expect(getJungsung("세")).toEqual("ㅔ");
  expect(getJungsung("요")).toEqual("ㅛ");

  expect(getJungsung("반")).toEqual("ㅏ");
  expect(getJungsung("갑")).toEqual("ㅏ");
  expect(getJungsung("습")).toEqual("ㅡ");
  expect(getJungsung("니")).toEqual("ㅣ");
  expect(getJungsung("다")).toEqual("ㅏ");

  expect(() => getChosung("a")).toThrow();
});

test("getJongsung", () => {
  expect(getJongsung("안")).toEqual("ㄴ");
  expect(getJongsung("녕")).toEqual("ㅇ");
  expect(getJongsung("하")).toEqual("");
  expect(getJongsung("세")).toEqual("");
  expect(getJongsung("요")).toEqual("");

  expect(getJongsung("반")).toEqual("ㄴ");
  expect(getJongsung("갑")).toEqual("ㅂ");
  expect(getJongsung("습")).toEqual("ㅂ");
  expect(getJongsung("니")).toEqual("");
  expect(getJongsung("다")).toEqual("");

  expect(() => getChosung("a")).toThrow();
});
