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

})    
// Event listener for all button elements
$('button').on('click', function() {
    // "this" keyword refers to the button that was clicked
    var name = $(this).attr('data-name');
    
    //Constructing a URL search on giphy
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + "&q=" + name + "&limit=10&offset=0&lang=en";

    //performing the AJAX request
    $.ajax ({
        url: queryURL,
        method: "GET"
    })
        // After the data comes back from the API
        .then(function(response) {
            console.log(response);
            //storing an array of results in the results variable
            var results = response.data;
            
            // Looping over every result item
            for (var i = 0; i < results.length; i++) {

            //creating a div for the gif
            var giphyDiv = $('<div class = "giphy">');

            //storing the result item's rating
            var rating = results[i].rating;
            
            // Creating a paragraph tag with the result item's rating
            var p = $('<p>').text('Rating: ' + rating);

            // Creating an image tag
            var topicImage = $('<img>');

            //Giving the image tag a src attribute of a property pulled off the result item
            topicImage.attr("src", results[i].images.fixed_height.url);
            
            // Appending the paragraph and topicImage we created to the giphyDiv we created
            giphyDiv.append(p);
            giphyDiv.append(topicImage);

            $('.giphy-results').prepend(giphyDiv);
    };
})
});
