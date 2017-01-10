$(document).ready(function() {
  $(".Term").click(function() {
    var cardClick = $(this);
    cardClick.toggle();
    cardClick.next().toggle();
  });
  $(".Definition").click(function() {
    var cardClick = $(this);
    cardClick.toggle();
    cardClick.prev().toggle();
  });
});
