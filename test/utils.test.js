const { hasJongSung } = require("../src/utils");

test("hasJongSung", () => {
  expect(hasJongSung("안")).toEqual(true);
  expect(hasJongSung("녕")).toEqual(true);
  expect(hasJongSung("하")).toEqual(false);
  expect(hasJongSung("세")).toEqual(false);
  expect(hasJongSung("요")).toEqual(false);
});
