$(document).ready(function() {
  $("#blanks form").submit(function() {
    console.log("done")
    var blanks = ["name", "description", "date", "starttime", "endtime"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });
    $("#story").show();
    event.preventDefault();
  });
});
