const request = require("supertest");
const app = require("../app")
const {userModel} = require("../models");
const mongoose = require("mongoose");

const testAuthLogin = {
  "email": "test@qwe.com",
  "password": "qwe123"
};

const testAuthRegister = {
  "name": "rch",
  "age": 38,
  "email": "test@qwe.com",
  "password": "qwe123"
};

beforeAll(async () => {
  await userModel.deleteMany();
});

afterAll(() => {
  mongoose.connection.close();
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

  test("esto deberia de retornar password no valido 401", async () => {
    const newTestAuthLogin = {...testAuthLogin, password:"22222222"}
    const response = await request(app)
      .post("/api/auth/login")
      .send(newTestAuthLogin);

    expect(response.statusCode).toEqual(401);
  });

  test("esto deberia de retornar 200 login exitoso", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send(testAuthRegister);

    expect(response.statusCode).toEqual(200);
  });
})