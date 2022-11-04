const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 23, 58, 38, 12, 25, 45, 26, 36, 25, 52, 51, 48, 68, 52, 62, 35, 20, 42, 30, 15, 32, 65,]
const bigNumbers = numbers.filter(number => number > 10);
const smallNumbers = numbers.filter(number => number < 5);
// console.log(bigNumbers);
// console.log(smallNumbers);


const products = [
    { name: 'boAt Airdopes 161', color: 'Pearl White', model_name: 'Airdopes 161', connectivity: 'Bluetooth', price: '1400' },
    { name: 'boAt Airdopes 151', color: 'Pearl Black', model_name: 'Airdopes 151', connectivity: 'Bluetooth', price: '1350' },
    { name: 'boAt Airdopes 141', color: 'Pearl Red', model_name: 'Airdopes 141', connectivity: 'Bluetooth', price: '1300' },
    { name: 'boAt Airdopes 131', color: 'Pearl Pink', model_name: 'Airdopes 131', connectivity: 'Bluetooth', price: '1250' },
    { name: 'boAt Airdopes 121', color: 'Pearl Blue', model_name: 'Airdopes 121', connectivity: 'Bluetooth', price: '1100' },
]
const expensive = products.filter(product => product.price > 100);
console.log(expensive);