export function add(num1, num2){
    return num1 + num2;   
}

export function subtract(num1, num2){
    return num1 - num2;
}

export function multiply(num1, num2){
    return num1 * num2;
}
export function divide(num1, num2){
    return num1 / num2;
}
export function remainder(num1, num2){
    return num1 % num2;
}
export function integer(num1, num2){
    // const intRemainder = (num1 % num2);
    return Math.floor(num1 / num2);
}
export function pyth(num1, num2){
    return (num1 * num1 + num2 * num2);
}