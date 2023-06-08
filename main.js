function isEven(n) {
    // To DEAL with a negative number, I start to checking for a
    // negative number.
    if (n < 0) {
        return "Your argument isn't acceptable.";
    } else {
        if (n === 0) {
            return true;
        } else if (n === 1) {
            return false;
        } else {
            return isEven(n - 2);
        }
    }
}

console.log(`Is 50 an even number? ${isEven(50)}`);
console.log(`Is 75 an even number? ${isEven(75)}`);
console.log(`Is -1 an even number? ${isEven(-1)}`);
