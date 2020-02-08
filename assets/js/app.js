// Toggle completed class on click
$("ul").on("change", "input", function() {
  $(this)
    .parent()
    .toggleClass("complete");
});

// Click on X to delete todo
$("ul").on("click", "i", function(e) {
  $(this)
    .parent()
    .fadeOut(300, function() {
      $(this).remove();
    });
  e.stopPropagation();
});

$("#new").on("keypress", function(e) {
  if (e.which === 13) {
    // Grabbing text from input
    var todo = $(this).val();
    // Create new item
    $("ul").append(
      "<li><input type='checkbox'/>" +
        todo +
        "<i class='fas fa-trash'></i>" +
        "</li>"
    );
    $(this).val("");
  }
});
