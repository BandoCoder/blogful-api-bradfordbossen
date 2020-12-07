const app = require("../src/app");

describe("App", () => {
  it('GET / responds with 200 containing "Hello, world! BRUV"', () => {
    return supertest(app).get("/").expect(200, "Hello, boilerplate; BRUV");
  });
});
