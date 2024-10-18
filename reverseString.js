let str = "hello";
let reverse = "";
let length = str.length;

for (let i = length; i >= 0; i--) {
     reverse = reverse + str.charAt(i);
}
console.log(reverse);
