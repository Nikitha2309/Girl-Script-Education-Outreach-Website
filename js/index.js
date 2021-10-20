$(function () {
  var includes = $("[data-include]");
  $.each(includes, function () {
    var file = $(this).data("include");
    $(this).load(file);
  });
});
const navLink = document.querySelectorAll('.Header nav ul li');
const sections = document.querySelectorAll("div");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll('.Header nav ul li').forEach((li) => {
    console.log(li);
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
