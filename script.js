window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = function () {
  if (
    (document.body.scrollTop > 300 && window.innerWidth > 600) ||
    (document.documentElement.scrollTop > 300 && window.innerWidth > 600)
  ) {
    document.querySelector(".nav").style.transform = "translateY(-93vh)";
  } else {
    document.querySelector(".nav").style.transform = "translateY(0vh)";
  }
};
