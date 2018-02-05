const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

module.exports = (opts) => {
    const confPaths = {
        base: process.cwd(),
        config: path.join(process.cwd(), 'config/config.yml'),
        configLocal: (opts.dev) ? path.join(process.cwd(), 'config/config-local.yml') : '/config/config-local.yml'
    };
    let conf = {};
    let confLocal = {};

    // Load and parse YAML
    try {
        conf = yaml.safeLoad(fs.readFileSync(confPaths.config, 'utf8'));
        confLocal = yaml.safeLoad(fs.readFileSync(confPaths.configLocal, 'utf8'))
    } catch (ex) {
        console.error(ex);
        process.exit(1)
    }

    // Merge with defaults
    conf = _.defaultsDeep(confLocal, conf);

    conf.graphql = opts.dev ? conf.graphql.dev : conf.graphql.prod;

    // Set dynamic configs
    conf.base = path.resolve(process.cwd(), conf.base);
    conf.dev = opts.dev;

    return conf
};
