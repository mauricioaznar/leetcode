/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    const res = []
    
    const map = {}
    
    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0)).join('')
        
        if (map[key]) {
            map[key].push(strs[i])
        } else {
            map[key] = [strs[i]]
        }
        
        
    }
    
    return Object.values(map)
};
