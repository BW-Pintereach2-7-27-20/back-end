//dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

//routers
const accountsRouter = require('./accounts/accountsRouter.js');
const boardsRouter = require('./boards/boardsRouter.js');
const articlesRouter = require('./articles/articlesRouter.js');
const { PORT } = require('./globalConstants.js');

//middleware
 
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', accountsRouter);
server.use('/boards', boardsRouter);
server.use('/articles', articlesRouter);
server.get('/', (req, res) => res.status(200).send('<h1>API is available</h1>'));
//network

const noEnv = process.env.NODE_ENV;
if (noEnv === 'test') {
  try {
    module.exports = server
  } catch (error) {
    throw new Error(`NODE_ENV: "${ noEnv }" is not supported`)
  }
} if (noEnv === 'production' || noEnv === 'development') {
  try {
    server.listen(PORT, () => {
      console.log(`\n=== Server listening on port ${PORT} ===\n`);
    });
  } catch (error) {
    throw new Error(`NODE_ENV: "${ noEnv }" is not supported`)
  }
}