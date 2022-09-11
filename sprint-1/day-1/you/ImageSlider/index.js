//
let slideNow = function () {
  let container = document.getElementById("container");
  let sliderwidth = container.offsetWidth;
  let listOfImages = document.getElementById("box");
  let count = 1;
  let items = listOfImages.querySelectorAll("div").length;
  console.log(items);
  var  prev = document.getElementById("prev");
  var next = document.getElementById("next");


  window.addEventListener("resize", () => {
    sliderwidth = container.offsetWidth;
  });

  let prevSlide = () => {
    if (count > 1) {
      count -= 2;
      listOfImages.style.left = "-" + count * sliderwidth + "px";
      count++;
    } else if ((count = 1)) {
      count = +items - 1;
      listOfImages.style.left = "-" + count * sliderwidth + "px";
      count++;
    }
  };

  let nextSlide = () => {
    if (count < +items) {
      listOfImages.style.left = "-" + count * sliderwidth + "px";
      count++;
    } else if (count == +items) {
      listOfImages.style.left = "0px";
      count = 1;
    }
  };

  next.addEventListener("click", () => {
    nextSlide();
  });

  prev.addEventListener("click", () => {
    prevSlide();
  });

  setInterval(function () {
    nextSlide();
  }, 8000);

//   setInterval(function () {
//     prevSlide();
//   }, 8000);
};
window.onload = function () {
  slideNow();
};
