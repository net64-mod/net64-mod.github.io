---
author: 'Tarnadas, Henrik'
title: 'WIP-Title'
date: '2021-04-xx'
---

Hey, we have some interesting news for you today!

We would like to announce that Net64+ will from now on be in a passive maintenance mode, meaning Tarnadas will no longer develop new features.
That does not mean the project will be abandoned. The server list will stay online and everyone can host his own server by following [one](https://net64-mod.github.io/wiki/hosting/public/) of our [documentations](https://net64-mod.github.io/wiki/hosting/docker/).
The [client](https://github.com/Tarnadas/net64plus) and [server](https://github.com/Tarnadas/net64plus-server) are also Open Source and Tarnadas will accept new Pull Requests as always.

We'd also like to announce that development of version 3.0 will be halted.
Not only is progress slow because only Henrik is working on it but with the advent of SM64 ports many other projects have emerged implementing multiplayer.
These projects ported SM64 to various platforms like Windows or the web and are far easier to set up, easier to develop and therefore far better supported.
Even if Net64 3.0 would release today these other projects would be superior in every way.
We don't feel like working on something that will be obsolete before it's released.
At the end of this post we'll add some links so you can check these projects out.

Net64 was the first SM64 online mod.
It was groundbreaking at the time but nowadays the SM64 decompilation has allowed much more complex mods to be developed by a much wider group of developers.
Don't be sad that Net64 has reached its end of life, these projects are the logical and spiritual successors of Net64.
Net64 will remain an option for speedrunners and everyone preferring its "native feel" but anyone looking for more characters, maps, gamemodes or better synchonization will appreciate these new projects.

## SM64JS

One of these projects is called SM64JS and Tarnadas joined their developer team.
It is a rewrite of the decompilation of SM64 in JavaScript, which allows playing Super Mario 64 in your browser.
The regular SM64 decompilation has also been modified to be compiled to WebAssembly via Emscripten.
WebAssembly is a relatively new programming language, that also runs natively in your browser, just like JavaScript.
So you might think why you would want to rewrite the complete decompilation in another programming language like JavaScript.

The reasons for this are:

- **Extensibility**: More access to more developers to add custom content
  - Rapid Prototyping
  - More friendly to importing other software modules/packages
  - More friendly to prototyping multiplayer custom games/mods
- **Portablity**: Sm64 projects can run on any device with a web browser anywhere without needing to download or install anything
- Opportunity to refactor / rewrite with **modern coding style** and cleanup

SM64JS also includes the development of online mass multiplayer versions and other custom multiplayer game modes.
This is also why Tarnadas got interested in joining the team.
Due to the experiences gathered while developing Net64, it looked like the perfect fit.
At first, the backend of the MMO version was developed with Node.js,
which was also used to develop the Net64+ server with up to 24 players.
It has a decent performance, but for an MMO with hundreds of players, CPU performance can become a bottleneck.
Several performance improvements were made to the Node.js server in the beginning, especially by switching the WebSocket libary with a native Node.js module written in C, but Node.js struggles to easily achieve a multithreaded and scalable architecture.

This is where [Rust](https://www.rust-lang.org/) comes into place.
Rust is a systems programming language developed by Mozilla since 2013 that runs lightning fast, avoids memory errors and guarantees thread safety.
Rust also sees a great adoption of the industry.
The big tech giants like [Google](https://security.googleblog.com/2021/02/mitigating-memory-safety-issues-in-open.html) and [Microsoft](https://www.zdnet.com/article/microsoft-70-percent-of-all-security-bugs-are-memory-safety-issues/) and also many others have adopted Rust.
Rust became Tarnadas' favorite programming language, because once you have learned the core principles and got used to the compiler, you can easily write software that "just works".
People often first think that having such a strict compiler might slow down development, but in fact you don't want to struggle finding out about bugs during runtime.
Every error that gets found during compile time is an error that you don't have to fix during runtime and fixing compiler errors is much easier and more straight forward.

Just recently, the Node.js server of SM64JS has been switched out with the newly written Rust server.
After fixing a couple of bugs that this version still had, it now looks very promising, but we don't yet know much about the actual performance improvements.
For this we scheduled another **stress test at 20XX-XX-XX XX:XXpm UTC+0** and everyone is invited to join.
Please follow these links, if we got your attention:

<button to="https://sm64js.com" img="sm64js.png" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">Website</button>
<button to="https://discord.gg/7UaDnJt" img="discord.svg" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">Discord</button>

## Other stuff WIP

Lastly we want to thank everyone who made Net64 to what it is:

- [MelonSpeedruns](https://twitter.com/MelonSpeedruns), for turning a childhood dream into a real thing.
- [Kaze](https://twitter.com/KazeEmanuar) for developing the assembly and making the mod go viral.
- [Guad](https://github.com/Guad) for developing the first client.
- [Marshivolt](https://twitter.com/Marshivolt), Cjes and TheAnkleDestroyer for creating the character models.
- Our ex-Discord staff: [Marionova](https://twitter.com/Marionova64) and Jim-panse for building the community from the ground up.
- Our current Discord staff: Bill and [Jman](https://twitter.com/PailBot) for supporting us and keeping the server alive.
- All server hosters for providing the community with servers to play on without portforwarding.

Thanks everyone! Without you.

## Other Links WIP

<button to="https://discord.gg/ZezK78p" img="sm64pc.svg" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">SM64PC Discord</button>
<button to="https://discord.gg/TJVKHS4" img="discord.svg" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">SM64EX-Coop Discord</button>
<button to="https://discord.gg/PhpA9Wt" img="discord.svg" margin="0.4rem 0.6rem" padding="0 0.4rem" paddingtext="0 0.8rem">SM64DS-Online Discord</button>
