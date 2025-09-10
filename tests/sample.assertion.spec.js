const{test,expect}= require("@playwright/test")
test.skip("My First Test",async function name({page}) {
    expect(1).toBe(1)
});

test("My Second Test",async function name({page}) {
   expect(1).toBe(1.0)
});


test("My Third Test",async function name({page}) {
   expect("Prajot Gahukar").toContain("Prajot");
});

test("My Fourth Test",async function name({page}) {
   expect(true).toBeTruthy();
   expect(true).toBeFalsy();
});

test.only("My Fifth Test",async function name({page}) {
   expect("Prajot Gahukar".includes("Prajot")).toBeTruthy();
});
