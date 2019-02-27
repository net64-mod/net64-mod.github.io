---
layout: page
title: "Net64Plus 2.0 FAQ"
---

## I want to play a different gamemode, how do I change it?
First check to make sure Gameplay voting is enabled for that server, or else then you can’t change it.  Type `/gamemode` followed by a number (1-8) in the the chat.  
Here’s a list of all gamemodes:
- `/gamemode 1`: Regular, with interaction/punching
- `/gamemode 2`: Regular, features the fireflower (press the L-Button)
- `/gamemode 3`: Regular, no interaction/punching
- `/gamemode 4`: Prophunt
- `/gamemode 5`: Boss Rush
- `/gamemode 6`: Tag
- `/gamemode 8`: WarioWare

## Common Bugs & Solutions
- Run Project64 and Net64 as administrator (right click on Project64 & Net64+)
- Make sure your ROM is clean, if you look for it on the internet you want one called: `Super Mario 64 (U) [!]` in `.z64` format. NOTE: Europe (E) and Japanese (J) ROMs do not work with the online tool.

1. Make sure your computer is 64-bits
1. Try using a different server, sometimes it could be a connection/host problem
1. Restart both the client and the emulator after making changes
1. 16mb and counter factor only saves for that specific ROM, you need to change it each time you use a new ROM
1. If you are getting disconnected, then it means you were idle (not playing) for around 5-10 minutes. This is a feature built into the client, make sure you are playing to prevent being disconnected.
1. Capture The Flag is currently broken, the opposite players freeze when joining. No fix.
1. Boss Rush will crash Net64 if the boss gets hit when opening a star door. No fix.
 
## When I join a Server Net64 Crashes
Make sure you have the emulator on `16MB`. You do this by launching your ROM on Project64, going into `Options/Settings/Config<ROM Name>` and there will be a memory drop down menu. Click it and change from `4MB` to `16MB`.

**Occasionally these settings do reset, which causes Net64 (and potentially your emulator) to crash, so you might have to re-enter them multiple times.**

Make sure your emulator is unpaused (`F2`) before joining a server.  
If it is set correctly, try launching both the Emulator and Net64 as an Administrator (right click the exe, choose run as administrator).  
If the problem persists, check if your anti-virus and firewall have an exception made for Net64.

## Net64 is not launching
Net64+ should launch normally, but if it doesn’t then first check if your computer is a 32-bits (x86) or 64-bits. 

*How do you check if it is a 64-Bit or 32-Bit?*

If you have a Windows 10 computer right click the start button and and click System, under Device specifications and System Type will it show if you have a 64-bit operating system or a 32-bit.  
If your computer is 32-Bit, it is not supported by Net64 2.0.

## Popup Error “Unhandled R4300i OpCode at: 80914020”
This normally occurs when there is a memory issue with the emulator, if it’s not 16MB then this error can happen. Once you get this error make sure to check your memory setting again.
- If it's not set to 16Mb, change it to 16Mb and click `apply`
- If it is set to 16Mb, restart your computer

## Computer gets a Blue screen when launching Net64 or Project64?
The error code that the blue screen seems to give is related to this error code on [Microsoft's website](https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/bug-check-0x3b--system-service-exception)

## No Controller Error, cannot bind controls or Debug Error:  Run-time check failure#1
The default plugin for binding controls may not work as intended all the time. Another great plugin for control binding that comes with the Memory Modded Project64 is `N-Rage for PJ64: 2.4.0.2`

To change your plugin to this; go to `Config/Settings/Plugins` on PJ64 then look for Input (Controller) Plugin: Then click it and change it to `N-Rage for PJ64 (Debug) 2.4.0.2`. Then try to bind your controls. If it doesn’t work in the game but it binds, try restarting Project64 and make sure your controller is plugged in before launching it.

**If you are using an Xbox One controller (or something else that just won’t get detected) then click here. Add this to the folder Plugin -> Input**

## I can’t see my character! I’m invisible!
This is an extremely common bug, and there is quite the list of what the issue could be.
- Make sure you’re actually connected to a server.
- Be sure that there is an exception made for Firewall and your Antivirus. 
- Run both Project64 and Net64 as admin. 
- This could also be a host problem so try to connect to a verified public server.

## Why can’t I play this on 32-bits (x86)?
The Net64 tool requires a 64-bit computer, currently there are no plans for adding 32-bit support.

## Are Mac and Linux Supported?
Currently there are no plans to natively support Mac/Linux. However, you can try to use a “Virtual Machine” but there’s no guarantee that it will work.

## I downloaded a .zip file and all I see are weird files.  Where is Net64?
You accidentally downloaded the source code, you need to download the 7z above the source code download ([Net64+ 2.0 Client is here](https://github.com/Tarnadas/net64plus/releases/tag/2.2.0)).  Also make sure you downloaded it either from the Net64 Discord or Tarandas’s Github

## How do I extract the client from the RAR?
You need to use a program called "7-zip", once you download and install either one simply right-click on the file and click on `Extract`

## I can’t find 16MB under Memory Size/The highest is only 8MB
You’re using the wrong emulator.  
Net64 2.0  requires Project 64 Memory Mod, a special emulator that allows more RAM to be used than a conventional N64 emulator. With the extra RAM, Net64 can import more characters, gamemodes, and provide ROM hack support.  
It should have been included in with the client download, else you can get it from here:  
[Project64 2.2 Memory Mod](https://mega.nz/#!aOBAlKQJ!I3D3m1CtyczjYcvEAozvRIBPAK29lTNVidoHzuGdkmc)

## I have an older version of Net64, will that still work with 2.0?
No, you won’t be able to connect to anyone who’s using 2.0 as it’s missing information and will kick you out of the server.  You can still use it for your own personal use or to play with friends, but they must be using the same version as you.

## I just want to use the new characters, not play online!
As of 2.0.1, you should be able to play offline after selecting the emulator.  If it’s still not working or you’re invisible, go to the ‘server’ folder included with the download and open `net64plus-ded.exe`.  Open Net64 and click `Navigation` then click `Direct Connect` 
Type in `127.0.0.1` and click connect (This will connect you to your own computer, not a server).

## Game freezes/”Fatal Error”/White screen when I start Net64
You didn’t change the RAM to 16MB or the settings didn’t save. Close your emulator and Net64 before you try to connect again. **(If there is no option for 16MB you’re using the wrong emulator.)**

## Net64 can’t find emulator
Sometimes your Antivirus / Windows Defender, or other anti-virus software try to block the tool from injecting itself into the memory of the emulator. Make sure that those aren’t the issue.

## The graphics look pixelated?
This happens when you press `backspace` on your keyboard. It's a feature that changes the filtering mode between "Bilinear", "Point-Sampled", and "Automatic". Just press `backspace` again to set it back to normal.

## Microcode error
This error is caused by tampering with the graphics plugin. By default it is set to Glide64 Napalm.  
**DO NOT CHANGE THE GRAPHICS PLUGIN!**  
Net64 2.0 only works with `Glide64 Napalm WX Release 1`.  If you did change it, just set it back to Glide64 Napalm (in settings) and restart.

## Exception error: Line 259
This error is caused by your graphics card, it means that the integrated graphics card (Usually a mobile chipset or something similar by Intel) cannot display the data from the Glide64 plugin. There is not much you can do to fix this issue other than attempting to update the video drivers of your graphics card.

## I can’t find any servers/ server list is blank
Sometimes the server browser goes down. This issue is related to the SMMDB website as both the website and client are linked together and run on the same hosting software. You will have to wait for it to return.  
However this is an alternate solution; using `Direct Connect`.

## Why is it taking so long to connect?
 It is possible that the server is full on players or the server host did not port-forward correctly.  Try using a different server.  If you’re trying to play privately with a friend, make sure they set everything up correctly.
