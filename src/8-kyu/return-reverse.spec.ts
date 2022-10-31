import reverseList from "./return-reverse"

/* assume list of anything
*/
test("given list return reverse of list", () => {
    expect(reverseList(["hi", "my", "name", "is"])).toEqual(["is", "name","my","hi"]);
  });