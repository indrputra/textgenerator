
  $('.font-slider input[type="range"]').on("input change", function() {
  var newSize = $(this).val(),
    defaultSize = $("input.form-control").css("font-size"),
    minSize = 13,
    maxSize = 50;

  if (newSize <= maxSize && newSize >= minSize) {
    $("input.form-control").css("font-size", newSize + "px");

    //localStorage.setItem("__ACCESSIBILITY__font_size", newSize);
  }
});
