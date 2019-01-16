# Interactive Calculator 

This applicication will come with a regular calculator aswell as a 'calculation backup' section. The user will use the calculator to build calculations, and the calculation backup will allow the user to temporarily save their built calculations to a list. The calculations will be saved for as long as the application is not reloaded. The user will also be able to load or delete each saved calculation as they wish.

The calculator will allow the user's to build long calculations, build and push long numbers into the calculation. It will also allow the user to back track their calculations in case they make a mistake, even in the case where a calculation has already been evaluated. The user will also be able to completely clear the calculator and start over again. The user can also use their evaluated answer at the start of a new calculation.

Aside from the regular number and opperator buttons, the calcultor will also have multiple other functions. The calculator will also allow the user to turn a built number negative or back to positive and will also be able to divide the number by 100. The calculator will also send the user important messages in relation to some of its functions. For example, the calculator will tell the user they "removed" a part of the calculation when they backtrack, and it will send them a "cleared" message when they completely cleared a calculation. There will also be a button that will allow the user to move the built calculation to an enlarged display above the main calculator in which shows the entire built calculation. This will be usefull incase a calculation gets too big for the smaller display on the calculator.

When saving a build calculation within the calculation backup section, multiple settings of the calculator are saved. It saves the built calculation, last inputed data/evaluated answer, and any other important settings to allow the calculator to continue building the calculation, upon when re loaded, with out any bugs in the calculator. The user will also be able to type in a description of the built calculation, leaving a reminder of what the calculation is for. The abily to 'save', 'load' and 'delete' calculations will be done through buttons. The user will be given a clear message when one of the buttons is activated.

As an additional feature, the user will also be able to use keyboard buttons, as a replacement for using the mouse to click each button. This will allow the user to speed up their use of the calculator. There will be keys for the use of each button on the calculator, aswell as the 'save calculation' button in the 'calculation backup' section.

note: I may add another feature to this calculator. I am considering adding a memory function that allows the user to temporarily store the their calculations, and reload them.

One or two paragraphs providing an overview of your project.

Essentially, this part is your sales pitch.
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:

Prior to doing any design, development or planning of the project, I set out a list of user stories:

As a user type...
- Upon loading the application, I want to be able to use the calculator and calculator backup section immediately, and not worry about having to login or any unnecessary loading time or webpage intros.
- I want to be able to build long calculations, with numbers and opperators, and then evaluate the calculations with the 'equals' button.
- I want to be able to view my built calculation on one line and as much as possible within the calculation screen width.
- I want the option to switch to a larger screen to show my entire built calculation, and to be able to hide or show it when ever I want.
- I want to be able to remove the last built number and inputed operator, and to be able to continuously back track the calculation using a 'remove' button, ending the calculation at the next previous number in the calculation. 
- I want to be able to completely clear a calcualtion to restart it.
- I want to be able to build a long number from inputing the number button, with its maximum length as the width of the screen, and to be able to add a decimal point value in the number where it's needed.
- I want to be able to utilise a plus, multiply, substract or divide operator, and to continuously change my choice of operator, when clicking one of the operators.
- I want to be able to continuously see my input. When I build a number, I want to be able see it being built. When I switch to a an operator, I want to see the operator I will be using before using it (with the exception of the equals button).
- I want to be able to push my previously built numbers and utilised operators into the calculator, when switching between building numbers and utilising operators. i.e. When I build a number, it is pushed into the calculator from utilising an operator.
- I want to be able to evaluate a built calculation, which starts and ends with a number. The equals button should evaluate the calculation and then push '=' at the end of the calculation for extra display.
- I want to be able to view the answer of the evaluated calculation in the input field, and I want to be able to push the answer into a new calculation after I press a new operator button.
- I want to be able to turn a positive inputed number / answer into its negative equivilent, and visa versa. I want to be able to do this continuously.
- I want to be able to divide a inputed number / answer by 100 continuously.
- I want to be able to save my built calculation and last inputed data/evaluated answer to a list, in which I can also add a description to each saved calculation prior to saving it.
- For each saved calculation, I want to be able re load each to the calculatior, in order to continue building the calculation, from where I last left it.
- For each saved calculation, I want to be able to delete them instantly.
- Upon clicking 'Save Calculation', 'Delete' and 'Load' buttons, I want to be clearly alerted they have been activity, or alerted when there is an error upon clicking them, i.e. if the saved calculations list has reached its capacity, I want to be alerted that no more can be saved. If there is enough space for saving the built calcualtion, I still wish to be alerted that it has been saved.
- Upon loading a calculation and if the calculator is not visible upn the screen (i.e. smaller screens), I want to be scrolled back to the calculator.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

For the design of the layout of the page, I kept it as simple as possible. The page has has a header and a footer, in which lie on top of the main section. The header just had the name of the website and a logo, while the footer contains any copywrite references.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
### Layout of features

The majority of this projected uses the Bootstrap 3 framework for setting up the layout and design of the webpage. HTML tags 'header', 'footer', 'main', 'section', 'aside' and 'div 'are also used for assisting in the layout.

The only elements that dont use bootstrap are the child divs of the .heading div, the footer, #enlarged-display, #main-calculator, #keyboard-instructions multiple sub-headings through out all sections. All these elements were design strictly using HTML, CSS and or SASS/SCSS.

The footer and header are within their respective places. The footer is at the bottom and the header is at the top. Between the footer and header is the 'main' section. The main section reaches the top and the bottom of the page at all times, with the header and footer lying on top of it. I did this with by the keeping the header's bottom margin and footer's bottom margin consistantly the negative opposite to their their height, i.e. if the footer's height is 30px, its top margin is set to -30px.

Within the 'main' section contains two sections, the 'calculator-section' and the 'calculation-backup-section'. The 'calculator section' contains the the 'main-calculator', with the additon of the 'The Mega Calculator' sub-heading, aswell as the 'enlarged-display', 'load-status' heading and 'keyboard-instructions'. 'calculation-backup-section' contains the 'main-calculation-backup' section and it's sub-heading 'Calculation Backup', aswell as the 'save-status' and 'warning-status' headings.

The 'calculator-section' is consistently at the top of the the main section, while the 'calculation-backup-section' is below it for smaller screens, but set to the right side of the 'calculations section' for larger screens. Both the calculation-backup-section and calculator-section are generally the same width consistantly, but have different amounts of space between their respective borders and child divs.

### header and footer content
As this project is only a single page application, there isn't much content to put into each section. For this project, in its development so far, I decided to use the header to display the web page heading and logo, and the footer to display the copywrite data.

### The calculator section - .main-calculator, .enlarged-display, .keyboard-instructions

- Styling of the calculator - When building the main calculator, I decided to keep it more consistent in size, and not have it change to multiple sizes. The only size variations are at smaller screen widths, in which it is a bit smaller. I wanted to have the calculator feel like a real calculator. For example, I kept the screen dark with bright text and the buttons as large as possible for users to able to press them easily with their fingers on their mobile devices, without pressing other buttons. I wanted users to be able to.

- Styling the enlarged display - The 'enlarged-display' is very much an extra tool for the main calculator, but it is located outside the main calculator (but directly above) to allow it have more width span. The color schemes of display are simular to the calculator screen, with the exception of the bright green border. This border is to give the user the feeling they turned it on. I kept the screen as wide as possible while making sure the inner text wasnt too wide for reading. This was to reduce the height as much as possible so other features can be see on the screen where possible.

- the keyboard instructions text - Very little was done in designing this section. It's purpose was for it to be readable and not take up too much space. It is located below the calculator and it is kept to the same width as the calculator so it doesn't look messy. The instructions are for users who wish to use the keyboard inputs to build calculations and save calculations.

- Calculator screen/display - allows users to view all the reponsive information from pressing the calculator buttons. For most situations, the top of the screen displays the calculation being built while the bottom part displays the inputed data prior to being pushed into the calculation. However both parts can also display messages for the user in regards to certain situations. For example, upon refreshing the web page, the top, displayedCalculation part says 'Begin Calculation'.

- The Switch Calculation Display button and 'enlarged display' - The Switch Calculation Display simply allows the user to switch between an enlarged display to show the full calculation or the #displayed-calc section of the calculator's screen/display. It first initially changes or toggles between two values. Upon on clicking the Switch Calculation Display button, if the boolean value 'displayFullCalc' is equal to true, then this value is set to false, and #enlargedDisplay style.display is set to "none". Once the button is clicked again, 'displayFullCalc' is set to false, and #enlargedDisplay style.display is set to "block". #enlargedDisplay is not on the main calculator div, but instead is right above the calculator at all times. When its style.display is at "block" it is visble, and when it is set to "none" it has disappeared. When ever switchCalculationDisplay is clicked it's innerHTML toggles between two string values. When displayFullCalc is set to true, switchCalculationDisplay says "Hide Full Calculation", and when set to false, the button sais "Show Full Callculation". switchCalculationDisplay's innerHTML is also returned after clicking the button. The remainder of the process in switching between the displays is caused by calling displayCalculation(). 

- displayCalculation() function - This function reloads displayedCalc's innerHTML(from the calculator screen) and displayedEntireCalc's innerHTML (from the enlarged display/screen). This function is called quite frequently, from other functions, through out using the calculator. What is show in both innerHTML depends on what displayedFullCalc is set to. If set to true, displayedEntireCalc.innerHTML will show the full calculation, displayedCalc.innerHTML will say "calculation displayed above" and a class of 'green-display-text' will be added to displayedCalc's class list, to make the text color green matching it with the enlarged display's border. This is strictly for display purposes and to detract attention from the #displayedCalc, and attract attention to the enlarged display instead. If displayedFullCalc is set to false, then displayedEntireCalc.innerHTML becomes empty (but not diplayed anyway), 'green-display-text' is removed from displayedCalc's class list, and displayedCalc's innerHTML will show calculation's data stringed together. However, if the displayed calculation is too long for the smaller display (exceeds 34 in length), then only the end of the calculation (34 in length) is shown, with three dots ('...') at the start of the display. The three dots are used to indicate that the entire calculator is not on display. This is very much used as a messenger to the user. If the user wants to view the entire calculation, he will have to press the switchCalculationDisplay button to view it above the calculator. Furthermore, if the calculation array is completely cleared, and displayCalculation() is called, the message 'cleared' will either appear in the enlarged display or the calculator display, indicating to the user that the the calculation array or built calculation is empty.

- Number buttons and number building function - When pressimg the number button, it activates the numberBuilder function. Once a number button is pushed, it pushes it's value into the a global array called 'newNumber'. The Array data is displayed stringed together to form a number as a string, and this is displayed bottom of the calculator screen, i.e. #displayedInput HTML. Each number button html ID is "num" + either one of the following: [1,2,3,4,5,6,7,8,9,"Dec"], i.e. #num1, #num4 and #numDec. #numDec pushes a decimal (".") into the newNumber array. Once this is pressed, the #numDec button is disabled until the number is finished being built. It's disable through boolean variable turning true, i.e. let disableDec = false, when begining a new number, and is turned true when the decimal button is used once.
- divide100 button and functionality - This allows the user to divide their built number by 100. It turns the stringed newNumber into an evaluated real number, and divides it by 100 before, then turns it back to a string, splits into a new array, and finally pushes it back into the newNumber global array (after newNumber is emptied).
Sometimes when a user divides the number by 100, it adds a decimal into the new Number. When this happens, disableDec is turned to true.
- 'negative' button and functionilty - this allows the user to turn their positive number into a negative version of the number and visa versa, i.e. '100' turns to '-100' and visa versa. This is done by adding '-' to the first index of the newNumber array function, or if its negative already it slices the '-' from it, i.e. ['1', '2'] turns to ['-1', '2'] and back to ['1', '2']. 
- operator buttons and utilize operator function - these buttons allows the user to utilize an operator for their calculation. They have the choice between, 'add' ("+"), 'subtract' ('-'), 'multiply' ('*'), 'divide' ('/') or 'answer' ('='). With the exception of the 'answer' button, the operator buttons allows the user constantly switch between a choice of operator. Upon clicking an operator button, it empties the newOperator array and pushes in a value of the operator button clickes, i.e. if the multiply button is clicked, it pushes 'x' into the newOperator array, and then if the subtract button is clicked, it empties 'x' out of the array and pushes '-' into the array. The clicked operator is displayed at the bottom of the screen (#displayedInput). Once the answer button is clicked, it fully evaluates the stringed calculation, if it starts with one number and ends with another.  Unlike the other operators, the '=' is not displayed at the #displayedInput, the evaluated calculation's answer is. The '=' is instead displayed at the end of the calculation, just for display.
- Calculation array, pushToCalculation(array) function - The pushToCalculation(array) function is called when ever the user decides to switch between building a number or utilising an operator. It strings together the data from the array, and pushes it into the calculation array. It then empties the array before returning it. If the data from the array is a built number but is only a decimal or negative decimal (i.e. '.' or '-.'), it will have a '0' at the end of it after being pushed into the calculation array, i.e ['-.0']. This is strictly for display purposes and to indicate that it is an empty number.
- Switching between number buttons amd operator buttons - At the start of a calculation, when the calculation array is empty, the operator button cannot be used, only a number button can be. When a user finsishes building a number and decides to utilise an operator, the built number is pushed into the calculator array through calling pushToCalculation(newNumber). This number is now the first or next index. When an operator is decided to be used and the user starts building another number, the operator is pushed into the calculation array, through calling pushToCalculation(newOperator). After a user has evaluated a full calculation (from pressing the 'answer button'),the user can use his answer response (from the displayedInput), as the first number of his next calculaton when the user presses an operator button. If a user decides to press a number button after evaluating the calculation, the calculation restarts, emptying the calculation array and starts building a new number.

- remove button and function - this button allows the user to back track their calculation even when the calculation is evaluated. When first clicking the remove button, it empties the input arrays (newNumber and newOperator). If it's a number displayed in the input and the last index of the calculation is an operator, it removes the operator at the end of the calculation. If its an operator that is displayed in the input, the button will just clear the input. If it is clicked a second time or more in a row, the remove function will remove the last two indexs of the calculation array on each click. The remove button will always leave the last index of the calculation array as a number. When the remove button is clicked, it messages "removed" to the user in the input section. Once the the calculation is emptied it messages "cleared" to the user in the calculation section.
- cleared button and function - this button clears the calculation, newOperator and newNumber arrays, and displays 'cleared' in the calculation display and '0' in the input display. It does this through a series of call backs, starting initially by calling clearAllAndDisplay() (discussed below).
- clearing arrays - when ever the JavaScript code needs to empty an array, it either sets the array to an empty array or it is spliced empty. It is spliced through a reusable function called empty. It is used when the array cant be set to a new empty array, so the empty function is used as a back up.
- other array clearing related javascript functions - The clearInputs() function calls empty(newOperator) and empty(newNumber), clearing both input arrays. The clearAll() function calls the clearInputs() function, empty(calculation) and returns disableDec to false. It is designed to clear everything and restart the claculator. The clearAllAndDisplay() function, also calls clearAll(), and also calls displayCalculation() (discussed above), and then returns displayedInput's innerHTML as "0". displayedCalc's innerHTML is set to 'cleared' due to combination of calling clearAll() and displayCalculation() in order. All these global functions are called for different scenarios in relation to which button is clicked and the content of the arrays at display. It helps create a chain of functions and keeps the code clean.

### The Calculation Backup
- The calculation save form and its design- The calculation save form has two important features: the description input (textarea) and the save calculation button. I used the bootstraps 'form-group', 'form-control', 'btn' classes for the design.
- The displayed calculations list design - I used Bootstraps 'list-group' and 'list-group-item' classes to create a simple 'stack of box's' design, with text and buttons in each. It is get simple easy for users to read. 
- button design in the calculation backup section - Unlike the calculator buttons, I kept the buttons in this section smaller in size, and none of the buttons are stacked above each other, making it easier to click each without pressing the other buttons.
- The description input - This is used to allow users to add a description to the Calculation settings they are about to save. Upon clicking it, it activates the input and the user can write what they want about the calculations data.
- the save calcultion button - This allows the user to save multiple calculation settings. It does this by creating an object, in which contains compies of the three global arrays (calculation, newNumber, newOperator), disableDec boolean variable and the value/written description from the description input. The object also contains a displayedInput field which contains a stringed version of the last inputed value (either from the newOperator or newNumber). If both the newOperator or newNumber are empty, itthe displayedInput field will read "Input Empty". The displayedInput field in the object is strictly for display purposes.
The new saved object is pushed into another array called calculationsList. This can contain up to 10 list items. The displaySavedCalculations() function is then called, within a setTimeout function of 30 miliseconds so it is called after the the returned value. saveStatus.innerHTML = "Calculation data saved below!" is then returned; If the user trys to save more than 10 sets of data. It will return warningStatus.innerHTML = "Can not save! Calculations List has exceeded it's data limit!" and will added the 'warning-border' class to both calculationDescriptionInput's and saveCalculation's class list. The warning-border class applies a red border. The combination of the red border and warning message tells the user that the calculations list has reached its full capacity; 
- The displaySavedCalculations function - This function displays the entire list of saved calculations, displaying the relevent data for each item. For each item, there is a Description section which shows the value from the description input, a Built calculation section which displays the full calculation stringed together and the 'next input' section which shows the 'displayedInput' (from each object of data). If the displayedInput was the previously evaluated answer, 'next input' is replaced with 'answer / next input', indicating to the user that this was the preivous answer. Each displayed item will also contain a 'load' and 'delete' button. If there are no saved calculations, it displays one list item saying 'No Calculations are saved'. The displaySavedCalculations is only called after the 'saved calculation' or 'delete' button is pressed. Each time it is called, it reloads the entire list of items. When the 'save calculation' button is pressed, the most recently saved item on display will contain the animation class of 'new-saved-calculation', while the other saved calculations will have the class 'saved-calculation'. The 'saved-calculation' just gives a light blue background, while 'new-saved-calculation' makes the item background transition from green to blue upon calling displaySavedCalculations(). When displaySavedCalculations() is called after clicking the delete button on one of the items, none of the items on display will have the 'new-saved-calculations' class none will have any transitions and will just have static blue backgrounds.
- deleteCalc button and function - when a user clicks the delete button on one of the saved items, the item is removed from the saved calculations list. Upon clicking, an animation class called 'removing-list-item' is first added to the buttons parentElement (i.e. the whole displayed calculation item), in which fades its opacity from 1 to 0, giving the user the notion that the item has been removed. Then, within a setTimeout of 500 miliseconds, the saved calculation object is removed from the calculationsList and displaySavedCalculations() is called. The setTimeout is to allow for the animation item to fade out first, before calling the displaySavedCalculations(). When displaySavedCalculations is officially called, the list is redisplayed showing that the item has been removed. deleteCalc finally returns warningStatus.innerHTML = "Calculation data deleted!".
- loadCalc button/function and the scrollToTop function - when a user clicks the load button on one of the saved items, it sets the four global variables (calculation, newOperator, newNumber, disableDec) to equal the related values of the item's object data, i.e. calculation = calculationsList[this.value].savedCalculation.slice(). Then the displayAll function is called, reloaded the data to the calculator. To give a clear message to the user of the changes, the 'success-border' class is added to the 'mainCalculator' and its 'display', in which gives each a green border. The loadCalc also returns loadStatus.innerHTML = "Calculation data loaded succesfully!", in which tells the user the data has been loaded. The scrollToTop() function is also called, in which scrolls the screen to the calculator is the calculator cant be seen. This transition brings the user back to the calculator, so he/she can start working on his previously saved calculation. The scrollToTop() function doesnt use any CSS animations or transitions, it uses Javascript's Math, scrollTo, scrollTop, self.pageYOffset, offsets and other functionality to create a smooth scroll. The original code used for the scrollToTop() function comes from this [link](https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery).

### More notes of the status headings, border changes and transitions/animations.

When placing the status headings on the dom, their locations were relevent to what they are alerting the user to. The 'load-status' heading was best suited to be above the main calculator, so when the user has to be scrolled to the the calculator when the calculator is not shown on screen, the load-status would always be shown to them. If the load-status was located where the save-status or warning-status were, it would be hidden from the user on small screens, upon loading a saved calculation. Simularly, when saving a calculation, the 'save-status' heading and the most recently saved item (with its green to blue transition) are both close to the save form and are clearly visible to the user at most screen sizes/positions. The 'warning-status' heading, in which is required for the saved-calculation button, for when telling the user the save capacity has reached its limit, is also located conveniently to where the 'save-status' is located. The only exception is the delete button, which also uses the 'warning-status' to alert the user it has deleted a calculation. The delete button doesn't scroll the user to the top where the warning-status heading is located, so when the warning-status is off screen it wont be visible. I felt the fade-out transition of the item, after being deleted, was enough to indicate to the user that it has been removed from the list. I didn't want to inconveniently bring the user back to the top of the screen for another reminder message. The combination of the change of status headings, applied borders and the use of animation/transitions were to create a strong enough message to the user whenever possible and to create a better user experience, with reliance on all or one of the features. With the 'warning-status' being red and the 'save-status' being green, it gives a clearer message to the user that one is switched to from the other. For example, when the save capacity is exceeded, the user is notified through the text color change, aswell as the message change and border changes.

- clearPageAlerts function - As much as it is important to alert the user of major changes to the calculator and calculations list, it is also important to not have theser alerts on all the time. The clearPageAlerts function is used to clear remove all status headings, alert border classes (as discussed above). It makes the inner HTML of 'save-status', 'load-status' and 'warning-status' an empty string, and removes the alert classes 'success-border' and 'warning-border' from the DOM elements where would be applied. The clearPageAlerts function is called back in most button functions and some reusable functions, usually at the early stages of each funtion. This also makes sure all alerts are cleared before a new alert needs to appear. This process keeps the page as clean as possible. For example, when a user starts building a calculation on the calculator after loading a calculation, it is a better experience for the user to not have the the 'success-border's on the calculator' and for the 'load-status' to be removed. 

### Keyboard input functionality

- document.onkeypress(e) function - This is the function that allows users to use the keyboard to build or save calculations. It takes the 'key' or 'shiftKey' value of the pressed keyboard button. The 'key/shiftKey' value is passed through a switch function, in which calls the correct function, in relation to the keyboard input list below, i.e. key 'd' will call switchCalculationDisplay.onclick(). If a non related key is pressed nothing is returned. The keyboard buttons cannot be used to build or save calculations when the 'calculation-description-input' on the save form is clicked/activate. Anywhere else on the dom needs to be clicked to be able to use this feature. The use of the keyboard is very important for users to be able to build calculations faster from using laptops, desktops or any other device that doesn't have touch screen. The following are the list of keyboard input buttons, in which will allow you to build and save calculations form the use of the keyboard:
    - numbers: 0 - 9;
    - decimal: '.'; 
    - add: '+'; 
    - subtract: '-'; 
    - multiply: 'x', '*'; 
    - divide: '/'; 
    - answer: '=', 'Return'; 
    - divide number by 100: '%'; 
    - switch number from positive to negative: 'n'; 
    - remove previous inputs: 'r'; 
    - clear entire calculation: 'c'; 
    - switch calculation displays: 'd'; 
    - save calculation: 's'. 

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used 
- [JavaScript / ES6](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    - JavaScript and ES6 syntax was used to develop the majority of the functionality of the web page. I built multiple onclick and gloabal functions to create responses from interacting witht he DOM. 
- [smooth-scroll-without-the-use-of-jquery](https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery)
    - Code post I found on this stackoverflow page, which I used for my scrollToTop() function. It was the best vanilla JavaScript I used for my project, to allow for a smooth scroll to the top of the page. I tested it on Safari, Firefox and Chrome browsers and it worked on all three browsers. I used the majority of the code, but tweeked it for my project. Credit goes to Andrew Johnson for the use of his code, to [kamal](https://stackoverflow.com/users/1317883/kamal) for posting the code.
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

## Testing

- Jasmine testing - I set up the Jasmine testing environment in a 'spec' folder. The folder contains a tests.html file, aswell as spec jasmine/javascript files for the following buttons and function categories: (1) Number Buttons; (2) Operator Buttons; (3) Keyboard Buttons; (4) Save Calculation Button; (5) Other Buttons; (6) Display Saved Calculations Function; (7) Reusable Functions.

    - tests html file - This file allows me to test the my main.js file on a separate html file. I copied and pasted the html from index.html to the tests.html in order for my tests to be able to read a DOM. This meant I didn't have to rebuild my main javascript code for testing. The HTML on the tests.html isnt styled but it's displayed when the tests.html file is ran.
    - Building the test basis - Prior to building my test files for each button, I would build most of the main code (i.e. for each button function or reusable function) on the main.js file. Then I would build the test basis of each button type ('answer button', other operator button, number button,) with the 'Describe' function. I would then build test scenarios related to the button with the use of the 'it' function. 
    - Test scenarios - For each scenario, I would set the related global variables to their correct setting that fits scenario. For examples, sometimes I would already have calculation array built, or I would set the disableDec to 'true'. I would then use the 'expect' function to test the calling of a function's outcomes or non outcomes ( i.e. expect(num4.onclick().toBe('4')) or expect(clearAll()).not.toBe(true) ; ) . I would also test all the global variables to make sure they have changed or haven't changed (i.e. expect(calculation).toEqual([]) and/or expect(disableDec).toBe(false);). I would do as much tests as I need on each related element of code in each function.
    - Refactering the code - I would usually have each expect test fail, pass it and then maybe refactor. The more test I built the more faults or errors I would come across in the code, which required me to refactor the code. Further more, when I moved onto another button function to test, I would sometimes find I need to add to the previous code of other functions. This was the case when I built and tested the operator utiliser function, in which I would also built and tested the pushToCalculation function. I found after building them I needed to go back to the number building function, to make sure it would push the newOperator data into the calculation when it was needed. 
    - Running the tests - When Running the tests, I would do it in linear order and not at random. This was because each each test is built as a separate scenario anyway and becuase when testing them at random, an odd error would occur. Whether or not these tests run at random is irrelevent to the collection of test beacuase they are not connected.
    - scrollToTop() function hasn't been testing - this was the only function which wasn't tested. This was because it is not code I developed myself and because I felt manually testing was enough of a reason to trust it. It is also quite complex for Jasmine testing. For a future development on this, I may test it. 

- Manual testing
    - While building each button, I would also test the calculator manually from the chrome browser. After compiling the code into the build/main.bundle.js through babel, I would test the calculator on chrome, firefox and safari browsers, to make sure it is compatable with all browsers.
    - I tested every button click, and buttons response to see if any errors came up in the browser. If there was an error I would refactor the code to make sure the error never returns. 
    - Manual testing was valuable for testing transitions/animations, because any problems with them are visible to the eye. The opacity, color transitions work perfectly, and are perfectly timed and deliver a good user experience. The scrollToTop function was not working in Safari before, so I went searching online for new code to make it work on Safari. I found a longer set of more complex code, which now allows the screen to scroll to the top on Safari and mobile browsers, when the code is called.
    - I tested margins, sizes and paddings on every browser in which I tested each from its minimal mobile size browser. For Safari browsers, it was important that I tested a minimal screen width of 320px. The width of 304px in Chrome usually equals 320px in Safari, so I tested 304px as the minimum screen size.


In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Deployment

The website is deployed on GitHub pages at: https://tommyjackson85.github.io/interactive-calculator/
from the Github repository: https://github.com/TommyJackson85/interactive-calculator

It has been deployed from the beginning of this project. All project folders and files have been pushed to the GitHub repository during development, with the exception of node_modules (see .gitignore file).

A '404' error occured when deploying the website, due to GitHub pages trying use the README.md file. The error was avoided when I excluded the README file from the _config.yml file.

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- [TheLJN Logo](https://en.wikipedia.org/wiki/List_of_Acclaim_Entertainment_subsidiaries)
    - An old video game/toy company sold to Acclaim Entertainment back in 1990, but was dissolved by 1995. Acclaim filed for bankruptcy in 2004. Current owenership of LJN brand is unknown.

### Acknowledgements

- I received inspiration for this project from X