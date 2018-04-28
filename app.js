var YOUR_API_KEY = "AIzaSyA40MnFrb860AigP6w4wR9Efw-ClUBr1F0"

var urlQuery = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + YOUR_API_KEY
$.ajax({
    url : urlQuery,
    method: "POST"
}).then(function(response) {
   console.log(response)
})
//accuracy: 2685location: {lat: 33.658895099999995, lng: -117.8282121}__proto__: Object
//chick-fil-a: accuracy: 805location: {lat: 33.6490106, lng: -117.8369926}__proto__: Object