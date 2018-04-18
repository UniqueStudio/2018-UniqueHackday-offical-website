import "./style/index.sass";
import "./style/whatup.css";
import "./style/time.sass";
import "./style/thanks.sass";
import "./style/problem.sass";
import "./style/map.sass";
import "./style/prize.sass";
import "./utils/jquery.fullpage.min.css";
import "./utils/jquery.fullpage.min.js";

const $ = require("jquery");

// $(document).ready(() => {

// });

window.addEventListener("load", () => {
  if (window.innerWidth < 480) {
    const day2 = document.querySelector(".section:nth-child(3)");
    day2.parentElement.removeChild(day2);
  }
  document.getElementById("fullpage").innerHTML += document.getElementById(
    "template"
  ).innerHTML;

  $("#fullpage").fullpage();

  $(".pro-title").on("click", function(e) {
    $(this.parentNode)
      .find(".pro-answer")
      .slideToggle(300);
    if ($(this).attr("data-attr") === "0") {
      $(this)
        .children("p")
        .addClass("close-tag");
      $(this).attr("data-attr", "1");
    } else {
      $(this)
        .children("p")
        .removeClass("close-tag");
      $(this).attr("data-attr", "0");
    }
  });
  $("#btn").on("click", function() {
    window.open("https://console.hack.hustunique.com/", "_self");
  });
});

// 彩蛋～
console.log(
  "%c联创团队欢迎你～",
  "background: rgba(231, 97, 107, 0.9); color: #ffffff;letter-spacing: 1px;" +
    " margin: 10px 0 10px 0; padding: 10px 15px 8px; " +
    "text-transform: uppercase;display: inline-block;" +
    " font-size: 10px; font-weight: bold; line-height: 10px;"
);
