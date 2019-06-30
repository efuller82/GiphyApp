var giph;
//something is off here
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&q=cats&limit=10&offset=0&rating=G&lang=en";

$.ajax ({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
})