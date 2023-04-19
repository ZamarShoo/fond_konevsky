$("#burger").click(function () {
  $(".modal-wrapper").addClass("active");
});

$(".modal-close").click(function () {
  $(".modal-wrapper").removeClass("active");
});

let modal = document.querySelector(".modal-wrapper");
document.addEventListener("click", function (e) {
  if (e.target === modal) {
    $(".modal-wrapper").removeClass("active");
  }
});
$("label ul li").click(function (e) {
  let sum = $(this).attr("data-sum");
  let input = $(this).parents("label").children("input");
  let val = input.val();
  input.val(Number(val) + Number(sum));
});
$("input").bind("change keyup input click", function () {
  let sum = this.getAttribute("data-type");
  if (sum === "number") {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, "");
    }
  }
  if (sum === "text") {
    if (this.value.match(/[^а-яА-Я]/g)) {
      this.value = this.value.replace(/[^а-яА-Я]/g, "");
    }
  }
});

$(document).ready(function () {
  $(".about_column-left p").hide();
  $(".about_column-left :nth-child(3)").show();
  $(".about_column-left :nth-child(4)").show();
});
function diplay_hide(blockId) {
  $(blockId).animate({ height: "show" }, 300);
  $(".about_open").hide();
}
