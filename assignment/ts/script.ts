//ex TypeScript function total price
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

// ex five
function isValidEmail(email: string): boolean {
    const emails = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emails.test(email);
}

const email1 = "sobhi@gmail.com";
const email2 = "invalid-email";

console.log(`${email1} is valid: ${isValidEmail(email1)}`);
console.log(`${email2} is valid: ${isValidEmail(email2)}`);