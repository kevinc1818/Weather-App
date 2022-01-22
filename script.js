var city;
$(document).ready(function() {
    $.get("http://ipinfo.io", function(response) {
        console.log(response);
        
        city = response.city;
        
        console.log("my city is" + city);

        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=6edfef5112f8f7df61ba2853bc243b1f", 
        function(data) {
    
            var temp = data.main.temp;
            var city_name = data.name;

            if (temp <= 0) {
                $("body").css("background-color", "blue");
            } else {
                $("body").css("background-color", "yellow");
            }

            $('.city').append(city_name);
            $('.temp').append(Math.round(temp) + "°");
      
        }
        );

    }, "jsonp");
});










