import fs from 'fs/promises';

async function readFileAndSolveProblem() {
    const inputRaw = await fs.readFile("./inputs/inputDay1A.txt", { encoding: 'utf8' })
    const inputLines: string[] = inputRaw.split("\n");
    console.log({ inputLines })

    //TODO: solve the problem here, based on inputLines

}

readFileAndSolveProblem()

/*
funcation name: findMaxCalories
params: input data 
return: a number var called MAXELF
- need to find elf with the biggest calories 
- elfs seperated by a space 
=========================================
declare strArr set to a split  by spaces 
declare totalArr set to an empty array
for every section of data split by a space 
    collect total 
    push totoal into totalArr
end for
sort array 
return max number (eithers 0 or arr.lenngth-1)
*/

