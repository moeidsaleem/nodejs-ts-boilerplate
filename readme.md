# Node.js Doctrine Boilerplate 2021

With the rapid changes in Node.js, How we consume Node.js in our future project needs to be latest and upto date according to the standards.
This year i bring you Node.js Doctrine Boilerplate 2021 with awesomes tools like `prisma` and much more. I have also added multiple server support i.e. `Express` and `Fastify` to meet the needs. I recommend using the best for your use case scenario.

Proper Environment segregation along with advance 3 layer architecture so that you can focus on development rather than messy setup.
I am planning to add microservice support also for you to utilize along with the basic `REST` api.

## Pre-requiste

- Node.js v12.x
- Typescript
- prisma CLI
- PostgreSQL

## Getting Started

To start using Node.js Doctrine 2021 boilerplate is very easy with these simple installation steps
- `npm install`

- Edit the .env configuration file with your database url
``` JS
JWT_SECRET ='p4sta.w1th-b0logn3s3-s@uce'
NODE_ENV='development'
LOG_LEVEL='silly'
# Mongo DB
# Local development
DATABASE_URL='postgresql://USER:PASSWORD@HOST:PORT/DATABASE'


# SERVER 
## ServerType can be `express` or `fastify`
SERVER_TYPE='express' 
PORT=3000

# Debug 
LOG_LEVEL='debug'
```

## Features

- Multiple Server Supports ( Express + Fastify )


### Libraries

- TypeScript
- PrismaJS
- TypeDI (dependency injector)
- winston ( logging Mechanism )
- celebrate
- express-jwt


## ABOUT AUTHOR

I am Moeid Saleem Khan, World leading Software Architect with over 300+ projects in production. I provide consultancy to startups and mentor CTO to make the right choice. I have developed a 90 days startup bootup plan which will set your startup's IT Infrastructure in the right direction and can enter the market. Learn more about me by googling - "Moeid Saleem" 
Connect with me via https://moeidsaleem.com 