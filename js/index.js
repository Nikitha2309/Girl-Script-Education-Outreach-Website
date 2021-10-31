$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = $(this).data("include");
    $(this).load(file);
  });
});
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
span.onclick = function() {
  modal.style.display = "none";
}