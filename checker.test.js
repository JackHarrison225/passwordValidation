const checkPassword = require("./checker")


test("return fase when given empty", () => {

     expect(checkPassword("")).toBe(false);  

})

test("less that 8 with chars and numbers = false", () => {

     expect(checkPassword("Wedfh%5")).toBe(false);

})
test("more than 20 = false", () => {

     expect(checkPassword("Wuhsbdhetdgbsgtra$%54")).toBe(false);

})
test("return true for valid password", () => {

     expect(checkPassword("Testing193!")).toBe(true);
     expect(checkPassword("testinG193!")).toBe(true);
     expect(checkPassword("test1nGi93!")).toBe(true);
     expect(checkPassword("!test1nGi93")).toBe(true);


})
