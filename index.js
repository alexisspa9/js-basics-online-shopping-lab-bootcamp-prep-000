var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = parseInt(Math.random() * 100);
 var cartItem = {
   itemName: item,
   itemPrice: price
 };
 cart.push(cartItem);
 console.log(`${cartItem[itemName]} has been added to your cart.`)
 console.log(cart);
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
addToCart('banana');