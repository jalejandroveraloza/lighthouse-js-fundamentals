const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"]

console.log("Loop while")

let i = 0;

while(i < ingredients.length) {

console.log(ingredients[i]);

i++

}

console.log("Loop For")

for(let x = 0; x < ingredients.length; x++) {
console.log(ingredients[x]);

}

console.log("ingredienst bacwards")

ingredients.reverse();

for(let y = 0; y < ingredients.length; y++) {

console.log(ingredients[y]);

}
