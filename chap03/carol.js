//step1
// $(function () {
//   $("#switcher-large").on("click", function () {
//     $("body").removeClass("narrow").addClass("large");
//   });
// });

// // step2
// // Narrow Column click => narrow class
// // Default click => css 처음으로 removeClass('classname')

// $(function () {
//   $("#switcher-narrow").on("click", function () {
//     $("body").removeClass("large").addClass("narrow");
//   });
// });
// $(function () {
//   $("#switcher-default").on("click", function () {
//     $("body").removeClass("narrow large");
//     // $("body").removeClass("large");
//   });
// });

//step4 : 클릭한 버튼만 selected 적용

// $(function () {
//   $("#switcher-large").on("click", function () {
//     $("body").removeClass("narrow").addClass("large");
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//   });
//   $("#switcher-narrow").on("click", function () {
//     $("body").removeClass("large").addClass("narrow");
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//   });
//   $("#switcher-default").on("click", function () {
//     $("body").removeClass("narrow large");
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//     // $("body").removeClass("large");
//   });
// });

//step4 : selected관련 중복된 코드 최적화 하기

// $(function () {
//   $("#switcher-large").on("click", function () {
//     $("body").removeClass("narrow").addClass("large");
//   });
//   $("#switcher-narrow").on("click", function () {
//     $("body").removeClass("large").addClass("narrow");
//   });
//   $("#switcher-default").on("click", function () {
//     $("body").removeClass("narrow large");
//   });

//   $("#switcher .button").on("click", function () {
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//   });
// });

//spep5 : 전체적으로 보다 더 최적화
// $(function () {
//   $("#switcher .button").on("click", function () {
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//     $("body").removeClass();

//     if (this.id === "switcher-large") { //${this.id} 로 하면 안됨 이건 자바스크립트
//       $("body").addClass("large");
//     } else if (this.id === "switcher-narrow") {
//       $("body").addClass("narrow");
//     }
//   });
// });

// step6
// $(function () {
//   $("#switcher .button").click(function () {
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//     $("body").removeClass();

//     if (this.id === "switcher-large") {
//       //${this.id} 로 하면 안됨 이건 자바스크립트
//       $("body").addClass("large");
//     } else if (this.id === "switcher-narrow") {
//       $("body").addClass("narrow");
//     }
//   });
// });

//step7 : hover 이벤트
$(function () {
  $("#switcher .button").hover(
    function () {
      $(this).addClass("hover");
    },
    function () {
      $(this).removeClass("hover");
    }
  );
});

// step8
// $(function () {
//   $("#switcher h3").click(function () {
//     $("#switcher .button").toggleClass("hidden");
//   });
//   $("#switcher .button").click(function () {
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//     $("body").removeClass();

//     if (this.id === "switcher-large") {
//       //${this.id} 로 하면 안됨 이건 자바스크립트
//       $("body").addClass("large");
//     } else if (this.id === "switcher-narrow") {
//       $("body").addClass("narrow");
//     }
//   });
// });

// step9
// $(function () {
//   $("#switcher").click(function () {
//     $("#switcher .button").toggleClass("hidden");
//     // event.stopPropagation();
//   });
//   $("#switcher .button").click(function (e) {
//     $(".button").removeClass("selected");
//     $(this).addClass("selected");
//     $("body").removeClass();

//     if (this.id === "switcher-large") {
//       $("body").addClass("large");
//     } else if (this.id === "switcher-narrow") {
//       $("body").addClass("narrow");
//     }
//     // return false;
//     e.stopPropagation();
//   });
// });

// step10 : 이벤트 해제
$(function () {
  $("#switcher").on("click.kosa", function () {
    $("#switcher .button").toggleClass("hidden");
  });
  //   $("#switcher").on("click.kasa", function () {
  //     alert("다른이벤트 발생");
  //   });
  $("#switcher .button").click(function (e) {
    $(".button").removeClass("selected");
    $(this).addClass("selected");
    $("body").removeClass();

    if (this.id === "switcher-large") {
      $("body").addClass("large");
    } else if (this.id === "switcher-narrow") {
      $("body").addClass("narrow");
    }
    // return false;
    e.stopPropagation();
  });
  $("#switcher-large, #switcher-narrow").click(function () {
    $("#switcher").off("click.kosa");
  });
  $("#switcher").trigger("click.kosa");
});
