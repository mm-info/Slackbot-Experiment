
# `matts-hubot` Readme
A collection of steps that were involved with initial setup and development process for this homework project.

## Helpful Links
* [Slack account setup guide](http://springest.io/hubot-part-1-get-it-running-locally-in-slack)
* [General Assembly setup guide](https://git.generalassemb.ly/CRHarding/JSD-course-materials/tree/master/curriculum/lesson-plans/05-in-class-lab)
* [Homework assignment](https://git.generalassemb.ly/CRHarding/JSD-course-materials/blob/master/curriculum/projects/unit1/project-01.md)

## Sandbox Slack account
Setup a basic Slack account to make for a clean development environment.
* [matts-hubot.slack.com](matts-hubot.slack.com)
* **Admin user:**   matt+ga@mattmichaels.info
* **Other user:**   fungkmonk@gmail.com

## Hubot info
* **Hubot name:**   `matts-hubot`
* **API Token:**    `HUBOT_SLACK_TOKEN=xoxb-957759226535-957768678455-xOY0gugEhl081Bvyj5JrhNzz`


## Quick version of Hubot setup
1. **Install required packages:**
	*  `npm install -g hubot coffeescript yo generator-hubot@next`
2. **Create bot, give name:** 
	* `yo hubot --adapter="slack`
3. **Install hubot-slack:** 
	* `npm install hubot-slack`
4. **Initial git step:** 
	* `git add . && git commit -m 'initial commit' && git push`
5. **Heroku setup**
	* `heroku create myhubot-matts-hubot` . 
	* `heroku config:add HEROKU_URL=https://myhubot-matts-hubot.herokuapp.com` . 
	* `heroku config:add HUBOT_SLACK_TOKEN=xoxb-957759226535-957768678455-xOY0gugEhl081Bvyj5JrhNzz`  

6. **First push to heroku:** 
	* `git push heroku master`
7. **Turn bot on:** 
	* `heroku ps:scale web:1`
8. **Run locally to test before pushing:** 
	* `HUBOT_SLACK_TOKEN=xoxb-957759226535-957768678455-xOY0gugEhl081Bvyj5JrhNzz ./bin/hubot --adapter slack`
9. **Get started!**
	* 
* ***Note: Shorthand for quick updates:***
		* `git add . && git commit -m 'quick commit' && git push heroku master && heroku ps:scale web:1`

