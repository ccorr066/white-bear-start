// this for the review answer html page.

// //$("#save-imagery").click(function () {
//    $("#overlay-success").toggleClass("d-flex d-none");
// });

$("#create-error").click(function () {
   $("#overlay-danger").toggleClass("d-flex d-none");
});

$("#delete").hide();

$("#check-box").click(function () {
   $("#delete").toggle("#delete");
});

$("#drop-assign, #sign-up-text").hide();

// for the sign up button in the index page

$("#sign-up").click(function () {
   $("#drop-assign, #sign-up-text").slideDown("#drop-assign, #sign-up-text");
});

$("#sign-up").click(function () {
   $("#sign-up").hide();
});

function addPadding(num) {
   if (String(num).length < 2) {
      return "0" + String(num);
   } else {
      return num;
   }
}
let idNumber = "";
let allTodaysDate = "";
function getDate() {
   let todaysDate = new Date();
   //grabbing each part of the date from the date object using dot notation
   let todaysYear = todaysDate.getYear() - 100;
   let todaysMonth = todaysDate.getMonth() + 1; //needs to add one because it is zero indexed
   let todaysDay = todaysDate.getDate();
   let todaysHour = todaysDate.getHours();
   let todaysMin = todaysDate.getMinutes();
   let todaysSec = todaysDate.getSeconds();
   let todaysMilli = todaysDate.getMilliseconds();
   allTodaysDate =
      "" + //turns it into a readable string
      addPadding(todaysMonth) +
      addPadding(todaysDay) +
      addPadding(todaysYear) +
      addPadding(todaysHour) +
      addPadding(todaysMin) +
      addPadding(todaysSec);
   console.log(allTodaysDate);

   // _id should have millseconds concatenating with a rand num between 000 & 999
   var randomMilli = new Date().getMilliseconds().toString().padStart(3, "0"); //https://stackoverflow.com/a/50110996 will always produce 3 digits

   var randNumberG = Math.floor(Math.random() * 900) + 100; //https://stackoverflow.com/a/43914168 // should generate random number betweeen 000-999

   idNumber = randomMilli + randNumberG; /// log should show 6 digits (millis + randomnumber)
}
// this function work for the inside of the sign up card

$("#lets-go").click(function () {
   let emailInput = $("#email-identity").val(); // .val gets the value of the user entered
   console.log(emailInput);

   let emailLength = emailInput.length; // .length gets the length of a string
   // console.log(emailLength);

   let passwordInput = $("#password-required").val(); // . val gets the value from the user on the password box
   console.log(passwordInput);

   let passwordLength = passwordInput.length; // .length grabs the amount of characters  of string
   // console.log(passwordLength);

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

   if (passwordLength === 0) {
      // make sure if passwordInput equals 0 the if statement will run test under its condition
      $("#password-required").addClass("is-invalid"); // addClass will take is-valid and let the password box work properly
      $("#invalid-characters").html("Please enter password."); // error message will appear
   } else if (passwordInput.length < 9) {
      // make sure the password charcter has to be over 9. if not the else if will run test

      $("#password-required").addClass("is-invalid"); //addClass will take is-valid and let the password box work properly
      $("#invalid-characters").html(
         "Your password must be at least 9 characters."
      ); // error message will appear
   } else if (passwordInput === emailInput.split("@")[0]) {
      $("#password-required").addClass("is-invalid");
      $("#invalid-characters").html(
         "Your email address cannot be used in your password"
      );
   } else {
      // if the condition on the if are not met, then else will run test
      getDate();
      $("#password-required").removeClass("is-invalid"); // will remove the bootstrap error class
      $("#password-required").addClass("is-valid"); // will validate the password box to work
      $("#invalid-characters").html(""); // wont display any error message
   }

   console.log({
      _id: idNumber,
      email: emailInput,
      password: passwordInput,
      CreatedOn: allTodaysDate,
   });
});

// this for the create-answer html page. keeps count on how many characters are placed from the user.
$("#textBox").keyup(function () {
   let textAreaCount = $("#textBox").val().length;
   $("#count").html(`${textAreaCount}/240`);
   if (textAreaCount > 240) {
      $("#count").addClass("text-danger");
   } else {
      $("#count").removeClass("text-danger");
   }
});

// create-imagery html page
$("#textImagery").keyup(function () {
   let textAreaCount = $("#textImagery").val().length;
   $("#imageryCount").html(`${textAreaCount}/240`);
   if (textAreaCount > 240) {
      $("#imageryCount").addClass("text-danger");
   } else {
      $("#imageryCount").removeClass("text-danger");
   }
});

$("#save-imagery").click(function () {
   let textAreaCount = $("#textImagery").val().length;
   let textArea = $("#textImagery").val();
   if (textAreaCount !== 0 && textAreaCount <= 240) {
      getDate();

      console.log({
         _id: idNumber,
         imagery: `?x=${encodeURIComponent(textArea)}`,
         answer:
            "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
         levelNum: 1,
         successfulAttemptsNum: 0,
         createdOn: allTodaysDate,
         lastAttemptedOn: allTodaysDate, // same as createdOn
      });
   }
});
