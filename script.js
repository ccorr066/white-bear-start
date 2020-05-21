$(document).ready(function () {
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
         $("#drop-assign, #sign-up-text").slideDown(
            "#drop-assign, #sign-up-text"
         );
      });
   $("#sign-up").click(function () {
      $("#sign-up").hide();
   });
   $("#lets-go").click(function () {
      let emailLength = $("#email-identity").val().length;
      let passwordLength = $("#password-required").val().length;

      if (emailLength === 0) {
         $("#email-identity").addClass("is-invalid");
         $("#error-email").html("Please enter your email address.");
      } else {
         $("#email-identity").removeClass("is-invalid");
         $("#email-identity").addClass("is-valid");
         $("#error-email").html("");
      }
      if (passwordLength === 0) {
         $("#password-required").addClass("is-invalid");
         $("#invalid-characters").html(
            "Your password must be at least 9 characters."
         );
      } else {
         $("#password-required").removeClass("is-invalid");
         $("#password-required").addClass("is-valid");
         $("#invalid-characters").html("");
      }
   });

   $("#textBox").keyup(function () {
      let textAreaCount = $("#textBox").val().length;
      $("#count").html(`${textAreaCount}/240`);
      if (textAreaCount > 240) {
         $("#count").addClass("text-danger");
      } else {
         $("#count").removeClass("text-danger");
      }
   });
});
