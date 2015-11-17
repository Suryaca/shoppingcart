// Product template
totalPrice = 0;
var Product = function(name, description, price){
  this.name = name;
  this.description = description;
  this.price = price;
}

var Cart = function(Product){
  this.item = Product;
  totalPrice = totalPrice + item.price;
}
/*
function addToCart()
{
  cartObject.item.push(this);

}
function removeFromCart(index){
  cart
}

cartObject =
*/
