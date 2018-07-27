cli-args-parser-kata
===
The goal of this program is to model a cli arguments parser. Given a series of input the program should produce a valid output according to the following specification.

## Before you start
- Try not to read ahead, do one task at a time (the trick is to learn to work incrementally)!
- Make sure you only test for correct inputs;
- You may use whatever programming language you prefer;
- You should commit your code on GitHub or any other SCM repository you prefer;
- You should release your work under an OSI-approved open-source license of your choice;
- Remember to sent a PR once you're done with the kata 😉

## Specification
Choose one of the following input formats:
- string like arguments `"--foo bar"`
- array like arguments `["--foo", "bar"]`

### 1. parse a `simple` flags
  given the following input:
  ```sh
  --foo
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"foo": true}
  ```

### 2. parse a `composite` flags
  given the following input:
  ```sh
  --foo bar
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"foo": "bar"}
  ```

### 3. parse a `composite` flags with integer values
  given the following input:
  ```sh
  --number 1
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"number": 1}
  ```

### 4. parse multiple flags at once
  given the following input:
  ```sh
  --foo --bar baz --number 1
  ```
  the program should produce either a dictionary or a JSON object as follows:
  ```JSON
  {"bar": "baz", "foo": true, "number": 1}
  ```

### 5. try to support both `string` and `array` input formats
within the same function or a new function one of your choice.


### Submitted solutions
- [simcogno/cli-args-parser-kata](https://github.com/simcogno/cli-args-parser-kata)
- [christian-fei/cli-args-parser-kata v1](https://github.com/christian-fei/cli-args-parser-kata/tree/v1)
