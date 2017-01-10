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
  $(".reset-button").click(function() {
    $(".Definition").hide();
    $(".Term").show();

  });
  $(".showall-button").click(function() {
    $(".Term").hide();
    $(".Definition").show();

  });
});
