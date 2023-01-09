/**
 PSEUDOCODE
 function name:
 params:
 returns:
 * console.log is NOT a return
 ========================
given an array called ARR 
for every element of ARR
    push the a copy of the current element into newArr
 */
 function duplicate(arr: number[]): number[] {
    for (let elem of arr){
        let newElem= arr[elem]
        console.log(newElem)
        arr.push(newElem)
    }
    return arr
  }
  
  //export ;
  const arr= [10,20,30]
  duplicate(arr)

 // duplicate2([10, 20, 30])  should return [10, 10, 20, 20, 30, 30]