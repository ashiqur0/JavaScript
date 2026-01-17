//? Check A String Is Palindrome Or Not

//* Builtin Functions Approach
// const isPalindrome = str => {
//     const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     const reversed = normalized.split('').reverse().join('');
//     return Boolean(normalized === reversed);
// }

// console.log(isPalindrome("Madam")); // true
// console.log(isPalindrome("Hello")); // false
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true

//* Two Pointers Approach
const isPalindrome = str => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = normalized.length - 1;

    while (left < right) {
        if (normalized[left] !== normalized[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true