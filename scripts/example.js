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

module.exports = function(robot) {


  // Feature 1: Listen
   robot.hear(/123/, function(res) {
     return res.send("heard 123");
   });

   // Feature: Thanks
  const response = [
    "you're welcome",
    "no problem",
    "not a problem",
    "no problem at all",
    "don’t mention it",
    "it’s no bother",
    "it’s my pleasure",
    "my pleasure",
    "it’s nothing",
    "think nothing of it",
    "no, no. thank you!",
    "sure thing"
  ];

  robot.respond(/thank(s| you)/i, msg => msg.send(msg.random(response)));
  const thanks = new RegExp(`thank(s| you) ${robot.name}`, "i");
  return robot.hear(thanks, msg => msg.send(msg.random(response)));



  // A map of user IDs to scores
  const thank_scores = {};

  robot.hear(/thanks/i, function(res) {
    // filter mentions to just user mentions
    const user_mentions = (Array.from(res.message.mentions).filter((mention) => mention.type === "user"));

    // when there are user mentions...
    if (user_mentions.length > 0) {
      let response_text = "";

      // process each mention
      for (let { id } of Array.from(user_mentions)) {
        // increment the thank score
        thank_scores[id] = (thank_scores[id] != null) ? (thank_scores[id] + 1) : 1;
        // show the total score in the message with a properly formatted mention (uses display name)
        response_text += `<@${id}> has been thanked ${thank_scores[id]} times!\n`;
      }

      // send the response
      return res.send(response_text);
    }
  });





};



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
  //
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
