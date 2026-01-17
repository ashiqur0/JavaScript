//? Check A String Is Palindrome Or Not

//* Builtin Functions Approach
const isPalindrome = str => {
    const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = normalized.split('').reverse().join('');
    return Boolean(normalized === reversed);
}

console.log(isPalindrome("Madam")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true