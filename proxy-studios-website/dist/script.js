window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").classList.add("active");
  } else {
    document.getElementById("header").classList.remove("active");
  }
}