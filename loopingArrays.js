// Age calculator
const currentYear = 2025;

const years = [1990, 1995, 2000, 2003, 2005];
const ages = [];

for(let i = 0; i < years.length; i++){
  // ages[i] = currentYear - years[i];
  ages.push(currentYear - years[i]);
}

console.log(`Years: ${years}`);
console.log(`Ages: ${ages}`);
