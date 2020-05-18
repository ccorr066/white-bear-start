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
$("#drop-assign, #sign-up-text").hide(),
   $("#sign-up").click(function () {
      $("#drop-assign, #sign-up-text").slideDown("#drop-assign, #sign-up-text");
   });
$("#sign-up").click(function () {
   $("#sign-up").hide();
});
