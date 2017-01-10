$(document).ready(function() {
  $(".Term").click(function() {
    var cardClick = $(this);
    cardClick.toggle();
    cardClick.next().toggle();
    cardClick.closest(".col-md-3").toggleClass("flashcard-color");
  });
  $(".Definition").click(function() {
    var cardClick = $(this);
    cardClick.toggle();
    cardClick.prev().toggle();
    cardClick.closest(".col-md-3").toggleClass("flashcard-color");
  });
  $(".reset-button").click(function() {
    $(".Definition").hide();
    $(".Term").show();
    $(".col-md-3").removeClass("flashcard-color");

  });
  $(".showall-button").click(function() {
    $(".Term").hide();
    $(".Definition").show();
    $(".col-md-3").removeClass("flashcard-color");
    $(".col-md-3").addClass("flashcard-color");

  });
});
