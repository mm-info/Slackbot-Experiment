'use strict'

// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

// module.exports = function(robot) {
  //  // Create a user array
  //   const users = [];
  //
  // // Feature 1:
  //  robot.hear(/123/, function(res) {
  //    // Create random content to add to the array
  //    let randomNumberToAddToArray = Math.floor(Math.random() * 100);
  //
  //    // Push the random number to the array
  //    users.push(randomNumberToAddToArray);
  //
  //    // Create random number to help pick random array item
  //    let randomUser = users[Math.floor(Math.random() * users.length)];
  //
  //    // Output the random array item
  //    return res.send('array size is  ' + users.length + ' not bad!');
  //    return res.send('random number is ' + randomUser);
  //  });
// }



module.exports = function(robot) {


  // Getting variables and arrays setup
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



    // 1. Show user count
    if (attendeeCount > 0) {
      res.send("The following " + attendeeCount + " student(s) have checked in today.");

      // 2. Loop through, and output each registered username
      for (var i = 0; i < attendeeArray.length; i++) {
        res.send(" + " + (`${attendeeArray[i]}`));
      }
    } else {
      res.send("Nobody registered yet...");
    }
  });
}


































// testing
// module.exports = (robot) ->
//   robot.hear /yyy/i, (res) ->
//     room = "mytestroom"
//     robot.messageRoom room, "I do not like green eggs and ham.  I do not like them sam-I-am."

// module.exports = robot => robot.hear(/yyy/i, function(res) {
//   const room = "general";
//   return robot.messageRoom(room, "I do not like green eggs and ham.  I do not like them sam-I-am.");
// });

// module.exports = robot => robot.hear(/zzz/i, function(res) {
//   const room =  res.envelope.user.name;
//   return robot.messageRoom(room, "That Sam-I-am\nThat Sam-I-am\nI do not like\nthat Sam-I-am");
// });


  //
  // const attendenceCount = [];
  // // attendenceCount.push('start it up');
  //
  // console.log(attendenceCount.length);
  //
  // if (attendenceCount.length === 1) {
  //   attendenceCount.push('');
  //   console.log('yes');
  // } else {
  //   console.log('no');
  // }
  //




// Pushing to user array each time



  //
  //   const users = [
  //
  //   ];
  //
  //   let sum = 0;
  //
  // // Feature 1:
  //  // robot.hear(/123/, function(res) {
  //    // Create random content to add to the array
  //    let randomNumberToAddToArray = Math.floor(Math.random() * 100);
  //
  //    // Push the random number to the array
  //    users.push(randomNumberToAddToArray);
  //    users.push(randomNumberToAddToArray);
  //
  //    // Create random number to help pick random array item
  //    let randomUser = users[Math.floor(Math.random() * users.length)];
  //
  //
  //     for (var i = 0; i < users.length; i++) {
  //       sum += users[i]
  //     }
  //
  //     console.log(users.length);
  //    users.push(randomNumberToAddToArray);
  //     console.log(users.length);
  //
  //    // Output the random array item
  //    console('random number is ' + randomUser);
  //    console('array size is  ' + users.length + ' not bad!');
  //
  //








// // Testing capturing wildcard
//   robot.respond(/open the (.*) doors/i, (res) => {
//     const doorType = res.match[1]
//
//     if (doorType === 'pod bay') {
//       res.reply('I’m afraid I can’t let you do that.')
//       return
//     }
//
//     res.reply('Opening #{doorType} doors')
//   })





  //
  // robot.hear(/a/i, res => res.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS"));
  //
  // robot.respond(/b/i, res => res.reply("I'm afraid I can't let you do that."));
  //
  // robot.hear(/c/i, res => res.emote("makes a freshly baked pie"));
  //



// robot.respond(/hi|hello/i, msg( () => msg.send("Howdy!")));

  // Feature 2: Responding to a user...
  // robot.hear(/345/, function(response) {
  //   return response.send('start');
  //   room = "hubspot-homework-assignment";
  //   robot.messageRoom room, "I do not like green eggs and ham.  I do not like them sam-I-am."
  //   return response.send('end');
  // });


  // robot.respond(/thank(s| you)/i, msg => msg.send(msg.random(response)));
  // const thanks = new RegExp(`thank(s| you) ${robot.name}`, "i");
  // return robot.hear(thanks, msg => msg.send(msg.random(response)));


  //
  // // A map of user IDs to scores
  // const thank_scores = {};
  //
  // robot.hear(/thanks/i, function(res) {
  //   // filter mentions to just user mentions
  //   const user_mentions = ( Array.from(res.message.mentions).filter((mention) => mention.type === "user"));
  //
  //   // when there are user mentions...
  //   if (user_mentions.length > 0) {
  //     let response_text = "";
  //
  //     // process each mention
  //     for (let { id } of Array.from(user_mentions)) {
  //       // increment the thank score
  //       thank_scores[id] = (thank_scores[id] != null) ? (thank_scores[id] + 1) : 1;
  //       // show the total score in the message with a properly formatted mention (uses display name)
  //       response_text += `<@${id}> has been thanked ${thank_scores[id]} times!\n`;
  //     }
  //
  //     // send the response
  //     return res.send(response_text);
  //   }
  // });





// };



  //
  // robot.hear(/yyy/i, function(res) {
  //   const room = "hubot-homework-assignment";
  //   return robot.messageRoom(room, "Heard yyy");
  // });
  //
  //
  // robot.respond(/xxx/i, function(res) {
  //   const room =  'hubot-homework-assignment';
  //   robot.messageRoom(room, "Heard xxx");
  //   return res.reply("Yeah, i heard xxx");
  // });
  // //
  // return robot.hear(/zzz/i, function(res) {
  //   const room =  res.envelope.user.name;
  //   return robot.messageRoom(room, "Heard zzz");
  // });


















  //
  //
  // robot.respond(/open the (.*) doors/i, (res) => {
  //   const doorType = res.match[1]
  //
  //   if (doorType === 'pod bay') {
  //     res.reply('I’m afraid I can’t let you do that.')
  //     return
  //   }
  //
  //   res.reply('Opening #{doorType} doors')
  // })
  //


  // robot.hear(/badger/i, (res) => {
  //   res.send('Badgers? BADGERS? WE DON’T NEED NO STINKIN BADGERS')
  // })
  //
  // robot.respond(/open the (.*) doors/i, (res) => {
  //   const doorType = res.match[1]
  //
  //   if (doorType === 'pod bay') {
  //     res.reply('I’m afraid I can’t let you do that.')
  //     return
  //   }
  //
  //   res.reply('Opening #{doorType} doors')
  // })
  //
  // robot.hear(/I like pie/i, (res) => {
  //   res.emote('makes a freshly baked pie')
  // })
  //
  // const lulz = ['lol', 'rofl', 'lmao']
  //
  // robot.respond(`/${lulz.join('|')}/i`, (res) => {
  //   res.send(res.random(lulz))
  // })
  //
  // robot.topic((res) => {
  //   res.send(`${res.message.text}? That’s a Paddlin`)
  // })
  //
  // const enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
  // const leaveReplies = ['Are you still there?', 'Target lost', 'Searching']
  //
  // robot.enter((res) => {
  //   res.send(res.random(enterReplies))
  // })
  // robot.leave((res) => {
  //   res.send(res.random(leaveReplies))
  // })
  //
  // const answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING
  //
  // robot.respond(/what is the answer to the ultimate question of life/, (res) => {
  //   if (answer) {
  //     res.send(`${answer}, but what is the question?`)
  //     return
  //   }
  //
  //   res.send('Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again')
  // })
  //
  // robot.respond(/you are a little slow/, (res) => {
  //   setTimeout(() => res.send('Who you calling "slow"?'), 60 * 1000)
  // })
  //
  // let annoyIntervalId = null
  //
  // robot.respond(/annoy me/, (res) => {
  //   if (annoyIntervalId) {
  //     res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH')
  //     return
  //   }
  //
  //   res.send('Hey, want to hear the most annoying sound in the world?')
  //   annoyIntervalId = setInterval(() => res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH'), 1000)
  // })
  //
  // robot.respond(/unannoy me/, (res) => {
  //   if (!annoyIntervalId) {
  //     res.send('Not annoying you right now, am I?')
  //     return
  //   }
  //
  //   res.send('OKAY, OKAY, OKAY!')
  //   clearInterval(annoyIntervalId)
  //   annoyIntervalId = null
  // })
  //
  //
  // robot.router.post('/hubot/chatsecrets/:room', (req, res) => {
  //   const room = req.params.room
  //   const data = JSON.parse(req.body.payload)
  //   const secret = data.secret
  //
  //   robot.messageRoom(room, `I have a secret: ${secret}`)
  //
  //   res.send('OK')
  // })
  //
  // robot.error((error, response) => {
  //   const message = `DOES NOT COMPUTE: ${error.toString()}`
  //   robot.logger.error(message)
  //
  //   if (response) {
  //     response.reply(message)
  //   }
  // })
  //
  // robot.respond(/have a soda/i, (response) => {
  //   // Get number of sodas had (coerced to a number).
  //   const sodasHad = +robot.brain.get('totalSodas') || 0
  //
  //   if (sodasHad > 4) {
  //     response.reply('I’m too fizzy…')
  //     return
  //   }
  //
  //   response.reply('Sure!')
  //   robot.brain.set('totalSodas', sodasHad + 1)
  // })
  //
  // robot.respond(/sleep it off/i, (res) => {
  //   robot.brain.set('totalSodas', 0)
  //   res.reply('zzzzz')
  // })
