# Rock Paper Scissors Game

This project is a browser-based Rock Paper Scissors game where players can compete against the computer in a best-of-five series. The game provides a clean user interface with buttons for each choice and a scoring system to track the results.


![mockup](<assets/images/rock, paper, scissor mockup.png>)


## Live Demo
- **Homepage**: <a href="https://bjoernholmlund.github.io/rock-paper-scissor/index.html">Homepage</a>
* **Game Page**: <a href="https://bjoernholmlund.github.io/rock-paper-scissor/game.html">Gamepage</a>

## Features

### Existing Features
- **Home button** At the top of the page, theres a home button that takes u to the homepage.<br><br>
![homebutton](assets/images/homebutton.png)

* **Header**: At the top of the page underneath the home button, theres a header.
              The header says what game you are playing.<br><br>
![header](assets/images/header.png)

+ **Game Page**: Players can select rock, paper, or scissors. The game displays both the player and computer choices, updates scores, and declares a winner after five rounds. <br><br>
  ![gaming buttons](<assets/images/gaming buttons.png>)<br><br>

- **Score Tracking**: Visual score tracking for both player and computer. <br><br>
  ![scoretracker](<assets/images/player and computer score.png>)<br><br>

* **Popup Instructions**: Instructions are available to help new players understand the game.<br><br>
![instructions](assets/images/instructions.png) <br><br>

+ **Reset Function**: Resets scores and rounds, allowing players to start a new match at any time.<br><br>
![restart button](assets/images/restart.png)<br><br>
## Technologies Used
- **HTML**: Structure of the website.
* **CSS**: Styling for layout, color, and background.
+ **JavaScript**: Game logic, including random computer choices and score updates.


## Testing
- **Cross-Browser Testing**:
 I tested the game across multiple web browsers, including Firefox, Chrome, Opera, and Safari. The game functioned as expected on each, with no issues in game logic, visuals, or interactivity.

* **Accessibility and Readability**:

- I confirmed that colors and fonts are accessible and easy to read by running the project through Lighthouse in the Chrome DevTools. The game achieved good scores in accessibility, performance, and best practices.
- You can see the Lighthouse test results below.

+ **Device Compatibility**:

I also confirmed that this project works as intended on mobile devices and desktops, ensuring the layout and functionality are responsive and visually consistent across various screen sizes.
![lighthouse](<assets/images/testing, lighthouse.png>)

### Validator Testing

- HTML 
  - No errors or warnings were showned, when doing the <a href="https://validator.w3.org/">W3 Validator</a>
* CSS
  - No errors or warnings were found, when doing the <a href="https://jigsaw.w3.org/css-validator/">W3 jigsaw validator</a>
+ JavaScript
  - No errors or warnings were found, when doing the <a href="https://jshint.com/">jshint</a>
  - Metrics:
  - There are 4 functions in this file.
  - Function with the largest signature take 1 arguments, while the median is 0.
  - Largest function has 25 statements in it, while the median is 4.
  - The most complex function has a cyclomatic complexity value of 14 while the median is 1

  ## Deployment

  ### To deploy the project 

  The site was deployed to GitHub pages. The steps to deploy a site are as follows:

  In the GitHub repository, navigate to the **Settings** tab.
  Once in Settings, navigate to the **Pages** tab on the left-hand side.
  Under **Source**, select the branch to **master**, then click **save**.
  Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

  The live link is here https://bjoernholmlund.github.io/rock-paper-scissor/

  ## Credits 

  ### Content
  - The home button is taken from <a href="https://fontawesome.com/">Font awesome</a>
  - The Emoji buttons were take from <a href="https://getemoji.com/">Getemoji</a>