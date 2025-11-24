const menu = {
  Pizza: 200,
  Burger: 120,
  Pasta: 150,
  Momos: 90
};

function calculateBill(orderItems) {
  const prices = orderItems.map(item => {
    if (!menu[item]) throw new Error(`❌ ${item} is not available`);
    return menu[item];
  });

  return prices.reduce((total, p) => total + p, 0);
}

try {
  const bill = calculateBill(["Pizza", "Burger", "Pasta"]);
  console.log("Total Bill =", bill);
} catch (err) {
  console.log(err.message);
}
