var bodyWidth = $("body").width();
console.log(bodyWidth), bodyWidth <= 980 && $(".change-upto-9").attr("class", "col-md-9"), bodyWidth <= 768 && $(".change-upto-12").attr("class", "col-md-12"), $(".close-mobile-menu-btn").click(function () {
  $(".mobile-navbar").hide();
}), $(".open-mobile-menu-btn").click(function () {
  $(".mobile-navbar").show();
});