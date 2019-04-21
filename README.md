# Interactive Calculator 

The website is deployed on [GitHub pages](https://tommyjackson85.github.io/interactive-calculator/) from it's [Github repository](https://github.com/TommyJackson85/interactive-calculator)

This document is the main README file. After reading it, if you feel the need to understand more, you can refer to the [longer README document](https://github.com/TommyJackson85/interactive-calculator/blob/master/README-FULL.md), in which goes into further detail.

## Application Preivew

This applicication will alow users to build calculations, store calculation progress temporarely and use keyboard buttons as shortcuts for most the application functions. Calculations at an unlimited length can be built, with the options to display it in full, remove its previous inputs and start a new calcultion begining with the previous evaluated answer. The calculator can turn a built number negative or back to positive and can divide it by 100 continuously. 

Stored calculation progress can then be loaded to continue working on them or deleted. Prior to temporarely saving a calculation progress, the user can add a description value to be included on the saved caluclation progress display. Each saved data will also show the built calculation and answe / next input. 

## Why I chose to do a calculator for my second milestone project

I decided to do a calculator project, because I thought it had simular criteria to the Memory Game project (as part of Code Institutes Full Stack Course's second milestone project choices), as both are required to follow a specific logic, and to test all built logic. In order to make my project a bit more original than just a calculator, I decided to add the Calculations Backup section.

## UX

As a strictly front end project, I will set it out to meet the users demands as much as possible, while keeping it simple and easy to use for users.

### User Stories

As a user, I want to be able to ..

- use the calculator and calculator backup section immediately upon loading the application.
- build long calculations, with numbers and opperators, and evaluate them by pressing an 'answer' button.
- view as many last inputs of my built calculation on the calculator screen, and have the option to view the full built calculation on a separate larger screen.
- remove the last built number and/or inputed operator, and continuously undo the calculation using a 'remove' button. 
- completely clear a calculation and start a new calculation.
- build a number at maximum length close to width of the screen, and add a decimal point value in the number.
- utilise a plus, multiply, substract or divide operator, and continuously change my choice of operator.
- see my inputed number or operator, before having it added to the main calculation, with the exception of the 'answer' operator which should evaluate my calculation immediately.
- view my evaluated answer and use it as the first number of a new calculation.
- turn a positive built number into its negative equivilent, and visa versa.
- divide a built number by 100 continuously.
- save my calculation progress, and add an optional description to each saved calculation prior to saving.
- re-load each saved progress to the calculator, to continue building the calculation or delete them instantly.

I want to be clearly alerted when saving, loading and deleting calculation progres, and when there is an error.

If calculator is off screen, I want to be scrolled back to it when clicking load.

*For full testing responses to the User Stories, refer to the [testing document](https://github.com/TommyJackson85/interactive-calculator/blob/master/README-TESTING.md)*.

### Mockups, Diagrams and Inspiration

- LJN Logo - I initially wanted to build something with a retro style and I wanted to use temprary logo/brand for the webpage. [LJN](https://tvtropes.org/pmwiki/pmwiki.php/Creator/LJNToys) are a defunct video game company which is perfect to create a retro fit. I like the Rainbow design of the logo in which inspired me to add a colourful feel to the site.

- I had a vey basic mockup for this site. As the headers and footers were very basic. and the each section only contained a device or two each and some text. As complex each device is, they are not complex in design :

    - [Wireframe 1](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe1.JPG)
    - [Wireframe 2](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe2.JPG)
    - [Wireframe 3](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe3.JPG)
    - [Wireframe 4](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe4.JPG)

- The iPhone calcuator - the [iPhone calculator](https://9to5mac.com/2018/05/21/iphone-calculator-app-tips-and-tricks/) was a inspiration/guide for me when designing the structure of the calculator as well developing its functionality.

## Features and their functionality

### Layout of features
The majority of this project uses the Bootstrap 3 framework for setting up the layout and design of the webpage. HTML tags 'header', 'footer', 'main', 'section', 'aside' and 'div 'are also used for assisting in the layout. The only elements that dont use bootstrap are the child divs of the div with a class of 'heading', the footer, sections with ids of 'enlarged-display', 'main-calculator', 'keyboard-instructions', aswell as multiple sub-headings through out all sections. All these elements were design strictly using HTML, CSS and or SASS/SCSS.
 
A SASS mixin called 'height-cover-over' was used to have the header and footer overlay ontop ontop of the main section.

The 'calculator section' contains the the 'main-calculator', with the additon of the 'The Mega Calculator' sub-heading, aswell as the 'enlarged-display', the alert heading 'calculator-status'. The 'calculation-backup-section' contains the 'main-calculation-backup' section and it's sub-heading 'Calculation Backup', aswell as the alert headings 'save-status' and 'warning-status'. Both sections inherit 'keyboard-instructions' aswell.

Both the calculation-backup-section and calculator-section are generally the same width consistantly, and each section is not too close to the header or footer. For smaller devices, I kept the space between the two sections shorter so they are closer to each other. This is to allow both sections to be seen as much as possible while stacked on top of each other.

Through a SASS mixin called 'max-width-margin', I kept some child divs centered at their max width for keeping consistant equal spacing, as it provided a better user experience.

### header and footer content

The header displays the web page heading and logo, and the footer to display the copywrite informations.

### Keyboard Instructions (from both the Calculator section and Calculations Display section)

On large screens it is located below the Calculator and on smaller screens it is below the main 'calculation backup'.

### The calculator section

- The Calculator size, it's screen and its buttons - It's consistent in size on most screens, except for the smallest screen widths where it is slightly smaller. This was for it to feel like a real calculator and to allow the user to switch button at ease. The buttons are large as possible for users to be able to press them easily on mobile devices.

The calculator's screen - Close to the width of the calculator, and has a dark purple background and white text, displays the built calculation. It will read "Begin Calculation" on loading the page. When a built calculation is too long, it will only show the end portion of the calculation with three dots ('... ') at the start, (in total at 34 in string length) to tell the user there is more on the calculation. The bottom part shows the inputed the values (either number or operator).

- The enlarged display - located above the calculator at all times, usually at a wider display, and is only shown when it is being used. Used to show full calculation.

- The Switch Calculation Display button - switches between the enlarged display and calculator's screen, for displaying the built calculation. It's inner text toggles between two values on click reading "Hide Full Calculation" when activating the enlarged display, and reads "Show Full Calculation" when deactivated. When the enlarged display is activated, the calculator's display will say "calculation displayed above" in green text, matching it with enlarged display's border color and to detract attention from the calculator display.

- Number buttons - builds a number as long as the width of the screen, concating number digits together from newNumber array's inputed values. The decimal button (".") is included in this but can only be used once while building the number. The zero button can not be used at the start of a number. All other numbers can be used to start building a number. If a decimal is used at the start it will add a '0' first to prevent syntax errors when evaluating.

- divide100 (%) button and functionality - This allows the user to divide their built number by 100 continuously. Sometimes adds a decimal into the new Number, disabling the decimal button. Once it is used, the user can't add any number digets at the end of the number.

- plus-minus (±) button and functionilty - turns positive number into its negative equivilent and visa versa.

- operator buttons and the utilize operator function - utilizes an operator as next input. Operators are 'add' ("+"), 'subtract' ('-'), 'multiply' ('x'), 'divide' ('/') or 'answer' ('='). Answer button instantly evaluates calculations, showing answer at input, and equals sign '=' at the end of calculation. Other operators are not used instantly, and can be changed before being added to calculator.

- Switching between number buttons amd operator buttons - Switching between both is what builds the calculation. A number must be used first. When switching to an operator, the previous number is pushed and visa versa. After a user has evaluated a full calculation, the new answer can be used as the first number of his next calculaton when pressing an operator button or the calculation is restarted from pressing a number. However, a zero valued number (i.e. '0', '-0' or '0.0000'), can't be pushed to the built calculation.

- 'remove' button - When first clicking, it empties the input. If it's a number displayed in the input and the last index of the calculation is an operator, it removes the operator at the end of the calculation aswell. When its continuously clicked it removes the last two inputs of the calculation. It will always display "removed" on the calculator screened input section and displays "cleared" to the user when its empty.

- 'clear' button - this button clears both the input and calculation, displays 'cleared' in the calculation display and '0' in the input display.

### The Calculation Backup

- The calculation save form and its design - The calculation save form has two important features: the description input (textarea) and the save calculation button.

- The displayed calculations list  and it's design - Formed as in 'stack of boxs' design, with text and buttons in each, making each section easily separated. If there are no saved calculations, it displays one list item saying 'No Calculations are saved'.

- Button design in the calculation backup section - slim in size/height and more separated, making them easier to click each without pressing the other buttons.

- The description input - allows options description for next saved data.

- The save calcultion button - allows the user to save multiple calculation progess. Saves the main calculator settings,  reates an item/box for display. Item is added to list, in which each shows the description, next input / answer, and built calculation values. The newest saved item fades from blue to green high lighting its added to the list. Eash has a 'load' and 'delete' button. Returns the 'save-status' heading as "Calculation data saved below!" and 'calculator-status' heading as "Calculator data saved to Calculator Backup!". Green border is added to the displayed calculation list. Only 10 items can be save. If it has exceeded its limit, the 'warning-status' heading is returned as "Can not save! Calculations List has exceeded it's data limit!" and a red border is added to both the calculation description input and 'save calculation' button.

- delete button on each item - Removes item from the saved calculations list, fading it out and then redisplaying the list after showing its removal. Returns the 'Warning-Status' as "Calculation data deleted!". 

- 'Load' button on each item - reloads the data settings to the calculator. Adds a green border to the calculator and its display. The 'load-status's heading is returned as "Calculation data loaded succesfully!". It scrolls the screen to the calculator if the calculator is not seen.

### More notes of the status headings, border changes and transitions/animations.

All status headings ('warning-status', 'save-status', 'calculator-status') were placed at the top of their related headings. The 'save-calc' button activates both but only shows one on large screens. The 'warning-status' is set to red for potential negative outcomes, i.e. A user might of made the mistake of deleting a calculation. The 'save-status' and 'calculator-status' are set to green as they are positive. The delete button doesn't scroll the user to the top where the warning-status heading is located, so when the warning-status is off screen it wont be visible. I felt the fade-out transition of the item, after being deleted, was enough to indicate to the user that it has been removed from the list. The combination of the status headings, applied borders and the use of animation/transitions were to create a strong enough message to the user whenever possible and to create a better user experience. Alerts are cleared when the user begins working on a calculation keeping the page clean.

*

### Keyboard input functionality

- 'document.onkeypress(e)' JavaScript function - This allows users to use the keyboard to build or save calculations, aswell as switch calculations display. It takes the 'key' value of the pressed keyboard button and calls the function associated with it. If a non related key is pressed nothing is returned. This won't work if the calculation description input.

The following are the list of keyboard input buttons, in which will allow you to build and save calculations from the use of the keyboard:
- numbers: 0 - 9;
- decimal: '.'; 
- add: '+'; 
- subtract: '-'; 
- multiply: 'x', '*'; 
- divide: '/'; 
- answer: '=', 'Return'; 
- divide number by 100: '%'; 
- plus-minus: '±'; 
- remove previous inputs: 'r'; 
- clear entire calculation: 'c'; 
- switch calculation displays: 'd'; 
- save calculation: 's'. 

### Further discussion on color variations

As the logo of the site is a rainbow, I wanted to match its tone and make the general web page rich in color, but not entirely multi coloured. The main backround of the page is of different variations of turqoise, and light blue. 

This section goes into further detail on the remaining color variations.

The following are the list of color variables I created with SASS/SCSS:
- light-turquoise
- turquoise
- slight-darker-turquoise;
- dark-turquoise
- blue
- light-blue
- extra-light-blue
- purple
- dark-purple
- green
- light-green
- red
- orange 
- yellow 
- white 

These variables are used for different backgrounds, borders, buttons and text. 

#### Main background and secondary parent div colors, and their headings

The calculator and calculations backup interact with each and I wanted the header and footer to be consistant with both devices, so I set all thier backgrounds as turquoise to blend in with the main background's 'light-darker-turquoise'.

#### The 'feature-color' SASS mixin

A SASS mixin called 'feature-color' is used to give the correct background colour of the child div, which asserts it 1px solid border with a color of dark-turquoise and the correct readable text color.

#### The Buttons

All buttons background colours vary between red, blue, green, orange and purple, to have them feel separate to the parent background and from each other (where its relevent). The load, save, answer, switch calculator display buttons are also green to have them feel positive, while the delete button is red to have it feel negative. When hovering on buttons, their backgrounds turn yellow to give an indication of interactivity.

#### Calculator display and enlarged display 

The calculator display and enlarged-display each have a 'dark-purple' background and white text to make both feel like an electronic screen. The enlarged-display has a thick green border, to attract attention to it when it's on.

#### Description Input and Saved Calculations list

The textarea input (form-control) has an extra light blue background with dark text to feel like a regular text input. Each saved-calculation/list-item of the calculations list has a light turquoise background and dark text, keeping the text consistant with the text input text.

### Features Left to Implement

- A register/login function - To create an account, permanently save and share their calculations. *

- Further development to the description input and an editing system - more dynamic descriptions to numerical data. Allow users to add a brief description to their specific number data in the form of a tooltip(from each saved item). Use an editing system, where a user clicks number data to add further description. Include the ability to edit the main description.

- Change the alerts - add a popup feature for the screen, when an item is deleted, loaded or saved. Would replace some of the alerts. The user will be able to remove the popup as it will have an 'x' in the corner.

- Move the Save Form to the Main Calculator - In planning this project, I considered having the Save form at the top of the list of calculations would be best practice. In heinseight of developing this application, I think it might have been better to have the saving button, with description input, loacated on the calculator itself and just have the list of calculations to the right of the main calculator. Would provide a better User Experience, particularly for users using the application for the first time.

- A button to hide the 'calculations-backup'/'calculations-list' section - a good optional feature especially if the saving functionalities were added to the main calculator. Useful at larger screen sizes, where the calculations-backup-section is located to the right of the calculator-section. Allows for wider width span of the enlarged screen, when the built calculations get bigger.

- Putting the 'keyboard-instructions' in a tooltip -  Next to the tooltip would be a heading saying 'Keyboard Input Instructions'. The keyboard instructions are only for laptop/desktop devices, so it would be more convenient to keep them in a tooltip. Tooltip could be at top of the page, or within the header.

## Technologies Used

- [JavaScript / ES6](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    - JavaScript and ES6 syntax was used to develop the majority of the functionality of the web page. I built multiple onclick and gloabal functions to create responses from interacting witht he DOM. 
- [smooth-scroll-without-the-use-of-jquery](https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery)
    - Code post I found on this stackoverflow page, which I used for my 'scrollToTop' function. I tested it on Safari, Firefox and Chrome browsers and it worked on all three browsers. I used the majority of the code, but tweeked it for my project. Credit goes to Andrew Johnson for the use of his code and to [kamal](https://stackoverflow.com/users/1317883/kamal) for posting the code.
- [Bootstrap 3](https://getbootstrap.com/docs/3.3/)
    - I used Bootstrap to create the general framework of the page, and for the majority of the styling of the 'calculations-backup-section'.
- [CSS](https://www.w3schools.com/css/default.asp)
    - I used CSS to style the whole site, where it was needed.
- [SASS/SCSS](https://sass-lang.com/)
    - I used SASS, in the SCSS format, to add object oriented programming logic to my CSS code. This was to make the CSS code cleaner through the use of SASS mixins, variables and SASS's ability to nest css selectors in relation to the HTML DOM. 
- [Babel](https://babeljs.io/)
    - The project uses Babel to compile any ES6 JavaScript syntax into traditional JavaScript, to make the website work on all browsers and devices. The Babel environment was downloaded through npm packages.
- [Jasmine](https://jasmine.github.io/)
    - The project uses Jasmine, so I could use the it to build the webpage though test driven development. I hard coded the Jasmine files into the head of the testing html file.
-[Jasmine setTimeout/setInterval](https://makandracards.com/makandra/32477-testing-settimeout-and-setinterval-with-jasmine)
    - This was used to fix a timing issue, related to the deleteCalc function in which uses a setTimeout to allow for a CSS animation to finish before calling.

## Files types and their purpose

All CSS / SCSS related files were strictly used for styling the project. The main JavaScript files were mostly used for developing responses and functions from interating with the DOM. For most cases, I avoided changing the CSS styling  with the JavaScript file, with the exception of changing the 'enlarged-display' display between 'block' and 'none'. I would use Javascript to add a CSS class to the a DOM elements class list. JavaScript files were also used for automatic testing through the Jasmine framework.

## Testing

The documentation on all testing can be found at the [testing document](https://github.com/TommyJackson85/interactive-calculator/blob/master/README-TESTING.md).

## Deployment

The website is deployed on GitHub pages at: https://tommyjackson85.github.io/interactive-calculator/
from the Github repository: https://github.com/TommyJackson85/interactive-calculator

The test file is deployed at:
https://tommyjackson85.github.io/interactive-calculator/spec/tests.html?random=false

## Credits

Moosa Hassan - mentor at Code Institute.

### Media
- [TheLJN Logo](https://en.wikipedia.org/wiki/List_of_Acclaim_Entertainment_subsidiaries)
    - An old video game/toy company sold to Acclaim Entertainment back in 1990, but was dissolved by 1995. Acclaim filed for bankruptcy in 2004. Current owenership of LJN brand is unknown.

### Acknowledgements

- I received inspiration and guide for the development of the calculator's functionality, from the [iPhone calculator](https://9to5mac.com/2018/05/21/iphone-calculator-app-tips-and-tricks/).
- Received further guidance from th wikipedia page about the Calculator [Calculator Wikipedia](https://en.wikipedia.org/wiki/Calculator)