const navLink = document.querySelectorAll('.Header nav ul li');
const sections = document.querySelectorAll("div");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    console.log(sectionHeight);
    if (pageYOffset >= (sectionTop - sectionHeight/10)) {
      current = section.getAttribute("id");
    }
  });
  document.querySelectorAll('.Header nav ul li').forEach((li) => {
	var div_child = li.lastChild;
	div_child.classList.remove("nav_link_dot");
    if (li.classList.contains(current)) {
      div_child.classList.add("nav_link_dot");
    }
  });
});
