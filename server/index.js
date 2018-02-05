require('dotenv').config();
const express = require('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const _ = require('lodash');

const args = require('yargs')
    .option('d', {
        alias: 'dev',
        describe: 'Dev mode',
        default: false,
        type: 'boolean'
    }).argv;

const conf = require('./config')({ dev: args.dev });

const app = express();

const restrictToOffice = (req, res, next) => {
    if (_.includes(conf.office.ip, req.ip) || _.endsWith(req.ip, '127.0.0.1')) {
        next()
    } else {
        res.status(406).json({msg: 'Unauthorized access'}).end()
    }
};

const graphqlProxy = proxy({
    debug: true,
    target: conf.graphql,
    changeOrigin: false,
    pathRewrite: {
        '^/api/' : '/'
    }
});
app.use(restrictToOffice);
app.use('/api', graphqlProxy);
app.use(express.static(path.resolve(conf.base, '../assets')));

// ----------------------------------------
// Start HTTP server
// ----------------------------------------

console.info('┬ Starting HTTP server on port ' + conf.port + '...');
app.listen(conf.port, () => {
    console.info('└─> HTTP server state: [ RUNNING ]')
}).on('error', (error) => {
    if (error.syscall !== 'listen') {
    throw error
}
switch (error.code) {
    case 'EACCES':
        console.error('Listening on port ' + conf.port + ' requires elevated privileges!');
        return process.exit(1);
    case 'EADDRINUSE':
        console.error('Port ' + conf.port + ' is already in use!');
        return process.exit(1);
    default:
        throw error
}
});
