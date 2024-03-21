/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr  = [...nums1, ...nums2].sort((a, b) => a - b)
    let mid = Math.floor(newArr.length / 2);
    if ((newArr.length % 2) == 1 ){
        return newArr[mid]
    }
    return (newArr[mid - 1]  + newArr[mid])/2
};

let nums1 = [3]
let nums2 = [-2, -1]

let output = findMedianSortedArrays(nums1, nums2)
console.log(output)
/*let doc = document.getElementById("output")
doc.innerText = output*/