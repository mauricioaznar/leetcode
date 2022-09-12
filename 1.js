/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()


    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]



        if (!map.has(String(num))) {
            map.set(String(num), i)
        }

        const dif = Math.abs(target - num)

        if (map.has(String(dif))) {
            const j = map.get(String(dif))

            return [j, i]
        }

    }


};

