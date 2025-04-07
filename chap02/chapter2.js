$(function () {
  $(".clear-after>li").addClass("horizontal");
  //   $("#selected-plays ul>li").addClass("sub-level");
  $("li:not(.horizontal").addClass("sub-level");
  $("a[href $=pdf]").addClass("pdflink");
  $("a[href ^=mailto]").addClass("mailto");
  //   $("a[href *=henry]:not(:first)").addClass("henrylink");
  $("a[href *=henry]").not(".mailto").addClass("henrylink");
  //   $("tr:odd").addClass("alt"); //짝수
  //   $("tr:nth-child(odd)").addClass("alt");
  //   $("tr").filter(":odd").addClass("alt"); //
  //   $("td:contains(Henry)").addClass("highlight");
  //   $("td:contains(Henry)").nextAll().andSelf().addClass("highlight");
  //   $("div")
  //     .addClass("a")
  //     .find("img")
  //     .addClass("b")
  //     .andSelf()
  //     .addClass("highlight");
  //   $("td:contains(Henry)").parent().find("td").addClass("highlight");
  $("td:contains(Henry)")
    .parent()
    .find("td:first")
    .addClass("highlight")
    .end()
    .find("td:eq(1)")
    .addClass("highlight");
});
