// How do we type 'items' in the ShoppingCart?
type ShoppingCart = {
  userId: string;
  items: Array<string>;
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});
