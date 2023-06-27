﻿# find_your_hat
**Important: In the first line paste this, where the hard brackets are replaced with the location of this js file on your computer: const prompt = require('[file name here]')({sigint: true});**  
**You will need node and npm on your computer to run this file**  
  
Self guided project from CodeCademy  
  
## Installing the Code  
Download the find_your_hat.js file  
  
## Using the Code  
After opening in VSCode run the js file in the terminal by typing node find_your_hat.js  
Next type l, r, u, or d and press enter to go left, right, up or down, respectively.  
You are unable to go out of bounds and will be prompted with a tip telling you so.  
Your goal is to reach the hat to complete the game, while avoiding the holes, so as not to lose.  
After reaching the hat or going into a hole a message will be logged to the console indicating this, however it might be a few lines up after being pushed there by the field display.  
To replay/reset the game press ctrl+C to exit the prompt and reopen the file.  
  
## Specific Purpose  
The goal of the project was to  create a basic terminal game that relied on the prompt module from npm for input.  
I aimed to have an updating terminal display every time a move was submitted.  
  
## Future Plans  
In the future if I come back to this I would hope to improve the timing of when the fields show up so that the game over screens can appear, as well as not having the previous fields still appear above.  
I also hope that I can have better replayability so that the program does not require a restart altogether just to play again, but rather just a prompt or something of that sort that would allow for the user to express their desire to continue playing with a newly generated field.  
