/*
link: https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

TASK:
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an 
integer that is the square of an integer; in other words, 
it is the product of some integer with itself.

The tests will always use some integral number, 
so don't worry about that in dynamic typed languages.

PSEUDOCODE:
    function name: isSquare
    param: a number, called num 
    return: a boolean true/false 
====================================

IF NUM divided by itself's quotient ,%, is strictly equal to 0 then 
    declare variable named RESULT and set it to true 
ELSE
    set RESULT to false 
END IF/ELSE

return RESULT
*/

function isSquare(num: number): boolean{
    let result: boolean = false
    if (num=== 0){
        result = true 
    } 
    for (let i = 1; i < num-1 ; i++){
        if (num / i === i){
            result = true 
        } else{
            result = false 
        }
    }
    return result   
    }
    



export default isSquare;