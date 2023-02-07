const reverseString = (input) => {
  //   console.log(input);
  console.log(input.charAt(0));
  if (input === "") {
    return "";
  }

  return reverseString(input.substring(1)) + input.charAt(0);
};

console.log(reverseString("hello"));
