$("#burger").click(function () {
  $(".modal-wrapper").addClass("active");
});

$(".modal-close").click(function () {
  $(".modal-wrapper").removeClass("active");
  $(".popup-form_wrapper-thanks").removeClass("active");
});

let modal = document.querySelector(".modal-wrapper");
let modal_thanks = document.querySelector(".popup-form_wrapper-thanks");
document.addEventListener("click", function (e) {
  if (e.target === modal) {
    $(".modal-wrapper").removeClass("active");
  }
  if (e.target === modal_thanks) {
    $(".popup-form_wrapper-thanks").removeClass("active");
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

  $(".how-help-text p").hide();
  $(".how-help-text :nth-child(1)").show();
  $(".how-help-text :nth-child(2)").show();
});

function diplay_hide(blockId, clickClass) {
  $(blockId).animate({ height: "show" }, 300);
  $(clickClass).hide();
}

$(".faq-head").click(function () {
  let parent = $(this).parents(".faq-article");
  parent.toggleClass("open");
  if (parent.hasClass("open")) {
    parent.children(".faq-body").animate({ height: "show" }, 300);
  } else {
    parent.children(".faq-body").animate({ height: "hide" }, 300);
  }
});
$("#gallery").photobox("a", { time: 0 });
$(document).ready(function () {
  $("select").niceSelect();
  let selected = 0;
  $(`#select_${selected}`).show();
  $(".first-slide-short_wrapper1").on("change", "select", function () {
    $(`#select_${selected}`).hide();
    selected = $("select").val();
    $(`#select_${selected}`).show();
  });
});
if ($(".adress-help__line")) {
  $(".adress-help__line").each(function (i) {
    let sum_num = Number($(this).data("sum").toString().replace(/\s+/g, ""));
    let to_num = Number($(this).data("to").toString().replace(/\s+/g, ""));
    console.log(sum_num);
    let left = (sum_num * 100) / to_num;
    $(this)
      .children(".adress-help__line-bold")
      .css({ width: left.toString() + "%" });
    $(this)
      .children(".adress-help__line-rectangle")
      .css({
        left: left.toString() + "%",
        transform: "translateX(-" + left.toString() + "%)",
      });
  });
}
