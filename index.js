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
  var lastOne = cart.length - 1;
  if (cart.length > 0) {
    
    while(cart.length > i) {
      cartItems.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
      i++;
    }
    cartItems.pop();
    
      console.log(`In your cart, you have ${cartItems}, and ${cart[lastOne].itemName} at ${cart[lastOne].itemPrice}.`);
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
  var i = 0;
  while (cart.length > i) {
    var currentItemName = cart[i].itemName;
    if(currentItemName === item) {
    cart.splice(i, 1);

    }
    else{
      console.log('That item is not in your cart.')
    }
   i++;
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === null) {
    console.log("Sorry, we don't have a credit card on file for you")
  }
  else {
    cart.length = 0;
    console.log(``)
  }
}
viewCart();
addToCart('banana');
addToCart('mhlo');
total();
viewCart();
removeFromCart('axladi');
removeFromCart('banana');
console.log(cart);