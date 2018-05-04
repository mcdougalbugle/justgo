//should probably put api key in the .env -->
var YOUR_API_KEY = "AIzaSyA40MnFrb860AigP6w4wR9Efw-ClUBr1F0"
var urlQuery = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + YOUR_API_KEY
//this is the geolocation code --> 
$.ajax({
    url : urlQuery,
    method: "POST"
}).then(function(response) {
   console.log(response)
})