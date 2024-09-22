
const array1 = [3,2,6];
const array2 = [4,5,6];

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    list1.forEach(element => {
        list2.push(element);
    });

    return list2.sort();
};


console.log(mergeTwoLists(array1,array2));