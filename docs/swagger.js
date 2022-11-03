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
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer"
      }
    },
    schemas: {
      authLogin: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string"
          },
          password: {
            type: "string"
          },
        }
      },
      authRegister: {
        type: "object",
        required: ["email", "password", "name"],
        properties: {
          name: {
            type: "string"
          },
          age: {
            type: "integer"
          },
          email: {
            type: "string"
          },
          password: {
            type: "string"
          },
        }
      },
      track: {
        type: "object",
        required: ["name", "album", "cover", "artist"],
        properties: {
          name: {
            type: "string"
          },
          album: {
            type: "string"
          },
          cover: {
            type: "string"
          },
          artist: {
            type: "object",
            properties: {
              name: {
                type: "string"
              },
              nickname: {
                type: "string"
              },
              nationality: {
                type: "string"
              },
            }
          },
          duration: {
            type: "object",
            properties: {
              start: {
                type: "integer"
              },
              end: {
                type: "integer"
              },
            }
          },
          mediaId: {
            type: "string"
          }
        }
      }
    }
  }
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