export const wrapValidator =
  (validator: (...args: any[]) => boolean, errorMessage: string) =>
  (fn: (...args: any[]) => any) => {
    return (...args: any[]) => {
      if (!validator(...args)) {
        throw new Error(errorMessage);
      }

      return fn(...args);
    };
  };

export const wrapSingleCharValidator = wrapValidator(
  (letter: string) => letter.length === 1,
  "한글자만 입력가능합니다."
);
