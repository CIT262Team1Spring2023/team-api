const fetch = require("node-fetch2")

it("Should get a url with a Hello name",async ()=>{ 
    const response = await fetch('http://localhost:3000/jj');

const name = await response.text();

expect(name).toBe("Hello JJ");
});