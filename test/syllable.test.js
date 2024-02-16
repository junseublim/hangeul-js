const { getChoSung, getJongSung, getJungSung } = require("../src/syllable");

test("getChoSung", () => {
  expect(getChoSung("안")).toEqual("ㅇ");
  expect(getChoSung("녕")).toEqual("ㄴ");
  expect(getChoSung("하")).toEqual("ㅎ");
  expect(getChoSung("세")).toEqual("ㅅ");
  expect(getChoSung("요")).toEqual("ㅇ");

  expect(getChoSung("반")).toEqual("ㅂ");
  expect(getChoSung("갑")).toEqual("ㄱ");
  expect(getChoSung("습")).toEqual("ㅅ");
  expect(getChoSung("니")).toEqual("ㄴ");
  expect(getChoSung("다")).toEqual("ㄷ");
});

test("getJungSung", () => {
  expect(getJungSung("안")).toEqual("ㅏ");
  expect(getJungSung("녕")).toEqual("ㅕ");
  expect(getJungSung("하")).toEqual("ㅏ");
  expect(getJungSung("세")).toEqual("ㅔ");
  expect(getJungSung("요")).toEqual("ㅛ");

  expect(getJungSung("반")).toEqual("ㅏ");
  expect(getJungSung("갑")).toEqual("ㅏ");
  expect(getJungSung("습")).toEqual("ㅡ");
  expect(getJungSung("니")).toEqual("ㅣ");
  expect(getJungSung("다")).toEqual("ㅏ");
});

test("getJongSung", () => {
  expect(getJongSung("안")).toEqual("ㄴ");
  expect(getJongSung("녕")).toEqual("ㅇ");
  expect(getJongSung("하")).toEqual("");
  expect(getJongSung("세")).toEqual("");
  expect(getJongSung("요")).toEqual("");

  expect(getJongSung("반")).toEqual("ㄴ");
  expect(getJongSung("갑")).toEqual("ㅂ");
  expect(getJongSung("습")).toEqual("ㅂ");
  expect(getJongSung("니")).toEqual("");
  expect(getJongSung("다")).toEqual("");
});
