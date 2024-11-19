interface Product {
    name: string;
    price: number;
}
function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 70 }
];

const totalPrice = calculateTotalPrice(products);
console.log(`Total Price: $${totalPrice}`);