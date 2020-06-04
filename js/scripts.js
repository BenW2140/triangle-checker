const equilateral = function(side1, side2, side3) {
  if (side1 === side2 && side1 === side3 && side2 === side3) {
    return true;
  } else {
    return false;
  }
}

const isosceles = function(side1, side2, side3) {
  if (side1 === side2 || side1 === side3 || side2 === side3) {
    return true;
  } else {
    return false;
  }
}

const scalene = function(side1, side2, side3) {
  if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    if (equilateral(side1, side2, side3)) {
      $(".hidden#equilateral").show();
      $(".hidden#isosceles").hide();
      $(".hidden#scalene").hide();
      $(".hidden#notTriangle").hide();
    } else if (isosceles) {
      $(".hidden#equilateral").hide();
      $(".hidden#isosceles").show();
      $(".hidden#scalene").hide();
      $(".hidden#notTriangle").hide();
    } else if (scalene) {
      $(".hidden#equilateral").hide();
      $(".hidden#isosceles").hide();
      $(".hidden#scalene").show();
      $(".hidden#notTriangle").hide();
    } else {
      $(".hidden#equilateral").hide();
      $(".hidden#isosceles").hide();
      $(".hidden#scalene").hide();
      $(".hidden#notTriangle").show();
    }
  });
});