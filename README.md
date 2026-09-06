Features

/slop-bot-ping: tells u how fast the bot is working in milliseconds so u know if its lagging or not

/slop-bot-help: gives u a list of all the commands so u actually know what to type

/slop-joke: sends a random brainrot joke to the chat so u can laugh or cringe

/slop-fact: tells u where words like skibidi, rizz, fanum tax, and mewing actually came from

Tech Stuff

Node.js: the coding stuff that makes the bot run

@slack/bolt: the package used to build the bot for slack

Socket Mode: connects the bot directly to slack so i didnt have to set up annoying webhooks

dotenv: holds the secret bot tokens so nobody steals them

systemd: keeps the bot running in the background on a linux server

How It Stays Online

I put it on a linux server using systemd so it stays online 24/7 and automatically turns back on if it ever crashes or the server restarts.
