import { wrapSingleCharValidator } from "@/validator";

test("wrapSingleCharValidator", () => {
  const fn = () => {};
  const wrappedFn = wrapSingleCharValidator(fn);
  expect(() => wrappedFn("안녕")).toThrow();
  expect(() => wrappedFn("안")).not.toThrow();
});
