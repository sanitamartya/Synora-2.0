const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/config/database");

test("GET /users should return users", async function () {
  const response = await request(app).get("/users");

  expect(response.statusCode).toBe(200);
  expect(Array.isArray(response.body)).toBe(true);
});

test("POST /users should create a user", async function () {
  const response = await request(app).post("/users").send({
    name: "Test User",
  });

  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe("Test User");
});

test("POST /users should reject missing name", async function () {
  const response = await request(app).post("/users").send({});

  expect(response.statusCode).toBe(400);
  expect(response.body.error).toBe(
    "Name is required and must be a non-empty string",
  );
});

test("unknown route should return 404", async function () {
  const response = await request(app).get("/does-not-exist");

  expect(response.statusCode).toBe(404);
  expect(response.body.error).toBe("Route not found");
});

test("error handler should return 500", async function () {
  const response = await request(app).get("/error");

  expect(response.statusCode).toBe(500);
  expect(response.body.error).toBe("Internal server error");
});

afterAll(async function () {
  await pool.end();
});
