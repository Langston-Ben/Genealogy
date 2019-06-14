jQuery(document).ready(function ($) {
    $.ajax({
        url: "http://api.wunderground.com/api/1bd68c80e4a0bf3b/geolookup/conditions/forecast10day/q/MS/Southaven.json",
        dataType: "jsonp",
        success: function (parsed_json) {
            var location = parsed_json['location']['city'];
            var temp_f = parsed_json.current_observation.temp_f;
            var cond = parsed_json['current_observation']['weather'];
            var high = parsed_json['forecast']['simpleforecast']['forecastday'][0]['high']['fahrenheit'];
            var low = parsed_json.forecast.simpleforecast.forecastday[0].low.fahrenheit;
            var precip = parsed_json['forecast']['simpleforecast']['forecastday'][0]['qpf_allday']['in'];
            var wind = parsed_json.current_observation.wind_mph;
            var icon  = parsed_json.current_observation.icon;
            var icon_url = parsed_json.current_observation.icon_url;


            document.getElementById("temp").innerHTML = temp_f;
            document.getElementById("cond").innerHTML = cond;
            document.getElementById("wind").innerHTML = wind;
            document.getElementById("high").innerHTML = high;
            document.getElementById("low").innerHTML = low;
            document.getElementById("precip").innerHTML = precip;
            document.getElementById("icon").innerHTML = icon;
            document.getElementById("w_icon").src = icon_url;



        }
    });
});
