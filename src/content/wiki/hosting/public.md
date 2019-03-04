---
layout: page
title: "Dedicated Server Hosting"
---

This guide shows how to install a dedicated server. If you just want to play with your friends you might be better of creating a [private server](/hosting/private) since it's a lot easier.

## Installation

- download and install [Node 8](https://nodejs.org/en/download/)
  - you can try using a later version of Node, but you will need to install C++ compilers
- `git clone` this repository or [download as zip](https://github.com/Tarnadas/net64plus-server/archive/master.zip)
- modify `settings.json`

```js
{
  "port": "3678", // make sure your port is forwarded
  "enableWebHook": false, // set this to true, if you want your server to be listed
  "gamemode": 1, // the initial gamemode
  "enableGamemodeVote": true, // whether gamemode voting should be enabled
  "passwordRequired": false, // whether password is required to join this server
  "name": "A Net64+ Server", // display name for public server list
  "domain": "", // domain of your server for public server list. keep it empty, if you don't have a domain
  "description": "The **best** Net64+ server ever\n\n:unicorn_face:", // description for public server list
  "apiKey": "" // this is required, if you want your server to be listed
}
```

- (OPTIONAL) if you want your server to be listed, go to [SMMDB](https://smmdb.ddns.net), login with Google, go to profile and get your API key
  - *Do not share your API key, because it gives full access to your account*
  - You can only list one server per API key
  - `name` will be shortened to 40 characters at most
  - `description` will be shortened to 200 characters at most
  - `description` supports [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) and [emojis](https://raw.githubusercontent.com/omnidan/node-emoji/master/lib/emoji.json)
- open a terminal in the folder of your server and execute the following commands

```
$ npm install
$ npm start
```

- (OPTIONAL) if you want to run your server indefinitely with auto restarts, I suggest to use pm2

```
$ npm i -g pm2
$ npm run build
$ pm2 start ./dist --name="net64 server"
```
