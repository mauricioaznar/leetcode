/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()


    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]


        // check if it exists on the map
        if (!map.has(String(num))) {
            // save the number and its position
            map.set(String(num), i)
        }

        // get the difference between the target and the current number
        const dif = Math.abs(target - num)

        // if the difference exists on the map, we have to matching number that sum into the target
        if (map.has(String(dif))) {
            const j = map.get(String(dif))

            return [j, i]
        }

    }


};

