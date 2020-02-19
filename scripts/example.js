'use strict'

// Hubot : Attendance logger ///////////////////////////////////////////
// This feature can perform 3 different actions...
//  + Start up the Role Call feature:   @<hubot-name> Start role call
//  + Students can check in:            @<hubot-name> Here
//  + Verify who has checked in:        @<hubot-name> Status
///////////////////////////////////////////////////////////////////////////////

module.exports = function(robot) {


  // Getting variables and arrays setup.
  const attendeeArray = [];   // Empty array
  let roleCallStarted;        // Falsy value
  let attendeeCount = 0;      // Variable to add user count to

  // Helper: Get the sender's username.
  const get_username = response => `@${response.message.user.name}`;


  // Feature 1.1: Start role call
  //
  // Wait for `@matts-hubot Start role call`
  robot.respond(/Start role call/i, function(res) {

    // If the roleCallStarted is false...
    if (roleCallStarted !== true) {

      // 1. Set it to true
      roleCallStarted = true;

      // 2. Let the class know it has begun
      res.send("@here Class is starting, time to mark your attendance! \nAttendence can be submitted by sending: `@matts-hubot here`");
    } else {

      // If the role call already started, let the users know
      res.send("Attendence is already being taken!");
    }
  });


  // Feature 1.2: Counting and logging user replies
  //
  // Listening for `@matts-hubot here`
  robot.respond(/here/i, function(res) {

    // If the role call has started...
    if (roleCallStarted) {

      // 1. Add to user count
      attendeeCount++

      // 2. Push username to array
      attendeeArray.push(get_username(res));

      // 3. Send personal message
      res.send("Thanks for coming to class today " + get_username(res));

    } else {
      // If role call hasn't started yet, fill them in.
      res.reply("Sorry, role call is not being counted currently.");
    }
  });

  // Feature 1.3: Checking user list
  //
  // Listening for `@matts-hubot status?`
  robot.respond(/Status?/i, function(res) {

    // If anyone has checked in...
    if (attendeeCount > 0) {
      // 1. Show user count
      res.send("The following " + attendeeCount + " student(s) have checked in today.");

      // 2. Loop through, and output each registered username
      for (var i = 0; i < attendeeArray.length; i++) {
        res.send(" + " + (`${attendeeArray[i]}`));
      }
    } else {

      // If nobody checked in yet
      res.send("Nobody registered yet...");
    }
  });
}
