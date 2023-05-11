const swaggerJsdoc = require("swagger-jsdoc")

const options = {
    definition: {
      openapi: "3.0.3",
      info: {
        title: "Proyecto Voluntariado - Express API with Swagger (OpenAPI 3.0)",
        version: "0.1.0",
        description:
          "",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "u-tad",
          url: "https://u-tad.com"
        },
      },
      servers: [
        {
          url: "http://localhost:3011",
        },
      ],
      components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer"
            },
        },
        schemas:{
            members: {
                type: "object",
                required: ["first_name", "last_name", "email", "birth_date", "dni", "genre", "password", "studies", "phone"],
                properties: {
                    first_name: {
                        type: "string",
                        example: "Carlos"
                    },
                    last_name: {
                        type: "string",
                        example: "Martinez"
                    },
                    email: {
                        type: "string",
                        example: "miemail@google.com"
                    },
                    birth_date: {
                        type: "date",
                        example: "2002-4-23"
                    },
                    genre: {
                        type: "string",
                        example: "Hombre"
                    },
                    password: {
                        type: "string",
                        example: " "
                    },
                    studies: {
                        type: "string",
                        example: "Ingenieria del software"
                    },
                    phone: {
                        type: "string",
                        example: "123456789"
                    },
                    extra_info: {
                        type: "string",
                        example: " "
                    },
                },
            },
            preferences:{
                type: "object",
                required: ["category", "modality", "commitment_estimate", "availability", "member_id"],
                properties: {
                    category: {
                        type: "string",
                        example: "medioambiental"
                    },
                    modality: {
                        type: "string",
                        example: "presencial"
                    },
                    commitment_estimate: {
                        type: "date",
                        example: " "
                    },
                    avaliability: {
                        type: "date",
                        example: " "
                    },
                    member_id: {
                        type: "integer",
                        example: 1
                    }
                }
            },
            administrators:{
                type: "object",
                required: ["user", "email", "phone"],
                properties: {
                    user: {
                        type: "string",
                        example: "Admin1"
                    },
                    email: {
                        type: "string",
                        example: "admin1@u-tad.com"
                    },
                    phone: {
                        type: "string",
                        example: "123456789"
                    },
                }
            },
            sponsors:{
                type: "object",
                required: ["entity", "user", "password", "email"],
                properties: {
                    entity: {
                        type: "string",
                        example: "ACNUR"
                    },
                    user: {
                        type: "string",
                        example: "Carla"
                    },
                    password: {
                        type: "string",
                        example: " "
                    },
                    email: {
                        type: "string",
                        example: "sponsor1@u-tad.com"
                    }
                }
            },
            activities:{
                type: "object",
                required: ["name", "desciption", "category", "action_field", "involved_group", "location", "start_date", "end_date", "modality", "min_members", "max_members", "sponsor_id"],
                properties: {
                    name: {
                        type: "string",
                        example: "Ayuda a refugiados"
                    },
                    description: {
                        type: "string",
                        example: " "
                    },
                    category: {
                        type: "string",
                        example: "social"
                    },
                    action_field: {
                        type: "string",
                        example: " "
                    },
                    involved_group: {
                        type: "string",
                        example: "refugiados"
                    },
                    location: {
                        type: "string",
                        example: "578 Fair Oaks Court"
                    },
                    start_date: {
                        type: "date",
                        example: "2022-05-26"
                    },
                    start_date: {
                        type: "date",
                        example: "2023-12-21"
                    },
                    modality: {
                        type: "string",
                        example: "presencial"
                    },
                    min_members: {
                        type: "integer",
                        example: 22
                    },
                    min_members: {
                        type: "integer",
                        example: 75
                    },
                    sponsor_id: {
                        type: "integer",
                        example: 1
                    }
                }
            },
            participation:{
                type: "object",
                required: ["member_id", "activity_id"],
                properties: {
                    member_id: {
                        type: "integer",
                        example: 11
                    },
                    activity_id: {
                        type: "integer",
                        example: 3
                    }
                }
            },
            login: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    email: {
                        type: "string",
                        example: "miemail@google.com"
                    },
                    password: {
                        type: "string"
                    },
                }
            }
        },
      },
    },
    apis: ["./app/routes/*.js"],
  };
  
module.exports = swaggerJsdoc(options)