const fetch = require("node-fetch2")

it("test", async function(){

const response = await fetch ('http://localhost:3000/austin');

const name = await response.text();

expect(name).toBe("Hello Austin");});
