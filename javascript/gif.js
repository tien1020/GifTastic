var animals = ["Panda", "Tiger", "Cat", "Dog", "Bird", "Fish", "Chicken"];

function displayAnimal(){
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=RpbF7yK9jdJvEIcxqxFvfqB36r3852SI&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("#animalShow").empty();
        for (var i=0; i < 10; i++) {
            var animalDiv = $("<div class='animalDiv'>");
            // $("#animalShow").prepend(animalDiv);
            var imagesStill = response.data[i].images.downsized_still.url;
            var imagesAnimate = response.data[i].images.downsized.url;
            // var imageDiv = $("<div class='col-md-4'>");
            var image = $("<img>");
            // $(imageDiv).append(image);
            image.attr("src",imagesStill);
            image.attr("data-state","still");
            image.attr("data-animate",imagesAnimate);
            image.attr("data-still",imagesStill);
            image.addClass("gif");
            animalDiv.append(image) ;

            var rating = response.data[i].rating;
        var ratingShow = $("<p>").text("Rating: " + rating);
        animalDiv.append(ratingShow) ;
        $("#animalShow").prepend(animalDiv);
       

        

            
        }
     
        

        
    })
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
        if (animal!= ""){
            animals.push(animal);
        animalButtons();
        }
        
    });

    $(document).on("click", ".animal-btn", displayAnimal);
    animalButtons();

        $(document).on("click", ".gif", function() {
                    var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
        });

    
      