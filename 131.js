
0/5
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const ans = []
    recurse(ans, [], s)
    return ans
};


var recurse = function (ans, path, s) {
    if (s.length === 0) {
        ans.push(path)
        return
    }

    for (let i = 0; i < s.length; i++) {
        const substr = s.slice(0, i + 1)

        if (isPalindrome(substr)) {
            recurse(ans, [...path, substr], s.slice(i + 1, s.length))
        }


    }
}


var isPalindrome = function (s) {
    let l = 0
    let r = s.length - 1

    while (l <= r) {

        if (s[l] !== s[r]) {
            return false;
        }

        l++
        r--
    }

    return true
}