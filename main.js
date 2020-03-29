$(".show__acrordeon").click(function() {
  let accordion_text = $(this)
    .parent()
    .find(".info-text");
  let change_icon = $(this).find(".change");

  if (accordion_text === "undefined") {
    return;
  }

  console.log(accordion_text);

  if (accordion_text.is(":visible")) {
    accordion_text.fadeOut("fast");
    change_icon.toggleClass("fa-plus-circle fa-minus-circle");
    $(this).css({ "border-bottom-left-radius": "10px" });
    $(this).css({ "border-bottom-right-radius": "10px" });
  } else {
    $(this).css({ "border-bottom-left-radius": "0" });
    $(this).css({ "border-bottom-right-radius": "0" });
    accordion_text.fadeIn("slow");
    change_icon.toggleClass("  fa-minus-circle fa-plus-circle");
  }
});

$("ul.tab-large li").click(function() {
  let tabcontent = $(this).attr("data-tab");

  $("ul.tab-large li").removeClass("current");
  $(".paragraph").removeClass("current");

  $(this).addClass("current");
  $("#" + tabcontent).addClass("current");
});

$("ul.tab-small li").click(function() {
  let smallTabContent = $(this).attr("data-tab");

  $("ul.tab-small li").removeClass("current");
  $(".paragraph").removeClass("current-small");

  $(this).addClass("current");
  $("#" + smallTabContent).addClass("current-small");
});

function slideImages() {
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("image");
    var dots = document.getElementsByClassName("selector");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n, image, imageSelector) {
  showSlides((slideIndex += n), image, imageSelector);
}

function currentSlide(n, image, imageBox) {
  showSlides(n, image, imageBox);
}

function showSlides(
  n,
  imageCont = "large-image",
  imageSelector = "large-selector"
) {
  var i;
  var slides = document.getElementsByClassName(imageCont);
  var dots = document.getElementsByClassName(imageSelector);

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  if (typeof slides[slideIndex - 1] !== "undefined") {
    slides[slideIndex - 1].style.display = "block";
  }
  if (typeof dots[slideIndex - 1] !== "undefined") {
    dots[slideIndex - 1].className += " active";
  }
}

$(".fa-search").click(function() {
  $(".search-box").toggle();
  $("input[type='text']").focus();
});

$(".display").hover(function() {
  let linkBox = $(this).find(".link-box");
  if (linkBox.is(":visible")) {
    linkBox.fadeToggle("fast");
  } else {
    linkBox.fadeToggle("slow");
  }
});
