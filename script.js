$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#create-error").click(function () {
   $("#overlay-danger").toggleClass("d-flex d-none");
});

$("#delete").hide(),
   $("#check-box").click(function () {
      $("#delete").toggle("#delete");
   });
