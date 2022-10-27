//link: https://www.codewars.com/kata/55cb632c1a5d7b3ad0000145/train/javascript
/*
TASK:
Alex just got a new hula hoop, 
he loves it but feels discouraged because 
his little brother is better than him

Write a program where Alex can input (n) 
how many times the hoop goes round and 
it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, 
now move on to tricks".If he doesn't get 10 hoops, 
return the string "Keep at it until you get it".

PSEUDOCODE
function name: keepLoop
parameters: loops, an input number 
return: message, a string 
============================
declare variable named MESSAGE to empty string 

IF LOOPS is less than 5 then
    set MESSAGE to "practice makes perfect"
IF LOOPS is greater than or equal to 5 then 
    set MESSAGE to "there ya go buddy, you got this!"
IF LOOPS is less than or equal to 20 then 
    set MESSAGE to "look how far you've come!"
IF LOOPS is greater than or equal to 50 then
    set message to "shoot for the stars!"
IF LOOPS is greater than 51 then 
    set MESSAGE to "you're a hula-hooping pro!"
*/
//I HAVE BUGS COME BACK AND FIX ME PLS
function keepLoop(loops: number): string {
    let message = "";
    if (loops < 5) {
        message = "practice makes perfect"
    }
    if (loops >= 5){
        message = "there ya go buddy, you got this!"
    }
    if (loops <= 20) {
        message = "look how far you've come!"
    }
    if (loops >= 50) {
        message = "shoot for the stars!"
    }
    if (loops > 51) {
        message = "you're a hula-hooping pro!"
    }
}

export default keepLoop
