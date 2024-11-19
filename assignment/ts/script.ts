//ex TypeScript function total price
interface Product {
    name: string;
    price: number;
}
// Create a function to calculate the total price
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
    // Define the regular expression
    const emails = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emails.test(email);
}

const email1 = "sobhi@gmail.com";
const email2 = "sobhi-email";

console.log(`${email1} is valid: ${isValidEmail(email1)}`); // Output: sobhi@gmail.com is valid: true
console.log(`${email2} is valid: ${isValidEmail(email2)}`); // Output: sobhi-email is valid: false