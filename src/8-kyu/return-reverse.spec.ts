import reverseList from "./return-reverse"

/* assume list of anything
*/
test("given list return reverse of list", () => {
    expect(reverseList(["hi", "my", "name", "is"])).toEqual(["is", "name","my","hi"]);
  });

  test("given list return reverse of list", () => {
    expect(reverseList([0,1,2,3,4])).toEqual([4,3,2,1,0]);
  });

  test("given list return reverse of list", () => {
    expect(reverseList([ [0,0], ["hi", "world"], [true, false]])).toEqual([[true,false], ["hi", "world"], [0,0]])
  })