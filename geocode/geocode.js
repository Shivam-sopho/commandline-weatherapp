const request = require("request");
module.exports.geocodeAddress =(address,callback)=> {
     var s = encodeURIComponent(address);
 request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${s}`,
    json: true
 },
 (error,response,body)=>{
    if(error)
    {
        callback("unable to connect to google");
    }
    else if(body.status==="ZERO_RESULTS"){
       callback("Please provide correct address");
    }
    else{
        callback(undefined,{
            address:body.results[0].formatted_address,
            latitude : body.results[0].geometry.location.lat,
            longitude : body.results[0].geometry.location.lng
    })
    }
 });
}
