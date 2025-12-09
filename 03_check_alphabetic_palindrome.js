/**
 * https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-palindrome-filter-non-letters/problem
 */
function isAlphabeticPalindrome(code) {
		// Codes of length 0 or 1 are always palindromes
    if (code.length <= 1) {
        return true;
    }

		// Just nuke all of the nonalphabetic chars    
    code = code.replace(/[^A-Za-z]/g, '').toLowerCase();
    
		// Now do normal palindrome checking
    const m = Math.floor(code.length / 2);
    for(let k = 0; k <= m; k++) {
        if (code[k] !== code[code.length - k - 1]) {
            return false;
        }
    }

		// If we make it to the middle without returning false: palindrome
    return true;
}
