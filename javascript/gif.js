var animals = ["Panda", "Tiger", "Cat", "Dog", "Bird", "Fish", "Chicken"];

function displayAnimal(){
    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=RpbF7yK9jdJvEIcxqxFvfqB36r3852SI&tag=" + animal;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var animalDiv = $("<div class=gifAnimal>");
         animalDiv =response.url;
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