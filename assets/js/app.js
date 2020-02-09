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
    .fadeOut(100, function() {
      $(this).remove();
    });
  e.stopPropagation();
});

$("#new").on("keypress", function(e) {
  var str1 = "<li><input type='checkbox'/>";
  var str2 = "<i class='fas fa-trash'></i>" + "</li>";
  if (e.which === 13) {
    // Grabbing text from input
    var todo = $(this).val();
    // Create new item and fade into ul
    $(str1 + todo + str2)
      .appendTo("ul")
      .hide()
      .fadeIn(200);
    // Reset text field
    $(this).val("");
  }
});
