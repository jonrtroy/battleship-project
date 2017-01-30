# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1: The Game

### Necessary Deliverables

### Explanations of the technologies used
I used Google a lot during this project to look up some things that I wanted to do, but either coouldn't remember how to do it or a new way in doing something. There were a lot of times where I just had to reread old notes, homework, exercises and labs to figure out how to write the code that I wanted. Over the past week, I was trying to get comfortable with using the console on the browser. This helped me tremendously throughout the whole process. I could run a function through my JS, but would use the console to see if it was running properly. It would help me identify the problem, whether it was syntax related or an improper function. It also help me format with HTML and CSS a lot better. I would say that using the console in the browser was the most important technology that I used for this project.

### Approach taken
I wanted to pseudocode most of my project. I first said down and drew the wireframe on how I wanted the game to look. I felt that this was the best approach since if I had something to look at, I would know what functionalities I wanted. After I drew the game out on a piece of paper, I started to write the HTML and CSS for it. I definitely should have wrote down every single functionality that I wanted for the game though. I spent all of Thursday writing code that I ended up not using. I had an idea in my head of what I wanted, but when it came time to write it all in sublime text, I ended up in a worst spot. I had the look of it right, but not the functionality.
  
### User stories
As a user I should be able to identify that I am playing a Battleship game where only I am the one on offense and trying to find my opponents' ships.
As a user I should be able to see what color is for hit and what color is for miss.
As a user I should be able to see how many missiles I have left to know how many turns I have left.
As a user I should be able to click on any of the boxes to see if that is where my opponent has put their ship. 
As a user I should be able to see if I have sunken my opponent's ship with an alert.
As a user I should be able to see if I have sunken all of my opponent's ships and if I have won the game.
As a user I should be able to see if I have lost the game.

### Wireframes
Uploaded it on GitHub

### How-to-use instructions
  - The goal of the game is to find your opponent's 3 ships before the count turns to 0. 
  - Each ship is 3 boxes in length.
  - If the box that you clicked turns red, that means you hit the ship.
  - If the box that you clicked turns blue, that means you missed the ship.
  - The ships are either horizontal or vertical. A ship cannot be diagonal.

### Unsolved problems
I had a few unsolved problems. At first, I wanted to put an input and 'Fire' button so that users could type out what spot on the board they wanted to choose. I kept running into the problem of how to connect that input to the divs that I created. I ended up just using an on click function so that users could just click on the board directly. Another problem happened at the end of my code where I could not get the missile count to stop at zero. It kept going past it into the negative numbers. What I did was just removed the container entirely when the game was either won or lost. I also created a 'Replay' button so that users could reload the game and play again. I used a location.reload function to do that, but I felt that there was another way to get the board back up without having the players click this button which would refresh the page.


