# Hangeul-js

Hangeul-js는 한글을 다루기 위한 간단한 라이브러리로, 여러 유용한 한글 관련 유틸 함수들을 제공합니다.

Hangeul-js is an simple library that provids useful util functions for manipulating the Korean Alphabet, Hangeul

## Installing

```shell
$ npm install hangeul-js
```

## Usage

### cjs

```js
const { isHangeul } = require("hangeul-js");
```

### esm

```js
import { isHangeul } from "hangeul-js";
```

## Util Functions

- isJaeum
- isMoeum
- isHangeulJamo
- isHangeulSyllable
- isHangeul
- isValidChosung
- isValidJongsung
- hasJongsung
- getChosung
- getJungsung
- getJongsung
- assemble
- disassemble

### isJaeum

- 문자가 한글 자음인지 여부를 반환합니다.
- Returns whether a given string is a Korean consonant(Jaeum) or not.

```js
isJaeum("김"); // true
isJaeum("ㄱ"); // true
isJaeum("ㅏ"); // false
isJaeum("a"); // false
isJaeum("."); // false
```

### isMoeum

- 문자가 한글 모음인지 여부를 반환합니다.
- Returns whether a given string is a Korean vowel(Moeum) or not.

```js
isMoeum("김"); // false
isMoeum("ㄱ"); // false
isMoeum("ㅏ"); // true
isMoeum("a"); // false
isMoeum("."); // false
```

### isHangeulJamo

- 문자가 한글 자음이거나 모음인지 여부를 반환합니다.
- Returns whether a given string is either a Korean consonant or vowel or not.

```js
isHangeulJamo("김"); // false
isHangeulJamo("ㄱ"); // true
isHangeulJamo("ㅏ"); // true
isHangeulJamo("a"); // false
isHangeulJamo("."); // false
```

### isHangeulSyllable

- 문자가 한글 음절인지 여부를 반환합니다.
- Returns whether a given string is a Korean syllable or not.

```js
isHangeulJamo("김"); // true
isHangeulJamo("ㄱ"); // false
isHangeulJamo("ㅏ"); // false
isHangeulJamo("a"); // false
isHangeulJamo("."); // false
```

### isHangeul

- 문자가 한글인지 여부를 반환합니다.
- Returns whether a given character is Korean or not.

```js
isHangeul("김"); // true
isHangeul("ㄱ"); // true
isHangeul("ㅏ"); // true
isHangeul("a"); // false
isHangeul("."); // false
```

### isValidChosung

- 문자가 유효한 초성 자음인지 여부를 반환합니다.
- Returns whether a given character is a valid Chosung or not.

```js
isValidChosung("ㄱ"); // true
isValidChosung("ㅉ"); // true
isValidChosung("ㄵ"); // false
```

### isValidJongsung

- 문자가 유효한 종성 자음인지 여부를 반환합니다.
- Returns whether a given character is a valid jongsung or not.

```js
isValidJongsung("ㄱ"); // true
isValidJongsung("ㅉ"); // false
isValidJongsung("ㄵ"); // true
```

### hasJongsung

- 문자가 종성이 있는 한글음절인지 여부를 반환합니다.
- Returns whether a given character is a Korean syllable with a trailiing consonant.

```js
hasJongsung("김"); // true
hasJongsung("기"); // false
```

### getChosung

- 음절의 초성을 반환합니다.
- Returns the Chosung of a given korean Syllable.

```js
getChosung("김"); // "ㄱ"
```

### getJungsung

- 음절의 중성을 반환합니다.
- Returns the jungsung of a given korean Syllable.

```js
getJungsung("김"); // "ㅣ"
```

### getJongsung

- 음절의 종성을 반환합니다.
- 종성이 없는 경우 빈 문자열을 반환합니다.
- Returns the jongsung of a given korean Syllable.
- Returns an empty string when it has no jongsung.

```js
getJongsung("김"); // "ㅁ"
```

### assemble

- 한글 자음과 모음의 배열을 받아 한글 음절들로 조합합니다.
- Assembles given array of korean alphabets into syllables.

```js
assemble(["ㄱ", "ㅣ", "ㅁ"]); // "김"
```

### disassemble

- 문자열을 받아 한글 음절의 배열로 분리합니다.
- Disassembles given string of korean syllables into an aray of korean alphabets.

```js
disassemble("김"); // ["ㄱ", "ㅣ", "ㅁ"]
```
