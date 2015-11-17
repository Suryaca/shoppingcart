// Product template
totalPrice = 0;
cartObject =[];
var Product = function(name, description, price){
  this.name = name;
  this.description = description;
  this.price = price;
}

var Cart = function(Product){
  this.item = Product;
//  totalPrice = totalPrice + item.price;
}

function addToCart(product)
{
  console.log(product);
  console.log(cartObject);
  // cartObject.push(product);
  // console.log( product+ "added to Cart");

}
function removeFromCart(index){
  pName = cartObject.index.name;
  cartObject.pop[index];
  return pName + "is removed from Cart";
}
HTCPhone = new Product ("HTC Desire", "3G Phone", 20000);
cartObject = new Cart(HTCPhone);
console.log(HTCPhone);
console.log(cartObject);
addToCart(HTCPhone);
