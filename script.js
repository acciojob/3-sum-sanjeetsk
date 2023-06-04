function threeSum(arr, target) {
  //your code here
  //Sort the array in ascending order
  arr.sort((a,b) => a-b);

  //Initiate variables for closest sum and difference
  let closestSum = Infinity;
  let minDiff = Infinity;

  //Iterate through the array
  for(let i=0;i<arr.length-2;i++){
    //Set left and right pointers
    let left = i+1;
    let right = arr.length-1;

    while(left < right){
      const sum = arr[i] + arr[left] + arr[right];
      const diff = Math.abs(sum-target);

      //Update closest sum and difference if necessary
      if(diff < minDiff){
        minDiff = diff;
        closestSum = sum;
      }

      if(sum === target){
        //Found an exact match, return the target sum
        return closestSum;
      }
      else if(sum < target){
        //Increment left pointer to increase the sum
        left++;
      }
      else{
        //Decrement right pointer to decrease the sum
        right--;
      }
    }
  }

  // No exact match found, return the closest sum
  return closestSum;
}

module.exports = threeSum;
