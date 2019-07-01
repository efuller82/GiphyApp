var APIkey = "BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"



//array of my likes
likesArray = ['South Park', 'funny faces', 'Trump', 'lazy', 'Forest Gump'];

//calls the API


//loop that creates buttons from the likesArray 
for (var i = 0; i < likesArray.length; i++){
    var buttons = $('<button>' + likesArray[i] + '</button>')
    buttons.appendTo('.buttons');
}

//on click function 
$('#giphy-search').on('click', function(event){
    event.preventDefault();
    var giphyInput = $('#giphy-search').val();
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + giphyInput + "&limit=10&offset=0&rating=G&lang=en";
    
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    })
})