const btn = document.getElementById('btn');
const respons = document.getElementById('respons');
const quantity = document.getElementById('quantity');
const pizzaType = document.getElementById('pizzaType');

const vegetarian = 'Vegetarian Pizza';
const hawaiian = 'Hawaiian Pizza';
const pepperoni = 'Pepperoni Pizza';
const pizzaPrice = 80;

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const orderName = pizzaType.value;
  const orderQuantity = quantity.value;
  let orderMinutes = cookingTime(orderQuantity);
  respons.textContent = `Great, I'll get started on your ${orderName} right away, it will cost ${totalCost(
    orderQuantity
  )} kr. The pizzas will take ${orderMinutes} minutes.`;
});

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
