$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var number1 = $("#input1").val();
    var number2 = $("#input2").val();
    var number3 = $("#input3").val();
    var result;
    if (number1 === number2  && number1 === number3) {
        document.write('<h1>Equilateral</h1>');
    } else if (number1 === number2 && number2 != number3 || number1 === number3 && number2 != number3|| number2 === number3 && number1 != number2 ) {
      document.write('<h1>Isosceles</h1>');
    } else if (number1 != number2 || number2 != number3 || number1 != number3) {
      document.write('<h1>Scalene</h1>');
    } else if (number1 + number2 < number3 && number1 + number2 === number3) {
      alert('<h1>Not a triangle!</h1>');
    }
    $("#output").text(result);
});
});
