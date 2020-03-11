---
layout: page
title: "Troubleshooting"
---

### I want to play a different gamemode, how do I change it?

First check to make sure Gameplay voting is enabled for that server, or else then you can’t change it.  Type `/gamemode` followed by a number (1-8) in the the chat.
Here’s a list of all gamemodes:

- `/gamemode 1`: Regular, with interaction/punching
- `/gamemode 2`: Regular, features the fireflower (press the L-Button)
- `/gamemode 3`: Regular, no interaction/punching
- `/gamemode 4`: Prophunt
- `/gamemode 5`: Boss Rush
- `/gamemode 6`: Tag
- `/gamemode 8`: WarioWare

### Common Bugs & Solutions

- Run Project64 and Net64 as administrator (right click on Project64 & Net64+)
- Make sure your ROM is clean, if you look for it on the internet you want one called: `Super Mario 64 (U) [!]` in `.z64` format. NOTE: Europe (E) and Japanese (J) ROMs do not work with the online tool.

1. Make sure your computer is 64-bits
1. Try using a different server, sometimes it could be a connection/host problem
1. Try pausing the emulator (`F2`) at the in-game file select screen while connecting Net64 to it and your desired server, then unpausing it (`F2` again) afterward. This may take a few attempts.
1. Restart both the client and the emulator after making changes
1. 16mb and counter factor only saves for that specific ROM, you need to change it each time you use a new ROM
1. If you are getting disconnected, then it means you were idle (not playing) for around 5-10 minutes. This is a feature built into the client, make sure you are playing to prevent being disconnected.
1. Capture The Flag is currently broken, the opposite players freeze when joining. No fix.
1. Boss Rush will crash Net64 if the boss gets hit when opening a star door. No fix.

### When I join a Server Net64 Crashes

Make sure you have the emulator on `16MB`. You do this by launching your ROM on Project64MM, going into `Options/Settings/Config<ROM Name>` and there will be a memory drop down menu. Click it and change from `4MB` to `16MB`.

### Changes I make in Settings (like Memory) revert when I press OK or Apply

Try launching both the Emulator and Net64 as an Administrator (right click the exe, choose run as administrator).
If the problem persists, check if your anti-virus and firewall have an exception made for Net64. If either of these has additional features (like "Protected Folders"), you will need to whitelist Net64 and Project64MM in all of them.

### Net64 is not launching

Net64+ should launch normally, but if it doesn’t then first check if your computer is a 32-bits (x86) or 64-bits.

*How do you check if it is a 64-Bit or 32-Bit?*

If you have a Windows 10 computer right click the start button and and click System, under Device specifications and System Type will it show if you have a 64-bit operating system or a 32-bit.
If your computer is 32-Bit, it is not supported by Net64 2.0.

### "Cannot open a rom because plugins have not successfully initialised"

This is almost always a result of a plugin (usually controller) not being set. Go to `Options/Settings/Plugins` and ensure none of the entries are blank. Aside from the graphics plugin (which MUST be `Glide64 Napalm WX Release 1`), which one to use for each is a matter of personal preference and compatibility with your hardware, so try different plugins as desired. (If no controller plugin seems to work, refer to the end of the "No Controller Error" entry below.)

### Popup Error “Unhandled R4300i OpCode at: 80914020”

This normally occurs when there is a memory issue with the emulator, if it’s not 16MB then this error can happen. Once you get this error make sure to check your memory setting again.

- If it's not set to 16Mb, change it to 16Mb and click `apply`
- If it is set to 16Mb, restart your computer

### Computer gets a Blue screen when launching Net64 or Project64?

The error code that the blue screen seems to give is related to this error code on [Microsoft's website](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-0x3b--system-service-exception)

### No Controller Error, cannot bind controls or Debug Error:  Run-time check failure#1

The default plugin for binding controls may not work as intended all the time. Another great plugin for control binding that comes with the Memory Modded Project64 is `N-Rage for PJ64: 2.4.0.2`

To change your plugin to this; go to `Config/Settings/Plugins` on PJ64 then look for Input (Controller) Plugin: Then click it and change it to `N-Rage for PJ64 (Debug) 2.4.0.2`. Then try to bind your controls. If it doesn’t work in the game but it binds, try restarting Project64 and make sure your controller is plugged in before launching it.

**If you are using an Xbox One controller (or something else that just won’t get detected) then click [here](https://cdn.discordapp.com/attachments/356514224832380928/444264169588523008/PJ64_NRage.dll). Add this to the folder Plugin -> Input**

### I can’t see my character! I’m invisible!

This is an extremely common bug, and there is quite the list of what the issue could be.

- Make sure you’re actually connected to a server.
- Be sure that there is an exception made for every part of your Firewall and Antivirus.
- Run both Project64 and Net64 as admin.
- This could also be a host problem so try to connect to a verified public server.

### Why can’t I play this on 32-bits (x86)?

The Net64 tool requires a 64-bit computer, currently there are no plans for adding 32-bit support.

### Are Mac and Linux Supported?

Currently there are no plans to natively support Mac/Linux. You can try to use a “Virtual Machine” but there’s no guarantee that it will work. Users have seemingly had the most success with Wine and WineTricks, but have yet to get it fully working.

### I downloaded a .zip file and all I see are weird files.  Where is Net64?

You accidentally downloaded the source code, you need to download the 7z above the source code download ([Net64+ 2.0 Client is here](https://github.com/Tarnadas/net64plus/releases/latest)).  Also make sure you downloaded it either from the Net64 Discord or Tarnadas’ Github

### How do I extract the client from the RAR?

You need to use a program called "7-Zip", once you download and install either one simply right-click on the file and click on `Extract`

### I can’t find 16MB under Memory Size/The highest is only 8MB

You’re using the wrong emulator.
Net64 2.0  requires Project 64 Memory Mod, a special emulator that allows more RAM to be used than a conventional N64 emulator. With the extra RAM, Net64 can import more characters, gamemodes, and provide ROM hack support.
It should have been included in with the client download, else you can get it from here:
[Project64 2.2 Memory Mod](https://mega.nz/#!aOBAlKQJ!I3D3m1CtyczjYcvEAozvRIBPAK29lTNVidoHzuGdkmc)

### I have an older version of Net64, will that still work with 2.0?

No, you won’t be able to connect to anyone who’s using 2.0 as it’s missing information and will kick you out of the server.  You can still use it for your own personal use or to play with friends, but they must be using the same version as you.

### I just want to use the new characters, not play online!

As of 2.0.1, you should be able to play offline after selecting the emulator.  If it’s still not working or you’re invisible, go to the ‘server’ folder included with the download and open `net64plus-ded.exe`.  Open Net64 and click `Navigation` then click `Direct Connect`
Type in `127.0.0.1` and click connect (This will connect you to your own computer, not a server).

### Game freezes/”Fatal Error”/White screen when I start Net64

You didn’t change the RAM to 16MB or the settings didn’t save. Close your emulator and Net64 before you try to connect again. **(If there is no option for 16MB you’re using the wrong emulator.)**

### Net64 can’t find emulator

Sometimes your Antivirus / Windows Defender, or other anti-virus software try to block the tool from injecting itself into the memory of the emulator. Make sure that those aren’t the issue.

### The graphics look pixelated?

This happens when you press `backspace` on your keyboard. It's a feature that changes the filtering mode between "Bilinear", "Point-Sampled", and "Automatic". Just press `backspace` one or two more times to set it back to normal.

### Microcode error

This error is caused by tampering with the graphics plugin. By default it is set to Glide64 Napalm.
**DO NOT CHANGE THE GRAPHICS PLUGIN!**
Net64 2.0 only works with `Glide64 Napalm WX Release 1`.  If you did change it, just set it back to Glide64 Napalm (in settings) and restart.

### Exception error: Line 259

If this error is preceded by one about plugins, refer to the entry above on that one first.
If not, or if this error persists after fixing that one: This is usually because of your graphics card, it means that the integrated graphics card (Usually a mobile chipset or something similar by Intel) cannot display the data from the Glide64 plugin. The first thing to try is to update the video drivers of your graphics card.

If the error still persists, try the following:
1. Go to `Options/Settings/Plugins`
2. Change the graphics plugin to `Jabo's Direct3D6 1.5.2`
3. Open Super Mario 64
4. Wait until you see Mario's face (or until you get an error message)
5. Go back to `Options/Settings/Plugins`
6. Change the graphics plugin back to `Glide64 'Napalm WX' release 1`
7. If you got an error message at step 4, reopen Super Mario 64
8. If it's still not working, try again but with `Jabo's Direct3D8 1.6` in step 2 instead

If none of the above works, you're probably out of luck.

### I can’t find any servers/ server list is blank

Sometimes the server browser goes down. This issue is related to the SMMDB website as both the website and client are linked together and run on the same hosting software. You will have to wait for it to return.
However this is an alternate solution; using `Direct Connect`.

### Why is it taking so long to connect?

It is possible that the server is full on players or the server host did not port-forward correctly.  Try using a different server.  If you’re trying to play privately with a friend, make sure they set everything up correctly.
