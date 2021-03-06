const request = require("request");
var geocode = (address) => {
   return new Promise((resolve , reject)=>{
             var s = encodeURIComponent(address);
    request(
        {url:`https://maps.googleapis.com/maps/api/geocode/json?address=${s}`,
    
        json: true
    },
    (error,response,body)=>{
        if(error)
        {
            reject("unable to connect to google");
        }
        else if(body.status==="ZERO_RESULTS"){
            reject("Please provide correct address");
        }
        else{
            resolve({
                address:body.results[0].formatted_address,
                latitude : body.results[0].geometry.location.lat,
                longitude : body.results[0].geometry.location.lng
            });
            }
        
    });
});
}
geocode('000000000').then((location)=>{
    console.log(JSON.stringify(location,undefined,3));
},(error)=>{
        console.log(error);
});




