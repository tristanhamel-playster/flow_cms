
'use strict'

/**
 * FUSEBOX
 */

const autoprefixer = require('autoprefixer')
const CleanCSS = require('clean-css')
const chalk = require('chalk')
const flexbugsfixes = require('postcss-flexbugs-fixes')
const flexibility = require('postcss-flexibility')
const fs = require('fs-extra')
const fsbx = require('fuse-box')
const nodemon = require('nodemon')
const _ = require('lodash')

const args = require('yargs')
    .option('d', {
        alias: 'dev',
        describe: 'Start in Developer mode',
        default: false,
        type: 'boolean'
    })
    .option('r', {
        alias: 'hmr',
        describe: 'Enable in-page hot reload',
        default: false,
        type: 'boolean'
    })
    .option('g', {
        alias: 'glimpse',
        describe: 'Use Glimpse performance monitoring tool',
        default: false,
        type: 'boolean'
    })
    .help('h')
    .alias('h', 'help')
    .argv

const dev = args.dev

if (dev) {
    console.info(chalk.bgWhite.black(' Starting Flow CMS in DEVELOPER mode... '))
} else {
    console.info(chalk.bgWhite.black(' Starting Flow CMS in BUILD mode... '))
}

console.info(chalk.white('└── ') + chalk.green(`Cleaning fusebox's cache...`))
fs.emptyDirSync('./.fusebox')

// -------------------------------------------------------
// FUSEBOX PRODUCER
// -------------------------------------------------------

const ALIASES = {
    'vue': (dev) ? 'vue/dist/vue.js' : 'vue/dist/vue.min.js',
    'velocity-animate': (dev) ? 'velocity-animate/velocity.js' : 'velocity-animate/velocity.min.js'
}

const babelrc = fs.readJsonSync('.babelrc')

const fuse = fsbx.FuseBox.init({
    homeDir: './client',
    output: `./assets/js/$name.js`,
    alias: ALIASES,
    target: 'browser',
    plugins: [
        fsbx.EnvPlugin({
            NODE_ENV: (dev) ? 'development' : 'production'
        }),
        fsbx.VueComponentPlugin({
            script: fsbx.BabelPlugin(babelrc),
            template: fsbx.ConsolidatePlugin({
                engine: 'pug'
            }),
            style: [
                fsbx.SassPlugin({
                    includePaths: ['node_modules'],
                    outputStyle: dev ? 'nested' : 'compressed'
                }),
                fsbx.PostCSS([
                    autoprefixer({
                        remove: false,
                        browsers: babelrc.presets[0][1].targets.browsers
                    }),
                    flexibility,
                    flexbugsfixes
                ]),
                fsbx.CSSPlugin()
            ]
        }),
        [
            fsbx.SassPlugin({
                includePaths: ['node_modules'],
                outputStyle: dev ? 'nested' : 'compressed'
            }),
            fsbx.PostCSS([
                autoprefixer({
                    remove: false,
                    browsers: babelrc.presets[0][1].targets.browsers
                }),
                flexibility,
                flexbugsfixes
            ]),
            fsbx.CSSPlugin(dev ? {} : {
                group: 'bundle.css',
                outFile: './assets/css/bundle.css',
                inject: false
            })
        ],
        fsbx.SVGPlugin(),
        fsbx.BabelPlugin(babelrc),
        !dev && fsbx.UglifyESPlugin()
    ],
    debug: true,
    log: true
})

// -------------------------------------------------------
// FUSEBOX DEV
// -------------------------------------------------------

if (dev) {
    fuse.dev({
        port: 5555,
        httpServer: false
    })
}

// -------------------------------------------------------
// FUSEBOX BUNDLES
// -------------------------------------------------------

if (dev) {
    fuse.bundle('libs').instructions('~ app.js')
    fuse.bundle('app').instructions('!> [app.js]').hmr({ reload: !args.hmr }).watch()
} else {
    fuse.bundle('bundle.min.js').instructions('> app.js')
}

// -------------------------------------------------------
// FUSEBOX RUN
// -------------------------------------------------------

fuse.run().then((producer) => {
    console.info(chalk.white(`\n└── `) + chalk.green('JS compilation + bundling... ') + chalk.green.bold('Done'))
if (dev) {
    console.info(chalk.white('└── ') + chalk.green(`Launching project in dev/watch mode...`))
    nodemon({
        exec: args.g ? 'glimpse server --dev --location CA | bunyan -o short' : 'node server --dev --location CA | bunyan -o short',
        ignore: ['client/', 'assets/', '/test/', 'test/'],
        ext: 'js json graphql',
        watch: ['server'],
        env: {
            'NODE_ENV': 'development'
        }
    })
} else {
    process.stdout.write(chalk.white(`└── `) + chalk.green('Optimizing CSS bundle... '))
    let cssBundleOutput = new CleanCSS({
        level: {
            1: {
                all: true,
                specialComments: false
            },
            2: {
                all: true
            }
        }
    }).minify(['./assets/css/bundle.css'])
    fs.writeFileSync('./assets/css/bundle.css', cssBundleOutput.styles, 'utf8')
    let cssBundleEfficiency = _.round(cssBundleOutput.stats.efficiency * 100, 2)
    process.stdout.write(chalk.green.bold(`Done`) + chalk.cyan.bold(` (${cssBundleEfficiency}% efficiency)`))
    console.log('\n\n ' + chalk.bgWhite.black(` COMPLETED `) + '\n')
}
return true
}).catch(err => {
    console.error(err)
console.error(chalk.red(' X Bundle compilation failed! ' + err.message))
process.exit(1)
})
