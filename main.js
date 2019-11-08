//una url de para usar en terminalhttps://github.com/apiaryio/api-blueprint/blob/master/assets/lifecycle.png
const https = require('https');
let options = new URL(process.argv[2]);

const req =
    https.request(options, (res) => {
    if(err){
        throw err;
    }
    res
        return console.log('jhh',res);
});

console.log(req);