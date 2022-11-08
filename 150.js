/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []



    for (let i = 0; i < tokens.length; i++) {

        const val = tokens[i]
        const isNumber = !Number.isNaN(Number(val))

        if (isNumber) {
            stack.push(Number(val))
        } else if (val === '+') {
            stack.push(stack.pop() + stack.pop())
        } else if (val === '-') {
            const first = stack.pop()
            const second = stack.pop()
            stack.push(second - first)
        } else if (val === '*') {
            stack.push(stack.pop() * stack.pop())
        } else if (val === '/') {
            const first = stack.pop()
            const second = stack.pop()
            stack.push(Math.trunc(second / first))
        }

    }

    return stack.pop()
};