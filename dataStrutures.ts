const palindrome = (s) => {
    let x = 0;
    let y = s.length -1;
    while(x < y ) {
        if(s[x] !== s[y]) return false;
        x+= 1;
        y-= 1;
    }

    return true;
}


// sort list

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var combine = function(arr1, arr2) {
    let ans = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i]);
            i++;
        } else {
            ans.push(arr2[j]);
            j++;
        }
    }
    
    while (i < arr1.length) {
        ans.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        ans.push(arr2[j]);
        j++;
    }
    
    return ans;
}
combine([1,4,7,20],[3,5,6])



/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    let temp = '';
    while(left< right) {
       temp = s[left];
       s[left] = s[right];
        s[right] = temp;
        left++;
        right--;        
    }
    return s; 
};

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function(nums) {
    
    nums.forEach((el, i) => nums[i] = el*el );
    
    return nums.sort((a,b)=> a-b);
    
    
};