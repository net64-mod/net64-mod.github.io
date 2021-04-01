---
author: 'Tarnadas, Henrik'
title: 'Goodbye Net64'
date: '2021-04-01'
---

Hey everyone, we have an important update about Net64 for you. And no, this is not a late april fools joke ;)

We would like to announce that Net64+ will from now on be in a passive maintenance mode, meaning Tarnadas will no longer develop new features. That does not mean the project will be abandoned. The server list will stay online and everyone can host their own server by following our [wiki](https://net64-mod.github.io/wiki/hosting/public/). The [client](https://github.com/Tarnadas/net64plus) and [server](https://github.com/Tarnadas/net64plus-server) are also open source and Tarnadas will accept new Pull Requests as always.

The development of version 3.0 will also be halted. Not only is progress slow because only Henrik is working on it but with the release of the SM64 decompilation many other multiplayer projects have emerged. These projects ported SM64 to various platforms like Windows or the web and are far easier to set up, easier to develop and therefore far better supported. Even if Net64 3.0 would release today these other projects would be superior in every way. We don't feel like working on something that will be obsolete before it's released.

Net64 was the first SM64 online mod. It was groundbreaking at the time but nowadays the SM64 decompilation has allowed much more complex mods to be developed by a much wider group of developers. Don't be sad that Net64 has reached its end of life, these projects are the logical and spiritual successors of Net64. Net64 will remain an option for ROM-Hacks and speedrunning but everyone looking for more characters, maps, gamemodes or better synchonization will hopefully appreciate these new projects.

### SM64ex-Coop

SM64ex-Coop is one of these new ports. It's an online mod that is based on the popular PC version. That means all features of the PC port come with it: Infinite drawing distance, 60FPS, custom textures, you name it! The mod currently supports two players and doesn't require a server. Almost all objects are synced and the team is constantly working on improving it. If you want to play Kaze's splitscreen mod but can't get your friend over because of some virus thing, this is the perfect mod for you! Check out their Discord for instructions, development updates and custom content.

<button to="https://discord.gg/TJVKHS4" img="discord.svg" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">SM64ex-Coop</button>

### SM64DS Online

The name says it all. It's still in development so don't expect to play it *today* but it's looking very promising. Check them out:

<button to="https://discord.gg/PhpA9Wt" img="discord.svg" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">SM64DS Online</button>

### sm64js

sm64js has a very simple premise: How cool would it be if you'd rewrite SM64 to run in the browser? Well, turns out **very cool**! Not only can you play SM64 on virtually any device now, but because the game is no longer restricted to technology from the previous millennium you can basically add anything you like. Are you tired of setting up laggy emulators and configuring controllers? Did you ever want to make a custom boss, course or gamemode in SM64 but you gave up because it was too difficult? sm64js is going to change that. As the name suggests it's based on JavaScript so modding is a piece of cake. And it gets even better: Since it's already running in the browser, wouldn't it be cool to have an MMO mode? Yes, it's basically Club Penguin in SM64!

It's not finished but you can already try it on their website. Almost everything you've been asking for in Net64 3.0 is already working in sm64js: More players (hundreds?), custom models, different mario colours, custom gamemodes and object syncing.

Just recently, their MMO server has been switched out with a faster one written in a new programming language called Rust. After ironing out the last few bugs the team thinks it's ready to be battle tested. They expect it to support hundreds of players at the same time, but there is only one way to find out for sure: A stress test is scheduled to start at **2021-04-17 17:30 UTC** and everyone is invited to try it out. Check out their website and join the Discord to learn more:

<button to="https://sm64js.com" img="sm64js.png" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">Website</button>
<button to="https://discord.gg/7UaDnJt" img="discord.svg" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">Discord</button>

#### How does it work?

sm64js is a rewrite of SM64 in JavaScript to allow playing Super Mario 64 in the browser. The regular SM64 decompilation has also been modified to be compiled to WebAssembly via Emscripten. WebAssembly is a relatively new programming language, that also runs natively in your browser, just like JavaScript.

So you might ask yourself, why you'd want to rewrite the whole game in another language like JavaScript?

There are several benefits:

- **Extensibility**: JS is a more widespread language, more people can develop custom content
  - Rapid Prototyping
  - Compatible with modern software packages
  - Better modularity. Easier to add custom gamemodes and content
- **Portability**: Runs on any device with a web browser; no need to download or install anything
- Opportunity to refactor / rewrite with **modern coding style** and cleanup

SM64JS also includes online mass multiplayer versions and other custom multiplayer game modes. This is also why Tarnadas got interested in joining the team. Due to the experiences gathered while developing Net64, it looked like the perfect fit. At first, the backend of the MMO version was developed with Node.js, which was also used to develop the Net64+ server with up to 24 players. It has a decent performance, but for an MMO with hundreds of players, CPU performance can become a bottleneck. Several performance improvements were made to the Node.js server in the beginning, especially by switching the WebSocket libary with a native Node.js module written in C, but Node.js struggles to easily achieve a multithreaded and scalable architecture.

This is where [Rust](https://www.rust-lang.org/) comes into play. Rust is a system programming language developed by Mozilla since 2013 that runs lightning fast, avoids memory errors and guarantees thread safety. Rust has also seen great adoption by big tech giants like [Google](https://security.googleblog.com/2021/02/mitigating-memory-safety-issues-in-open.html), [Microsoft](https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/) and many others. Rust became Tarnadas' favorite programming language, because once you have learned the core principles and gotten used to the compiler, you can easily write software that "just works".
People often first think that having such a strict compiler might slow down development, but in fact you don't want to struggle finding out about bugs during runtime.
Every error that gets found during compile time is an error that you don't have to fix during runtime and fixing compiler errors is much easier and more straightforward.

### The End?

So here we are. It's been three and a half years since Net64, back then called Super Mario 64 Online, was released. Lots of stuff happened. Back then everyone and their mother played Net64. It was simple and addictive. Over time the project matured and more features were added. With time popularity decreased and so did development activity. For Net64 this is the end of the line. Of course it would have been nice to revive Net64 with new features, but at the end of the day Net64 is just a name. Other projects will continue what Net64 started.

Lastly we want to thank everyone who made Net64 to what it became:

- [MelonSpeedruns](https://twitter.com/MelonSpeedruns), for turning a childhood dream into a real thing.
- [Kaze](https://twitter.com/KazeEmanuar) for developing the assembly and making the mod go viral.
- [Guad](https://github.com/Guad) for developing the first client.
- [Marshivolt](https://twitter.com/Marshivolt), Cjes and TheAnkleDestroyer for creating the character models.
- Our ex-Discord staff: [Marionova](https://twitter.com/Marionova64) and Jim-panse for building the community from the ground up 61 6e 64 20 44 61 6e 67 65 72 6c 65 73 73 20 66 6f 72 20 62 65 69 6e 67 20 61 20 67 69 61 6e 74 20 70 72 69 63 6b.
- Our current Discord staff: [Bill](https://twitter.com/MuscoviteMole) and [Jman](https://twitter.com/PailBot) for supporting us and keeping the server alive.
- All server hosters for providing the community with servers to play on without portforwarding.

And of course thank **you** for playing! It's been a pleasure to be part of project with such a passionate community.

Henrik, Tarnadas


