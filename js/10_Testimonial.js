jQuery(document).ready(function ($) {
  var owlCrousel = $(".owl-carousel");
  owlCrousel.owlCarousel({
    items: 1,
    nav: false,
    dots: true,
    margin: 50,
    // autoplay: true,
    loop: true,
    // stagePadding: 50,
    mouseDrag: true,
    touchDrag: true,
  });
  owlCrousel.on("changed.owl.carousel", function (property) {
    var current = property.item.index;
    var prevThumb = $(property.target)
      .find(".item")
      .eq(current)
      .prev()
      .find("img")
      .attr("src");
    var nextThumb = $(property.target)
      .find(".item")
      .eq(current)
      .next()
      .find("img")
      .attr("src");
    $(".thumb-prev").find("img").attr("src", prevThumb);
    $(".thumb-next").find("img").attr("src", nextThumb);
  });
  $(".thumb-next").on("click", function () {
    owlCrousel.trigger("next.owl.carousel", [300]);
    return false;
  });
  $(".thumb-prev").on("click", function () {
    owlCrousel.trigger("prev.owl.carousel", [300]);
    return false;
  });
});
