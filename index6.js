const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 8 },
  { id: 2, name: "Shoes", category: "Fashion", price: 2000, stock: 2 },
  { id: 3, name: "Mobile", category: "Electronics", price: 25000, stock: 5 },
  { id: 4, name: "T-Shirt", category: "Fashion", price: 800, stock: 20 }
];

const getLowStockProducts = () => products.filter(p => p.stock < 5);

const sortProductsByPrice = () =>
  products.slice().sort((a, b) => a.price - b.price);

const calculateTotalInventoryValue = () =>
  products.reduce((sum, p) => sum + p.price * p.stock, 0);

const groupByCategory = () =>
  products.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

console.log("Low Stock ➝", getLowStockProducts());
console.log("Sorted by price ➝", sortProductsByPrice());
console.log("Total Inventory Value ➝", calculateTotalInventoryValue());
console.log("Grouped by Category ➝", groupByCategory());
