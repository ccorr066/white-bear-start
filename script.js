$("#save-imagery").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});

$("#create-error").click(function () {
   $("#overlay-danger").toggleClass("d-flex d-none");
});

$("#delete").hide();

$("#check-box").click(function () {
   $("#delete").toggle("#delete");
});

$("#drop-assign, #sign-up-text").hide();

$("#sign-up").click(function () {
   $("#drop-assign, #sign-up-text").slideDown("#drop-assign, #sign-up-text");
});

$("#sign-up").click(function () {
   $("#sign-up").hide();
});

$("#lets-go").click(function () {
   var emailInput = $("#email-identity").val(); // .val gets the value of the user entered
   console.log(emailInput);

   var emailLength = emailInput.length; // .length gets the length of a string
   console.log(emailLength);

   var passwordInput = $("#password-required").val(); // . val gets the value from the user on the password box
   console.log(passwordInput);

   var passwordLength = passwordInput.length; // .length grabs the amount of characters  of string
   console.log(passwordLength);

   if (emailLength === 0) {
      // make sure if emailLength equals 0, then the if statement will run test under its condition
      $("#email-identity").addClass("is-invalid"); //.addClass will pull up the id from the html. then the in-valid will trigger the empty field box
      $("#error-email").html("Please enter your email address."); // error message pop up in red if there is no characters
   } else {
      // if the conditon on the if are not met, then else will run test
      $("#email-identity").removeClass("is-invalid"); //. removeClass will take down whatever is inside of the parathesis
      $("#email-identity").addClass("is-valid"); // .addClass will take is-valid and let the email box work properly
      $("#error-email").html(""); // the error message will not appear.
   }
   if (passwordInput === 0) {
      // make sure if passwordInput equals 0 the if statement will run test under its condition
      $("#password-required").addClass("is-invalid"); // addClass will take is-valid and let the password box work properly
      $("#invalid-characters").html(
         "Your password must be at least 9 characters."
      ); // error message will appear
   } else if (passwordInput.length < 9) {
      // make sure the password charcter has to be over 9. if not the else if will run test

      $("#password-required").addClass("is-invalid"); //addClass will take is-valid and let the password box work properly
      $("#invalid-characters").html(
         "Your password must be at least 9 characters."
      ); // error message will appear
   } else {
      // if the condition on the if are not met, then else will run test
      $("#password-required").removeClass("is-invalid"); // will remove the bootstrap error class
      $("#password-required").addClass("is-valid"); // will validate the password box to work
      $("#invalid-characters").html(""); // wont display any error message
   }
});
$("#textBox").keyup(function () {
   var textAreaCount = $("#textBox").val().length;
   $("#count").html(`${textAreaCount}/240`);
   if (textAreaCount > 240) {
      $("#count").addClass("text-danger");
   } else {
      $("#count").removeClass("text-danger");
   }
});
