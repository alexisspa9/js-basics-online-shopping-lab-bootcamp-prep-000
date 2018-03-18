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
console.log(cartItem);
  
}

function viewCart() {
  // write your code here
  var cartItems = [];
  var i = 0;
  if (cart.length > 0) {
    
    while(cart.length > i) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      i++;
    }
    cartItems.pop();
    
      console.log(`In your cart, you have ${cartItems}, and ${cart[-1].itemName} at ${cart[-1].itemPrice}.`);
  }
  else {
    console.log('Your shopping cart is empty!')
  }
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
viewCart();
addToCart('banana');
addToCart('mhlo');
total();
viewCart();