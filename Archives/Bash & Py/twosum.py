# 1. Two Sum
# Easy

# 13962

# 511

# Add to List

# Share
# Given an array of integers, return indices of the two numbers such that they add up to a specific target.

# You may assume that each input would have exactly one solution, and you may not use the same element twice.

# Example:

# Given nums = [2, 7, 11, 15], target = 9,

# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].
#python
class Solution(object):
    def twoSum(self, nums, target):
        dic = {}
        for i, num in enumerate(nums):
            comp = target - nums[i];
            if(comp in dic):
                return [dic[comp], i]
            else:
                dic[nums[i]] = i;

#java