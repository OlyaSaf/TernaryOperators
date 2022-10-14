




const bill = 20;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalPay = bill + tip;

console.log(`The bill value is ` + bill + "$. " + "The tip value is " + tip + " $. " + "The total pay check is " + totalPay + "$.");