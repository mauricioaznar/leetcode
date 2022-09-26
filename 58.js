/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let r = s.length - 1
    
    while (!isLetter(s[r])) {
        r--
    }
    
    let l = r
    
    while (l >= 0 && isLetter(s[l])) {
        l--
    }
    
    return r - l
};


let isLetter = function (c) {
    const asciiCode = c.charCodeAt(0)
    return (
        (asciiCode >= 65 && asciiCode <= 90)
        || (asciiCode >= 97 && asciiCode <= 122)
    )    
}
