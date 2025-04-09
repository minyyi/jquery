$(function () {
  $(".quantity input").change(function () {
    let totalCost = 0;
    let totalQuantity = 0;
    $("table tbody tr").each(function (index) {
      let price = parseFloat(
        $(this)
          .find(".price")
          .text()
          .replace(/^[^\d.]/, "")
      );
      //console.log(price);
      price = isNaN(price) ? 0 : price; //숫자인지 아닌지 판별

      let quantity = parseInt($(this).find(".quantity input").val());
      quantity = isNaN(quantity) ? 0 : quantity;

      let cost = price * quantity;
      $(this)
        .find(".cost")
        .text("$" + cost.toFixed(2));

      totalCost += cost;
      totalQuantity += quantity;

      $(".shipping .quantity").text(totalQuantity);
      let subtotal = Math.round(parseFloat(totalCost), 2);
      $(".subtotal .cost").text("$" + totalCost);

      let tax = parseFloat(totalCost * 0.06);
      $(".tax .cost").text("$" + Math.round(totalCost * 0.06));

      let shippingFee = parseInt(totalQuantity * 2);
      $(".shipping .cost").text("$" + totalQuantity * 2);
      console.log("subtotal", subtotal);
      let total = subtotal + tax + shippingFee;
      $(".total .cost").text("$" + Math.round(total, 2));
    }); //end each
  }); //end change
}); //end main function
