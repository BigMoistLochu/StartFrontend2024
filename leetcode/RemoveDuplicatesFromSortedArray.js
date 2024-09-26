// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

//zwracasz ile liczb powinno byc w tablicy


const array2 = [1,1,2,2,3,3];

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let target = 0;
    let number = 0;
    let counter_duplicate = 0;
    for(let i = 0; i < nums.length; i++){
        if(target===0) target=nums[i];

        if(target!==nums[i]){
            target=nums[i];
            counter_duplicate = 0;
        }
        
        if(target===nums[i] && counter_duplicate===0){
            counter_duplicate++;
            number++;
            continue;
        }
        
        nums[i] = 0;
    }
    return number;
};


console.log(removeDuplicates(array2));