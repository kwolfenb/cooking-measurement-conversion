$(document).ready(function() {
  $("form#1").submit(function() {
    console.log("done")
    var userInputPounds = $("input#pounds").val();
    $(".pounds").text(lb2kg(userInputPounds)).val();
    $("#story1").show();
    event.preventDefault();
  });
  $("form#2").submit(function() {
    console.log("done")
    var userInputLitres = $("input#litres").val();
    $(".litres").text(litresToGallons(userInputLitres)).val();
    $("#story2").show();
    event.preventDefault();
  });
  $("form#3").submit(function() {
    console.log("done")
    var userInputOunces = $("input#ounces").val();
    $(".ounces").text(ouncesToGrams(userInputOunces)).val();
    $("#story3").show();
    event.preventDefault();
  });
});
function lb2kg(pound){
  return pound*0.453592;
}
function litresToGallons(litres) {
  return litres * 0.264172;
}
function ouncesToGrams(ounces) {
  return ounces * 28.3495;
}
