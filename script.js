// Before and After Slider Animation
let slider = document.getElementById("sliderRange");
let afterImg = document.querySelector(".after-img");

// Update clip path as slider moves
slider.addEventListener("input", (e) => {
  let value = e.target.value;
  afterImg.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
});

// ------------------------------FAQ
let faqBox = document.getElementsByClassName("faq-box"),
  icons = document.getElementsByTagName("i");

function extend(data) {
  console.log(data);
  for (let k = 0; k < faqBox.length; k++) {
    if (data === faqBox[k].id) {
      console.log("if");
      faqBox[k].classList.add("active");
      icons[k].style = "transform: rotate(180deg)";
    } else {
      console.log("else");
      faqBox[k].classList.remove("active");
      icons[k].style = "transform: rotate(0deg)";
    }
  }
  console.log("----");
}
