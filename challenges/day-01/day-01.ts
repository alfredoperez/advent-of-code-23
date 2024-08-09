import { day01InputData } from "./day-01-input-data";

const method = (inputData: string) => {
  const lines = inputData.split("\n");

  const values = lines.map((line) => {
    const first = line.split("").find((v) => !Number.isNaN(parseInt(v)));
    const last = line.split("").findLast((v) => !Number.isNaN(parseInt(v)));
    return Number(first + last);
  });
  const result = values.reduce((acc, curr) => acc + curr, 0);
  console.log({ result });

  return result;
};

const result = method(day01InputData);
console.log({ result }); 

//--------------------------------------------
const numbersInWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const numberRegExp = new RegExp(`\\d|${numbersInWords.join("|")}`, "g");

const convertToNumber = (target: string) =>
  target.length === 1 ? parseInt(target) : numbersInWords.indexOf(target);

const partTwo = (inputData: string) => {
  const lines = inputData.split("\n");

  let result = 0;
  lines.forEach((line) => {
    const numbers = line.match(numberRegExp);
    if (!numbers) return;
    const first = convertToNumber(numbers[0]);
    const last = convertToNumber(numbers[numbers.length - 1]);

    const newNumber = Number(first.toString() + last.toString());
    result += newNumber;
    console.log({ line,numbers, first, last, newNumber, result });
  });

  console.log({ result });
  return result;
};

const result2 = partTwo(day01InputData);
console.log({ result2 });