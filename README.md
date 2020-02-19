

# Classroom Attendance Tracking Bot
A Slack application built with Hubot.

The bot was built to help instructors track classroom attendance in a Slack classroom.

## Features
The early version of this bot has 3 capabilities.
1. Start up the Role Call feature
	`$ @<hubot-name> Start role call`

2. Students can check in once the Role Call has started
	 `$ @<hubot-name> Here`

3. Verify who has checked in:
	 `$ @<hubot-name> Status`


## Installation instructions
The setup for this application will require you to have some familiarity, and administration privileges, with your Slack account.

 1. Clone this repo locally
 2. Run `npm i`
 3. Assign the following Slack Token for **@hubot-2** by using the following:
	 `heroku config:add HUBOT_SLACK_TOKEN=xoxb-948018646277-935211915922-yrUcNZP5RjjqY8dEsdlYV6hi`
 4. Push to Heroku: `git push heroku master`
 5. Open the [https://jsr-127-hubot.slack.com/](https://jsr-127-hubot.slack.com/) Slack account
 6. Begin communication with **@hubot-2**
	 * You can do this via direct messaging the application, or by using `/invite @hubot-2` to any channel
 7. Test the connection with `@hubot-2 status?`

With the bot now active, you can refer to the Features above!

### Resetting the bot
I am unsure of the correct way of resetting the bot, however I found that the following will work:

 1. Make a minor change to any file in the repository (I recommend the README.md!)
 2. Save the file
 3. Commit your changes
 4. Run `git push heroku master`
 5. The bot should be restarted shortly!

### Issues with Bots and Multiple Users
There were issues during class with multiple users attempting to use the same bot, so a different bot may need to be used.  

If this is the case, you will need to retrieve the appropriate `HUBOT_SLACK_TOKEN` to setup in Step 3.

## Approach taken
I approached this project in 2 different phases, and ended up returning back to the initial phase with a different approach.

### Bot #1
My initial approach was to continue building off of the setup that was provided during the [In-class Lab](https://git.generalassemb.ly/CRHarding/JSD-course-materials/tree/master/curriculum/lesson-plans/05-in-class-lab), and was a good first step. Some key points during this phase of the project:

 - Created a personal Slack account to provide a clean sandbox
 - Re-created the application to hook up with this account
 - Read a ton of documentation
 - Learned to streamline the CoffeeScript translation using the [Decaffeinate Tool/](https://decaffeinate-project.org/)
 - Began to hit the wall working with manipulating arrays

### Bot #2
Through reading more documentation provided, the [In Depth Tutorial on Writing a Slackbot](https://github.com/github/hubot/blob/master/docs/scripting.md) led me to start a new bot.  A couple highlights with this phase:

 - Began to explore Redis databases, and how they can be used with Heroku apps
 - Learned more about using the `brain.set()` functionality to write to the database instead of arrays
 - Led me back to working with arrays.

### Back to Bot #1
At this point I returned to the previous bot with more thorough understanding of the framework, I was able to apply gained knowledge to build out the bot that I had initially planned!


## Unsolved problems
I ran into a couple of struggles that with more time I'm sure I could have solved.

 1. Students can check in more than once, resulting in an array with duplicate values.
 2. Logging the attendance sheet as a direct message to an instructor
 3. Allowing permissions for some actions versus others
 4. Unsure how to restart


## Helpful Links
* [Slack account setup guide](http://springest.io/hubot-part-1-get-it-running-locally-in-slack)
* [General Assembly setup guide](https://git.generalassemb.ly/CRHarding/JSD-course-materials/tree/master/curriculum/lesson-plans/05-in-class-lab)
* [Homework assignment](https://git.generalassemb.ly/CRHarding/JSD-course-materials/blob/master/curriculum/projects/unit1/project-01.md)
