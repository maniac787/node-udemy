const request = require("supertest");
const app = require("../app")
const {userModel} = require("../models");

const testAuthLogin = {
  "email": "test6@qwe.com",
  "password": "qwe123"
};

const testAuthRegister = {
  "name": "rch",
  "age": 38,
  "email": "rch2@qwe.com",
  "password": "qwe123"
};

beforeAll(async () => {
  await userModel.deleteMany();
});

describe("[AUTH] esta es la prueba de /api/auth", () => {
  test("esto bereia retorna un 404", async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send(testAuthLogin);

    expect(response.statusCode).toEqual(404);
  });

  test("esto bereia retorna un 201", async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send(testAuthRegister);

    expect(response.statusCode).toEqual(201);
    expect(response.body).toHaveProperty("user");
    expect(response.body).toHaveProperty("user.name");
    expect(response.body).toHaveProperty("token");
  });
})