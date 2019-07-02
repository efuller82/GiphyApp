var APIkey = "BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9"



//array of my likes
topics = ['South Park', 'funny faces', 'Trump', 'lazy', 'Forest Gump'];


// function for displaying topics data
function renderButtons() {

    // Deleting the topics buttons prior to adding new topics buttons
    // (this step is necessary otherwise we will have repeat buttons)
    $('.buttons').empty();


//loop that creates buttons from the likesArray 
for (var i = 0; i < topics.length; i++){
    //dynamically generating buttons for each topic in the array
    var a = $('<button>')
    //adding a class
    a.addClass('topic');
    //adding a data-attribute with a value of the topic at index i
    a.attr('data-name', topics[i]);
    //providing the button's text with a value of the topic at index
    a.text(topics[i]);
    //adding the button to the html
    $('.buttons').append(a);
}
}

renderButtons();
//on click function 
$('#searchButton').on('click', function(event){
    event.preventDefault();
    //grabs text from input box
    var giphyInput = $('#giphy-search').val().trim();
    //the text from the box is then added to our array
    topics.push(giphyInput);
    renderButtons();
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + giphyInput + "&limit=10&offset=0&rating=G&lang=en";
    
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var giphyDiv = $('<div class = "giphy">');

        var rating = response.data[0].rating;
        var pOne = $('<p>').text('Rating: ' + rating);

        giphyDiv.append(pOne);

        $('.giphy-results').append(giphyDiv);
    })
})

