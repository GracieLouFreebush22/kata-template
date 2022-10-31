/* PSEUDOCODE:
function:
=========
name: reverseList
parameter: list
return type: list

note: intentionally avoiding using library functions to reverse or iterate.

pseudocode:
===========
outputList = empty list
for index from (list length minus 1) down to 0
	item = list[index]
	append item to outputList
return outputList

*/

function reverseList(arrayParam: (string| number | boolean| object| []) []): (string| number | boolean |object| []) []{
	let outputList: (string| number | boolean | object| []) [] = [];

	for (let i = arrayParam.length - 1; i >= 0; i--){
		let item: (string| number | boolean | object| []) = arrayParam[i];
		outputList.push(item);
		console.log(item, i);
	}
	return outputList
}

export default reverseList
