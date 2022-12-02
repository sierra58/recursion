/*
1. Keep subtracting the number until it is 0 or 1
2. If 0, it is an even number
3. If 1, it is an odd number
4. If it is a negative number, negate the number to positive first
    e.g. -(-2)
*/
function isEven(num) {
    if (num === 0) {
        return true;
    } else if (num === 1) {
        return false;
    } else if (num > 0) {
        return isEven(num - 2);
    } else {
        return isEven(-num);
    }
}

console.log(isEven(-2));