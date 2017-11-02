//const request = require("request");
const yargs = require("yargs");
//const weather = require("./weather/weather");
//const gecode = require("./geocode/geocode.js");
const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
cd
