const swaggerJsdoc = require("swagger-jsdoc");

/**
 *
 * @type {{openapi: string, info: {title: string, version: string}}}
 */
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de mi api",
    version: "1.0.1"
  },
  servers: [
    {
      url: "http://localhost:3000/api"
    }
  ]
};

/**
 *
 * @type {{apis: string[]}}
 */
const options = {
  swaggerDefinition,
  apis: [
    "./routes/*.js"
  ]
};

const openApiConfiguration = swaggerJsdoc(options);

module.exports = openApiConfiguration;