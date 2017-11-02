//const request = require("request");
const yargs = require("yargs");
const weather = require("./weather/weather");
const gecode = require("./geocode/geocode.js");
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
var lat=25.6371463;
var long = 85.01295089999999;
gecode.geocodeAddress (argv.address,(error,result)=>{
      if(error)
        console.log(error);
        else{
       console.log(JSON.stringify(result.address));
       weather.getWeather(result.latitude,result.longitude,(error1,wresult)=>{
           lat = Math.round((wresult.temperature-32)*5/9);
           long = Math.round((wresult.atemperatur-32)*5/9);
           if(error1)
           console.log(error1);
           else
           console.log(`Its currently : ${lat}°C \nBut it feels like : ${long}°C`)
       });
       }
})

