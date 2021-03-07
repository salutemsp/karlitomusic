window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    document.querySelector(".nav").style.transform = "translateY(-90vh)";
  } else {
    document.querySelector(".nav").style.transform = "translateY(0vh)";
  }
};
