// single peramiter
const getName = () => "Adnan Hassan";
const name = getName();
console.log = (name);

// multyplay peramiter

const twoNumber = (num1, num2) => num1 + num2;
const totalNumber = twoNumber(23 + 58);
console.log(totalNumber);

// three peramiter
const threeNumber = (num1, num2, num3) => num1 + num2 + num3;
const totalNumberTwo = threeNumber(23, 58, 38);

const fourNumber = (num1, num2, num3, num4) => num1 * num2 * num3 * num4;
const output = fourNumber(12, 20, 14, 15);


const doMath = (a, b) => {
    const sum = a + b;
    const diff = a - b;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(15, 25);
console.log(total);




