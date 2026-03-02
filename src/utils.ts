/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The sum of the two numbers.
 */
function add(a: number, b: number): number {
    return a + b;
}
/**
 * Subtracts the second number from the first.
 *
 * @param {number} a - The number to be subtracted from.
 * @param {number} b - The number to subtract.
 * @return {number} The result of the subtraction.
 */
function subtract(a: number, b: number): number {
    return a - b;
}
/**
 * Multiplies two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number} The product of the two numbers.
 */
function multiply(a: number, b: number): number {
    return a * b;
}
/**
 * Divides the first number by the second.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @return {number} The quotient of the division.
 * @throws {Error} If the divisor is zero.
 */
function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}