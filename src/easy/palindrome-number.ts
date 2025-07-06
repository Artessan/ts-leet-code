export function isPalindrome(x: number) {
    return x.toString() === x.toString().split('').reverse().join('');
}