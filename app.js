const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia'
}, (err, res, body) => {
    const result = JSON.parse(body);
    console.log(result.results[0].formatted_address);

}); 