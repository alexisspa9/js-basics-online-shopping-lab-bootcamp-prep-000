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
 console.log(`${cartItem.itemName} has been added to your cart.`);
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
  var i = 0;
  var total = 0;
  while(cart.length > i){
    total += cart[i].itemPrice;
    i++;
    
  }
  console.log(total);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
addToCart('banana');
addToCart('mhlo');
total();