const name = "Huu Thanh";
const userAge = 18;
const user = {
  name,
  age: userAge,
  location: "Viet Nam",
};
console.log(user);

// Destructuring
const product = {
  label: "Red Notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};
const { label: productLabel, price, stock, salePrice } = product;
console.log(productLabel, price, stock, salePrice);
