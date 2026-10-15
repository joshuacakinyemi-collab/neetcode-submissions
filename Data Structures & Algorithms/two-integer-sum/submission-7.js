class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map(); // O(1) O(n)
        // O(n)
        for(let i = 0; i < nums.length; i++) { // first loop O(n) O(1)
            const complement = target - nums[i]; // O(1) O(1)
            if (map.has(complement)) { // O(1) O
                return [map.get(complement), i];// O(1) 
            } else {
                map.set(nums[i], i); // O(1)
            }
        }
    }
}
