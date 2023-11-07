const vegetarian = 'Vegetarian Pizza';
const hawaiian = 'Hawaiian Pizza';
const pepperoni = 'Pepperoni Pizza';

const pizzaPrice = 80;

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

const orderName = prompt('Enter the name of the pizza you want to order today.');

if (checkOrderName(orderName)) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);

  let orderMinutes = cookingTime(orderQuantity);

  alert(`Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(orderQuantity)} kr. The pizzas will take ${orderMinutes}  minutes.`);
} else {
  alert('We dont have that on the menu');
}

function checkOrderName(name) {
  return name === vegetarian || name === hawaiian || name === pepperoni;
}

function totalCost(quantity) {
  return quantity * pizzaPrice;
}

function cookingTime(quantity) {
  if (quantity <= 2) {
    return 10;
  } else if (quantity <= 5) {
    return 15;
  } else if (quantity >= 6) {
    return 20;
  }
}
