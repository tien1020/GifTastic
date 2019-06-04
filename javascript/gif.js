var animals = ["Panda", "Tiger", "Cat", "Dog", "Bird", "Fish", "Chicken"];

function displayAnimal(){
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=RpbF7yK9jdJvEIcxqxFvfqB36r3852SI&limit10" ;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var animalDiv = $("<div class=gifAnimal>");
        var rating = response.data.rating;
        var ratingShow = $("<p>").text("Rating: " + rating);
        animalDiv.append(ratingShow);
         var animalGif =response.data.url;
         var animalGiphy = $("<img>").attr("src", animalGif);
         var dataStill = $("<img>").attr("data-still", response.data.images.original_still.url);
         $(".gifAnimal").on("click", function() {
        
            var state = $(this).attr("data-state");
           
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });
       $("#animalGifs").append(animalDiv) ;
    });
}


function animalButtons () {
    $("#buttons-view").empty();
    for (var i =0; i<animals.length; i++) {
        var a= $("<button>");
        a.addClass("animal-btn");
        a.attr("data-name", animals[i]);
        a.text(animals[i]);
        $("#buttons-view").append(a);
    }
}
    $("#add-animal").on("click", function(event){
        event.preventDefault();
        var animal = $("#animal-input").val().trim();
        animals.push(animal);
        animalButtons();
    })

    $(document).on("click", ".animal-btn", displayAnimal);
    animalButtons();


    $(".gif").on("click", function() {
        
        var state = $(this).attr("data-state");
       
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });