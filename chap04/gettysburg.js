$(function () {
  let type = false;
  $("div.label").click(function () {
    const pWidth = $("div.speech p").outerWidth();
    const divWidth = $("#switcher").outerWidth();
    console.log(pWidth + " : " + divWidth);
    const num = parseInt(pWidth) - parseInt(divWidth);
    if (type == false) {
      $("#switcher")
        .fadeTo("fast", 0.5)
        .animate({ marginLeft: num }, "slow")
        .fadeTo("fast", 1)
        .slideUp("slow", function () {
          $(this).css("background", "salmon").slideDown("slow");
        });
      type = !type;
    } else {
      $("#switcher")
        .animate({ marginLeft: 0 }, "slow")
        // .slideUp("slow", function () {
        //   $(this)
        .css("background", "#fff");
      //   .slideDown("slow");
      // });
      type = !type;
    }
  });
});
// .fadeTo("fast", 1)

$(function () {
  $("div.speech p").eq(1).hide();
  $("a.more").click(function () {
    $("div.speech p").eq(1).slideToggle("slow");
    const $link = $(this); //헷갈리니까 변수에 할당해서 사용하기 $변수명: jquery변수이구나 근데 a태그구나

    if ($link.text() == "read more") {
      $link.text("read less");
    } else {
      $link.text("read more");
    }
  });
});

//1.2배 커지고/ 작아지고/ 처음글자크기
//css('fontSize'), css('fontSize', 12px) //12px
// $(function () {
//   const size = $("div p").css("fontSize");
//   $("#switcher button").click(function () {
//     // let sizeNum = size.substring(-2, -1);
//     // let $clickBtn = $(this);
//     if (this.id == "switcher-large") {
//       $(".speech").css("fontSize", parseFloat(size) * 1.2);
//     } else if (this.id == "switcher-small") {
//       $(".speech").css("fontSize", parseFloat(size) / 1.2);
//     } else {
//       $(".speech").css("fontSize", size);
//     }
//     console.log(parseInt(size) / 1.2);
//   });
// });

$(function () {
  const $speech = $("div.speech");
  const defaultSize = parseInt($speech.css("fontSize"));
  $("#switcher button").click(function () {
    let num = parseInt($speech.css("fontSize"));
    switch ($speech) {
      case "switcher-large":
        num *= 1.2;
        break;
      case "switcher-small":
        num /= 1.2;
        break;

      default:
        num = defaultSize;
        break;
    }
    $speech.animate({ fontSize: num + "px" }, "slow");
  });
});
