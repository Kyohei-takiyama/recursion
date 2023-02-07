// 文字を反転
const reverseString = (input) => {
  //   console.log(input);
  console.log(input.charAt(0));
  if (input === "") {
    return "";
  }

  return reverseString(input.substring(1)) + input.charAt(0);
};

console.log(reverseString("こんにちは"));

// 回文か判定
const isPalindrome = (input) => {
  if (input.length === 0 || input.length === 1) {
    return true;
  }

  if (input.charAt(0) == input.charAt(input.length - 1)) {
    return isPalindrome(input.substring(1, input.length - 1));
  }

  return false;
};

console.log(isPalindrome("racecar"));

// ２進数に変換
const findBinary = (decimal, result) => {
  if (decimal === 0) {
    return result;
  }

  result = (decimal % 2) + result;
  return findBinary(Math.floor(decimal / 2), result);
};

console.log(findBinary(233, ""));
