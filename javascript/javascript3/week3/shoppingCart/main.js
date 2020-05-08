console.log("shopping cart");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    // Implement functionality here
    this.products.push(product);
  }

  removeProduct(product) {
    // Implement functionality here
    if (!product) {
      return;
    }
    this.products = this.products.filter(pro => pro.name !== product.name);
  }

  searchProduct(productName) {
    // Implement functionality here
    if (!productName) {
      return;
    }
    this.products = this.products.filter(
      item => item.name === productName.toLowerCase()
    );
  }

  getTotal() {
    // Implement functionality here
    this.totalPrice = this.products.reduce((a, b) => a + b.price, 0);
  }

  renderProducts() {
    // Implement functionality here
    // i'm working on it 
  }

  getUser() {
    // Implement functionality here
    const userApi = `https://jsonplaceholder.typicode.com/users/1`;
    fetch(userApi)
      .then(res => res.json())
      .then(data => console.log(data));
  }
}

const flatscreen = new Product("flat-screen", 5000);
const iphone = new Product("iphone", 6000);
const charger = new Product("charger", 100);
const shoppingCart = new ShoppingCart([]);

shoppingCart.addProduct(iphone);
shoppingCart.addProduct(charger);
shoppingCart.addProduct(flatscreen);
shoppingCart.removeProduct();
shoppingCart.searchProduct("");
shoppingCart.getTotal();
shoppingCart.getUser();

console.log(shoppingCart);
