switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod')({env: 'prod'});
    break;
  case 'dev':
  case 'development':
  default:
  console.log(process.env.NODE_ENV)
    module.exports = require('./config/webpack.dev')({env: 'dev'});
}