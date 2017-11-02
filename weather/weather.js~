const request = require("request");
var weather = (lat,long,callback)=>{request({
    url : `https://api.darksky.net/forecast/16fcaefc2b3ea087760cc43035f15f21/${lat},${long}`,
    json : true
},(error,response,body)=>{
    if(error){
        callback("Unable to connect");
    }
    else if(!error && response.statusCode === 200){
    callback(undefined,{
        temperature: body.currently.temperature,
        atemperatur: body.currently.apparentTemperature
    })}
    else 
    callback("Unable to fetch weather :)");
   });
};
module.exports.getWeather = weather;
