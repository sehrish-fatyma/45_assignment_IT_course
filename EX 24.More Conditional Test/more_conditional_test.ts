//Equality and inequality test 1

console.log("Equality test with string: ", "Apple" === "Apple");

//Equality and inequality test 2
console.log("inequality test with string: ", ("Apple" as string) != "orange");

//test using the lower case function
console.log(
  "Lower Case function test:",
  "Hello".toLocaleLowerCase() === "hello"
);

//Numeral tests involving eqality
console.log("Equality test with string: ", 26 === 26);
//Numeral tests involving and inequality
console.log("inquality test with string: ", (26 as number) != 35);

//greater than test
console.log("Greater than test: ", 10 > 5);
// less than test
console.log("less than test: ", 5 < 10);

//greater than or equal to
console.log("greater than or equal to  test: ", 10 >= 10);
//less than or equal to
console.log("less than or equal to test: ", 5 <= 10);

//Test using "and"  operator
console.log("And operator test: ", 5 === 5 && 10 > 5);

//Test using "or" operator
console.log("or operator test: ", 5 === 5 || false);

//Test whether an itemis in a array
const fruits: string[] = ["peach", "apple", "banana"];
console.log('Test "peach" in the arrays:', fruits.includes("peach"));

//Test whether an itemis is not in a array
console.log('Testing "apple" is not array:', !fruits.includes("pear"));
