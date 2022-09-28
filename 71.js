/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const items = path.split('/')
    const stack = []

    while (items.length) {
        const item = items.shift()
        if (item === '.' || item === '') {
            continue;
        }

        if (item === '..') {
            stack.pop()
            continue;
        }

        stack.push(item)
    }


    return `/${stack.join('/')}`
};

/*
Notes:

- divide string using slashes as a separator
- pick left most item on the list until the list is empty
- ignore '.' and ''
- add items to an array
- remove right most item from the array if '..'

 */