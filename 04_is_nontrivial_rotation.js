/**
 * https://www.hackerrank.com/contests/software-engineer-prep-kit/challenges/check-non-identical-string-rotation/problem
 */
function isNonTrivialRotation(s1, s2) {
    if (s1 === s2 || s1.length !== s2.length) {
        return false;
    }
    
    // This is a pretty well-known trick
    return (s2 + s2).includes(s1);
}
