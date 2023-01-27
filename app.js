//N1
isEven = (x) => (x % 2 !== 0 ? true : false);
console.log(isEven(12));

//N2
function calculateCurrency(currency) {
  if (currency === "USD") {
    console.log("$");
    return "$";
  }
  if (currency === "Euro") {
    console.log("€");
    return "€";
  }
  if (currency === "GEL"){
    console.log("₾");
    return "₾";
  };
 
}

//N3
BeforeUpdate = (UpperCaseText) => UpperCaseText.toLowerCase();
const UpdatedString = BeforeUpdate("MY NAME IS JOHN");
console.log(UpdatedString);

//N4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filterEvenNumbers = numbers.filter((numbers) => numbers % 2 === 0);
console.log(filterEvenNumbers);

// N5

const names = ["Anna", "George"];
const res = names.find(findAnna);

names.find(findAnna);

function findAnna(item) {
  return (item = "Anna;");
}
console.log(res);

//N6

calculateExpense = (income, expense) => {
  const distinction = income - expense;
  return distinction;
};
let Jan = calculateExpense(100, 30);
let Feb = calculateExpense(150, 80);
let Mar = calculateExpense(200, 100);

console.log(Jan);
console.log(Feb);
console.log(Mar);
