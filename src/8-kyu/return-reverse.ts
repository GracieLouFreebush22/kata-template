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

function reverseList(arrayParam: string[]): string []{
	let outputList: string[]= [];

	for (let i = arrayParam.length - 1; i >= 0; i--){
		let item = arrayParam[i];
		outputList.push(item);
	}
	return outputList
}

export default reverseList
