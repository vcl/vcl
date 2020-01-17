const fetch = require('node-fetch');

fetch("http://scss2sass.herokuapp.com/converter", {
  "credentials":"include",
  "headers":{
    "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "accept-language":"en-US,en;q=0.9",
    "cache-control":"max-age=0",
    "content-type":"application/x-www-form-urlencoded",
    "upgrade-insecure-requests":"1"
  },
    "referrer": "http://scss2sass.herokuapp.com/",
    "referrerPolicy": "no-referrer-when-downgrade",
    "body": "utf8=%E2%9C%93&authenticity_token=gzclQg0O1s3VuzmUjLfIoVlawMVewyEefngJFmNRzZEcrHtdcDMDRhKoFktd4NeCDfKgC485jrhcHD0e2Pa%2BoA%3D%3D&converter%5Bsource%5D=%40import+%22%40vcl%2Ftheme%22%0D%0A%0D%0A.application-footer%0D%0A++box-sizing%3A+border-box%0D%0A++position%3A+relative%0D%0A++color%3A+%24app-footer-color%0D%0A++background-color%3A+%24app-footer-bg-color%0D%0A++margin-top%3A+2em%0D%0A++margin-bottom%3A+2em%0D%0A&converter%5Bfrom_syntax%5D=sass&commit=Convert",
    "method": "POST",
    "mode": "cors"}
).then(result => {
  return result.text()
}).then(x => console.log(x));

