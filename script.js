let string = prompt("Enter string: ");

console.log("Length of string: " + string.length);
console.log("String includes 'e'?: " + string.includes("e"));
console.log("Starts with 'code'?: " + string.startsWith("code"));
console.log("Ends with 'code'?: " + string.endsWith("code"));
console.log(
  "String after replacementing 't': " + string.replaceAll("t", "####")
);

let product = String(12345 * 98765);

console.log("6th digit of 12345 * 98765: " + product[6]);
