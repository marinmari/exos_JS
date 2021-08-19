let myNumber = 0;
let result = 0;
console.log(typeof myNumber);
myNumber = prompt("Quel est ton numéro ?");
console.log(typeof myNumber);
console.log(factorial(Number(myNumber)));

function factorial (y) {
  let x = y;
  let result = 1;
  while(x > 1) {
    x -= 1;
    y *= x;
  }
  return y;
}

