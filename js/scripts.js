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
});
