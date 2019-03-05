# Interactive Calculator 

This is the full comprehensive README document, in which goes into the application in full detail. For a more brief overview of this project, please read the [main ReadMe file](README.md).

The website is deployed on [GitHub pages](https://tommyjackson85.github.io/interactive-calculator/) from it's [Github repository](https://github.com/TommyJackson85/interactive-calculator)

## Application Preivew

This applicication will come with a regular calculator aswell as a 'calculation backup' section. The user can use the calculator to build calculations, and the calculation backup will allow the user to temporarily save their built calculations to a list. The calculations will be saved for as long as the application is not reloaded. The user will also be able to load or delete each saved calculation as they wish.

The calculator will allow the user's to build long calculations, build and push long numbers into the calculation. It will also allow the user to back track their calculations in case they make a mistake. The user will also be able to completely clear the calculator and start over again, and can start with the previous evaluated answer.

Aside from the regular number and opperator buttons, the calcultor will also have multiple other functions. The user can turn a built number negative or back to positive and will also be able to divide the number by 100. The calculator will also send the user important messages when needed. For example, the calculator will tell the user they "removed" a part of the calculation when they back track, and it will send them a "cleared" message when they completely clear a calculation. When the calculator gets too long for the screen, the user can move the built calculation to an enlarged display instead.

When saving a built calculation within the calculation backup section, the built calculation, last inputed data/evaluated answer and any other important settings are saved, to allow the calculator to continue building the calculation, upon when re loading the calculation. The user will also be able to type in a description of the built calculation, leaving a reminder of what the calculation is for.

As an additional feature, the user will also be able to use keyboard buttons, as a replacement for using the mouse to click on most buttons. This will allow the user to speed up their use of the calculator and when saving calculations.

## Why I chose to do a calculator for my second milestone project

I decided to do a calculator project, because I thought it had simular criteria to the Memory Game project (as part of Code Institutes Full Stack Course's second milestone project choices), in terms of providing details of the logic and testing the logic. Simular to the Memory game, it required the developer to understand the rules. I researched how a calculator works on the the [calculator wikipedia page](https://en.wikipedia.org/wiki/Calculator).

In order to make my project a bit more original, I decided to add the Calculations Backup section.

## UX

As a strictly front end project, I will set it out to meet the users demands as much as possible, while keeping it simple and easy to use for users.

The following are a list of user stories this application will set out to meet, in which describe what kind of user this project is for. Each user story is from the user's perspective and each describes what they want...

- Upon loading the application, I want to be able to use the calculator and calculator backup section immediately, and not worry about having to login or any unnecessary loading time or webpage intros.
- I want to be able to build long calculations, with numbers and opperators, and then evaluate the calculations by pressing an 'equals' button.
- I want to be able to view my built calculation on one line and as much as possible within the calculator's screen width, however, I would also like to be able to have the option to view the full built calculation on a separate larger screen, and to be able to hide or show it when ever I wish.
- I want to be able to remove the last built number and/or inputed operator, and to be able to continuously back track the calculation using a 'remove' button, ending the calculation at the last previous number in the calculation. 
- I want to be able to completely clear a calculation, so I can start a new calculation.
- I want to be able to build a long number from inputing the number button, with its maximum length as the width of the screen, and to be able to add a decimal point value in the number where it's needed.
- I want to be able to utilise a plus, multiply, substract or divide operator, and to continuously change my choice of operator, when clicking one of the operators.
- I want to be able to continuously see my input. When I build a number, I want to be able see it being built. When I switch to a an operator, I want to see the operator I will be using before using it, with the exception of the 'equals' operator.
- I want to be able to push my previously built numbers and utilised operators into the calculator, when switching between building numbers and utilising operators.
- I want to be able to view my answer to the evaluated calculation in the input field, and I want to be able to push the answer into a new calculation after I press a new operator button.
- I want to be able to turn a positive inputed number / answer into its negative equivilent, and visa versa. I want to be able to do this continuously.
- I want to be able to divide a inputed number / answer by 100 continuously.
- I want to be able to save my built calculation and last inputed data/evaluated answer to a list, in which I can also add a description to each saved calculation prior to saving it.
- For each saved calculation, I want to be able re load each to the calculator, in order to continue building the calculation, from where I last left it.
- For each saved calculation, I want to be able to delete them instantly.
- Upon clicking 'Save Calculation', 'Delete' and 'Load' buttons, I want to be clearly alerted they have been activated, or alerted when there is an error upon clicking them.
- Upon loading a calculation, I want to be scrolled back to the calculator if it is not visible.

### Mockups, Diagrams and Inspiration

- LJN Logo - I initially wanted to build something with a retro style and I wanted to use temprary logo/brand for the webpage. [LJN](https://tvtropes.org/pmwiki/pmwiki.php/Creator/LJNToys) are a defunct video game company which is perfect to create a retro fit. I like the Rainbow design of the logo in which inspired me to add a colourful feel to the site.

- I had a vey basic mockup for this site. As the headers and footers were very basic. and the each section only contained a device or two each and some text. As complex each device is, they are not complex in design. One looks like a calculator, another is an expandable box (elarged display), and the last is just a save form on top of a list box. Regardless I did sketch out how it might look mobile and large devices, and how each section will look:
    - [Wireframe 1](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe1.JPG)
    - [Wireframe 2](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe2.JPG)
    - [Wireframe 3](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe3.JPG)
    - [Wireframe 4](https://raw.githubusercontent.com/TommyJackson85/interactive-calculator/master/assets/images/wireframe4.JPG)

- The iPhone calcuator - the [iPhone calculator](https://9to5mac.com/2018/05/21/iphone-calculator-app-tips-and-tricks/) was a inspiration/guide for me when designing the structure of the calculator as well developing its functionality. A major difference between this calculator and the iPhone calculator is this calculator builds chain calculations and removes previous inputs from the calculator. The iPhone calculator doesnt allow you to build chain calculations and just keeps evaluating the calculation as you build it. It does however, allow you you to erase previous inputs number digits while you build a number. You can also copy the number data. The other major differenct to between the two calculators, is that you can toggle between a large display and small display.

For the design of the layout of the page, I kept it as simple as possible. The page has has a header and a footer, in which lie on top of the main section. The header just had the name of the website and a logo, while the footer contains any copywrite references.

## Features and their functionality
### Layout of features
The majority of this projected uses the Bootstrap 3 framework for setting up the layout and design of the webpage. HTML tags 'header', 'footer', 'main', 'section', 'aside' and 'div 'are also used for assisting in the layout.

The only elements that dont use bootstrap are the child divs of the div with a class of 'heading', the footer, sections with ids of 'enlarged-display', 'main-calculator', 'keyboard-instructions', aswell as multiple sub-headings through out all sections. All these elements were design strictly using HTML, CSS and or SASS/SCSS.

The footer and header are within their respective places. The footer is at the bottom and the header is at the top. Between the footer and header is the 'main' section. The main section reaches the top and the bottom of the page at all times, with the header and footer lying on top of it. I did this by keeping the header's bottom margin and footer's top margin consistantly the negative opposite to their their height, i.e. if the footer's height is 30px, its top margin is set to -30px. As the code for this was repetitive in its structure and usage, I created a SASS mixin called 'height-cover-over' to set the top/bottom margins and heights of each. This mixin was also important because the header's margins and heights kept changing as the screen became bigger, due to the image logo and text changing in sizes.

Within the 'main' section contains two sections, the 'calculator-section' and the 'calculation-backup-section'. The 'calculator section' contains the the 'main-calculator', with the additon of the 'The Mega Calculator' sub-heading, aswell as the 'enlarged-display', the alert heading 'load-status' and the 'keyboard-instructions'. The 'calculation-backup-section' contains the 'main-calculation-backup' section and it's sub-heading 'Calculation Backup', aswell as the alert headings 'save-status' and 'warning-status'.

The 'calculator-section' is consistently at the top of the the 'main' section. The 'calculation-backup-section' is below it for smaller screens, but set to the right side of the 'calculations section' for larger screens. I kept the space above or below top and bottom of each section as even as possible for the larger browsers and devices, not leaving too much or too little space between the two section. There is enough space to keep each section away from each other and away from the headers and footers, keeping the webpage clean and easy to understand for the user. For smaller devices, I kept the space between the two sections shorter so they are closer to each other. This is to allow both sections to be seen as much as possible while stacked on top of each other. I felt it was important to keep them close because they both interact with each and because it's a better user experience for the user if he/she doesn't have to scroll too much.

Both the calculation-backup-section and calculator-section are generally the same width consistantly, but have different amounts of space between their respective borders and child elements. The maximum width of multiple child element in each section varies. When each child div reached their maximum width, they are centered in each section. I created a SASS mixin called 'max-width-margin' and included it in each relevent selector, in which would automatically set the width to 90%, min width to 294px, left/right margins to auto, but the max-width and top/bottom margins could be changed to what they needed to be. Keeping the child divs centered was important for keeping consistant equal spacing, as it provided a better user experience.

### header and footer content
As this project is only a single page application, there isn't much content to put into each section yet. For this project, in its development so far, I decided to use the header to display the web page heading and logo, and the footer to display the copywrite informations. There is no need to have any links to other pages or sections, because the content is small.

### Keyboard Instructions (from both the Calculator section and Calculations Display section)
Very little was done in designing these parts. It's purpose was for it to be readable and not take up too much space. It is located below the calculator large devices/screens, due to this section having more space available to hold it. It is below the main 'calculation backup' on smaller devices, because it isnt important information for mobile devices and because I didnt want it being stuck between the two sections. The instructions are for users who wish to use the keyboard inputs to build calculations, toggle between calculation displays and save calculations. The keyboard-structures HTML is repeated twice, one for each section, however one is always hidden from the screen from CSS's display styling being switched between 'block' and 'none'.


### The calculator section - main-calculator, enlarged-display

- Styling of the calculator - When building the main calculator, I decided to keep it more consistent in size, and not have it change to multiple sizes. The only size variations are at smaller screen widths, in which it is a bit smaller. I wanted to have the calculator feel like a real calculator. For example, I kept the screen dark with bright text and the buttons as large as possible for users to be able to press them easily with their fingers on their mobile devices, without pressing other buttons.

- Styling the enlarged display - The 'enlarged-display' is very much an extra tool for the main calculator, but it is located outside the main calculator (but directly above it) to allow it to have more width span. I kept the screen as wide as possible while making sure the inner text wasnt too wide for reading. This was to reduce the height as much as possible so other features can be seen on the screen where possible.

- Calculator screen/display - This allows users to view all the reponsive information from pressing the calculator buttons. For most situations, the top of the screen displays the calculation being built while the bottom part displays the inputed data prior to being pushed into the calculation. However both parts can also display messages for the user in regards to certain situations. For example, upon refreshing the web page, the top, displayedCalculation part says 'Begin Calculation'.

- The Switch Calculation Display button and 'enlarged display' - The Switch Calculation Display simply allows the user to switch between an enlarged display to show the full calculation or the displayed calculation section of the calculator's screen/display. It first initially changes or toggles between two values. Upon on clicking the Switch Calculation Display button, if the boolean value 'displayFullCalc' is equal to true, then this value is set to false, and the enlarged display (div with id of '#enlarged-display') display is set to "none" (through CSS). Once the button is clicked again, 'displayFullCalc' is set to false, and the enlarged display's style's display is set to "block". The enlarged display is not on the main calculator div, but instead is right above the calculator at all times. When its style.display is at "block" it is visble, and when it is set to "none" it has disappeared. When ever the switch Calculation Display button is clicked it's inner HTML text is toggled between two string values. When displayFullCalc is set to true, the button says "Hide Full Calculation", and when set to false, it says "Show Full Calculation". switchCalculationDisplay's inner HTML is also returned after clicking the button. The remainder of the process in switching between the displays is caused by calling the 'displayCalculation' function. 

- The display calculation function - This function reloads the displayed calculation's inner HTML(from the calculator screen) and displayed entire calculation's inner HTML (from the enlarged display/screen). This function is called quite frequently, from other functions, through out using the calculator. What is shown from calling it, depends on what displayedFullCalc is set to. If set to true, The enlarged display will show the full calculation, the calculator display will say "calculation displayed above", with the 'green-display-text' being added to to the inner heading's class list, to make the text color green matching it with the enlarged display's border. This is strictly for display purposes and to detract attention from the displayed calculation, and attract attention to the enlarged display instead. If displayedFullCalc is set to false, then the displayed entire calculation's inner HTML becomes empty (but not diplayed anyway), and the 'green-display-text' is removed from the calculator's 'displayed calculation' class list, and the 'displayed calculation' section's inner HTML will show calculation's data stringed together. However, if the displayed calculation is too long for the smaller display (exceeds 34 in length), then only the end of the calculation (34 in length) is shown, with three dots ('...') at the start of the display. The three dots are used to indicate to the user that the entire calculation is not on display. If the user wants to view the entire calculation, he will have to press the switch calculation display button to view it above the calculator in the enlarged display. Furthermore, if the calculation array is completely cleared, and the 'displayCalculation' function is called, the message 'cleared' will either appear in the enlarged display or the calculator display, indicating to the user that the the calculation array or built calculation is empty.

- Number buttons and number building function - When pressimg a number button, it activates the numberBuilder function. It pushes the button's value into the a global array called 'newNumber'. The Array data is displayed stringed together to form a number as a string, and this is displayed at the bottom of the calculator screen, i.e. The displayed Input's HTML. Each number button's ID is "num" + either one of the following: 1, 2, 3, 4, 5, 6, 7, 8, 9, Dec, i.e. #num1, #num4 and #numDec (decimal button). The decimal button pushes a decimal (".") into the newNumber array. Once this is pressed, the decimal button is disabled until the number is finished being built. It's disable through boolean variable turning true, i.e. disableDec becomes false, when begining a new number, and is turned true when the decimal button is used once.

- divide100 (%) button and functionality - This allows the user to divide their built number by 100. It turns the stringed newNumber into an evaluated real number, and divides it by 100 before, then turns it back to a string, splits into a new array, and finally pushes it back into the newNumber global array (after newNumber is emptied). Sometimes when a user divides the number by 100, it adds a decimal into the new Number. When this happens, disableDec is turned to true.

- plus-minus (±) button and functionilty - this allows the user to turn their positive number into a negative version of the number and visa versa, i.e. '100' turns to '-100' and visa versa. This is done by adding '-' to the first index of the newNumber array function, or if its negative already it slices the '-' from it, i.e. ['1', '2'] turns to ['-1', '2'] and back to ['1', '2']. 

- operator buttons and the utilize operator function - these buttons allows the user to utilize an operator for their calculation. They have the choice between, 'add' ("+"), 'subtract' ('-'), 'multiply' ('x'), 'divide' ('/') or 'answer' ('='). With the exception of the 'answer' button, the operator buttons allows the user to constantly switch between a choice of operator. Upon clicking an operator button, it empties the newOperator array and pushes in a value of the operator button clickes, i.e. if the multiply button is clicked, it pushes 'x' into the newOperator array, and then if the subtract button is clicked, it empties 'x' out of the array and pushes '-' into the array. The clicked operator is displayed at the bottom of the screen ('displayedInput'). Once the answer button is clicked, it fully evaluates the stringed calculation, if it starts with one number and ends with another. Unlike the other operators, the '=' is not displayed at the displayed Input, the evaluated calculation's answer is. The '=' is instead displayed at the end of the displayed calculation, just for display.

- Calculation array and push To Calculation function - The 'pushToCalculation' function is called when ever the user decides to switch between building a number or utilising an operator. It strings together the data from the array, and pushes it into the calculation array. It then empties the array before returning it. If the data from the array is a built number but is only a decimal or negative decimal (i.e. '.' or '-.'), it will have a '0' at the end of it after being pushed into the calculation array, i.e ['-.0']. This is strictly for display purposes because just having a decimal in the calculation display doesn't look clean. Adding a 0 at the end will tell the user it is a 0.

- Switching between number buttons amd operator buttons - At the start of a calculation, when the calculation array is empty, the operator button cannot be used, only a number button can be. When a user finsishes building a number, the user must press an operator button to push the built number into the calculator array. This calls pushToCalculation(newNumber). This number is now the first or next index. After an operator is pressed and is decided to be used, the user needs to start building another number to push the operator into the calculation array. This will call 'pushToCalculation(newOperator)'. After a user has evaluated a full calculation (from pressing the 'answer button'),the user can use his answer response (from the displayedInput), as the first number of his next calculaton when the user presses an operator button. If a user decides to press a number button after evaluating the calculation, the calculation restarts, emptying the calculation array and newNumber array, and the pressed number value is pushed in the empty newNumber array. The constant pushing of the previous input into the built calculation, from switching betweeen number and operator usage, makes the building of a calcuation straight forward for the user. There is no need to press a separate button to push the input in. This speeds up the calculation building.

- 'remove' button - this button allows the user to back track their calculation even when the calculation is evaluated. When first clicking the remove button, it empties the input arrays (newNumber and newOperator). If it's a number displayed in the input and the last index of the calculation is an operator, it removes the operator at the end of the calculation. If its an operator that is displayed in the input, the button will just clear the input. If it is clicked again a second time, the remove function will remove the last two indexs of the calculation array on each click. It will continue to remove the last two calculation index's as long as the newNumber and newOperator arrays are empty. The remove button will always leave the last index of the calculation array as a number. When the remove button is clicked, it messages "removed" to the user in the input section. Once the the calculation is emptied it messages "cleared" to the user in the calculation section.

- 'clear' button - this button clears the calculation, newOperator and newNumber arrays, and displays 'cleared' in the calculation display and '0' in the input display. It does this through a series of call backs, starting initially by calling clearAllAndDisplay (discussed below).

- clearing arrays - when ever the JavaScript code needs to empty an array, it either sets the array to an empty array or it is spliced empty. It is spliced through a reusable function called 'empty'. When developing the JavaScript code, I would always try to see if setting the variable to an empty array would work. If it doesn't I would call 'empty(array)' as a back up.

- other array clearing related javascript functions - The 'clearInputs' function calls 'empty(newOperator)' and 'empty(newNumber)', clearing both input arrays. The 'clearAll' function calls the 'clearInputs' function, empty(calculation) and returns disableDec to false. It is designed to clear everything and restart the calculator. The 'clearAllAndDisplay' function, also calls clearAll(), and also calls displayCalculation() (discussed above), and then returns displayed Input's inner HTML as "0". displayed Calculations's inner HTML is set to 'cleared' due to calling 'clearAll' and 'displayCalculation' in order. All these global functions are called for different scenarios in relation to which button is clicked, or which function is called. It helps create a chain of functions and keeps the code clean.

### The Calculation Backup

- The calculation save form and its design - The calculation save form has two important features: the description input (textarea) and the save calculation button. I used the bootstraps 'form-group', 'form-control', 'btn' classes for the design.

- The displayed calculations list design - I used Bootstraps 'list-group' and 'list-group-item' classes to create a simple 'stack of boxs' design, with text and buttons in each. This helped provide clarity on the list of items and made it easier for users to read.

- button design in the calculation backup section - Unlike the calculator buttons, I kept the buttons in this section smaller in size, and none of the buttons are stacked above each other, making it easier to click each without pressing the other buttons.

- The description input - This is used to allow users to add a description to the Calculation settings they are about to save. Upon clicking it, it activates the input and the user can write what they want about the calculations data.

- the save calcultion button - This allows the user to save multiple calculation settings. It does this by creating an object, in which contains copies of the three global arrays (calculation, newNumber, newOperator), disableDec boolean variable and the value/written description from the description input. The object also contains a 'displayedInput' field which contains a stringed version of the last inputed value (either from the newOperator or newNumber). If both the newOperator or newNumber are empty, the displayedInput field will read "Input Empty". The displayedInput field in the object is strictly for display purposes. The new saved object is pushed into another array called 'calculationsList'. This can contain up to 10 list items. The 'display Saved Calculations' function is then called, within a setTimeout function of 30 miliseconds so it is called after the the returned value. 
The save status text is changed to "Calculation data saved below!", the calculator status text is returned as "Calculator data saved to Calculator Backup!" and the "success-border" class is added to the class list of the displayed calculation list. The save status is hidden at large screen sizes because there is no need to have to two messages with the same general meaning next to or close to each other. Having the save Status message appear above the save button on small devices, when the save button is clicked, is valuable for the user experience, because the other message is off screen at the time. If the user, however, trys to save more than 10 sets of data, it will only return the warning status text (above the Calculations Backup) as "Can not save! Calculations List has exceeded it's data limit!" and will add the 'warning-border' class to both calculation description input and 'save calculation' button's class list. The warning-border class applies a red border. The combination of the red border and warning message tells the user that the calculations list has reached its full capacity.
- The display Saved Calculations function - This function displays the entire list of saved calculations, displaying the relevent data for each item. For each item, there is a Description section which shows the value from the description input, a Built calculation section which displays the full calculation stringed together and the 'next input' section which shows the 'displayedInput' (from each object of data). If the displayedInput was the previously evaluated answer, 'next input' is replaced with 'answer / next input', indicating to the user that this was the preivous answer. Each displayed item will also contain a 'load' and 'delete' button. If there are no saved calculations, it displays one list item saying 'No Calculations are saved'. The 'displaySavedCalculations' function is only called after the 'saved calculation' or 'delete' button is pressed. Each time it is called, it reloads the entire list of items. When the 'save calculation' button is pressed, the most recently saved item on display will contain the animation class of 'new-saved-calculation', while the other saved calculations will have the class 'saved-calculation'. The 'saved-calculation' just gives a light blue background, while 'new-saved-calculation' makes the item background transition from green to blue upon calling the 'displaySavedCalculations' function. When 'displaySavedCalculations' is called after clicking the delete button on one of the items, none of the items on display will have the 'new-saved-calculations' class none will have any transitions and will just have static blue backgrounds. The 'green-to-blue' transition of the new saved item, is to give an indication to the user that it has been added to the list. If either values/data from the calculator or description input were empty, the displayed item's 'Description', 'Built Calculation', or 'next input' / 'answer' fields would display a message telling you. 

- delete button - when a user clicks the delete button on one of the saved items, the item is removed from the saved calculations list. Upon clicking, an animation class called 'removing-list-item' is first added to the buttons parentElement's (i.e. the whole displayed calculation item) class list, in which fades its opacity from 1 to 0, giving the user the notion that the item has been removed. Then, within a delay (setTimeout function) of 500 miliseconds, the saved calculation object is removed from the calculations List and 'displaySavedCalculations' is called. The delay is to allow for the item to fade out first, before calling 'displaySavedCalculations'. When displaySavedCalculations is officially called, the list is redisplayed showing that the item has been removed. The delete button finally returns the Warning Status as "Calculation data deleted!" (located above the Calculations Backup).

- 'Load' button/ and the scroll To Top function - when a user clicks the load button on one of the saved items, it sets the four global variables (calculation, newOperator, newNumber, disableDec) to equal the related values of the item's object data, i.e. from the main.js file "calculation = calculationsList[this.value].savedCalculation.slice()". Then the displayAll function is called, reloading the data to the calculator. To give a clear message about the changes to the user, the 'success-border' class is added to the 'mainCalculator' and its 'display', in which gives each a green border. The loadCalc also returns the load status's heading as "Calculation data loaded succesfully!", in which tells the user the data has been loaded. The 'scrollToTop' function is also called, in which scrolls the screen to the calculator so it can be seen. This transition brings the user back to the calculator, so he/she can start working on his previously saved calculation. The 'scrollToTop' function doesnt use any CSS animations or transitions, it uses Javascript's "Math, scrollTo, scrollTop, self.pageYOffset, offsets" and other functionality to create a smooth scroll. The original code used for the scrollToTop() function comes from this [link](https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery).

### More notes of the status headings, border changes and transitions/animations.

When placing the status headings on the dom, their locations were relevent to what they are alerting the user to. The 'calculator-status' heading was best suited to be above the main calculator, so when the user has to be scrolled to the the calculator when the calculator is not shown on screen, the calculator-status would always be shown to them. If the calculator-status was located where the save-status or warning-status were, it would be hidden from the user on small screens, upon loading a saved calculation. Simularly, when saving a calculation, the 'save-status' heading and the most recently saved item (with its green to blue transition) are both close to the save form and are clearly visible to the user at small screen sizes/positions. This is removed on larger screen sizes, because the 'calculator-status', is of more importance.
Any changes related to the Calculator should always be notified by the calculator, with the message related to the calculator. The 'warning-status' heading, in which is required for the saved-calculation button, for when telling the user the save capacity has reached its limit, is also located conveniently to where the 'save-status' is located. Because nothing happens to the Calculator Data, there is no need to keep showing an alert by the calculator. There only needs to be an alert by the Calculations Backup, to tell the user nothing was saved here. The only exception, in relation to alert headings, is the delete button, which also uses the 'warning-status' to alert the user it has deleted a calculation. The delete button doesn't scroll the user to the top where the warning-status heading is located, so when the warning-status is off screen it wont be visible. I felt the fade-out transition of the item, after being deleted, was enough to indicate to the user that it has been removed from the list. I didn't want to inconveniently bring the user back to the top of the screen for another reminder message. The combination of the change of status headings, applied borders and the use of animation/transitions were to create a strong enough message to the user whenever possible and to create a better user experience, with reliance on one or more of the alert types. With the 'warning-status' being red and the 'save-status'/calculator-status' being green, it gives a clearer message to the user that one is switched to from the other. For example, when the save capacity is exceeded, the user is notified through the text color change, aswell as the message change and border changes.

- Clear Page Alerts function - As much as it is important to alert the user of major changes to the calculator and calculations list, it is also important to not have the alerts on all the time. The clearPageAlerts function is used to clear and remove all status headings, alert border classes (as discussed above). It makes 'save-status', 'calculator-status' and 'warning-status' headings empty, and removes the alert classes 'success-border' and 'warning-border' from the DOM elements where they would be applied. The clearPageAlerts function is called back in most button functions and some reusable functions, usually at the early stages of each funtion. This also makes sure all alerts are cleared before a new alert needs to appear. This process keeps the page as clean as possible. For example, when a user starts building a calculation on the calculator after loading a calculation, it is a better experience for the user to not have the the 'success-border's on the calculator' and for the 'calculator-status' to be removed. 

### Keyboard input functionality

- 'document.onkeypress(e)' JavaScript function - This is the function that allows users to use the keyboard to build or save calculations, aswell as switch calculations display. It takes the 'key' value of the pressed keyboard button. The 'key' value is passed through a switch function, in which calls the correct function, in relation to the keyboard input list below, i.e. key 'd' will call 'switchCalculationDisplay.onclick()', which clicks the 'switchCalculationDisplay' button. If a non related key is pressed nothing is returned. The keyboard buttons cannot be used to build or save calculations when the calculation description input on the save form is clicked/activate. Anywhere else on the dom needs to be clicked to be able to use this feature. The use of the keyboard is very important for users to be able to build calculations faster from using laptops, desktops or any other device that doesn't have touch screen. The following are the list of keyboard input buttons, in which will allow you to build and save calculations from the use of the keyboard:
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

- A register/login function - One feature I could use is an account system, where the user can register an account and login. The user will be able to save the list of calculations to her/his account. The user could reload his saved calculations lists, to continue working on them another time. The project is very limited in its current saving abilities because the calculations you save are only temporarily saved. You can use them as long as you don't reload the page. This kind of development would require a back end and may require a complete restructuring of the front end. To implement this feature, I may just rebuild the project from scratch. 

- Further development to the description input and an editing system - As an additional feature, I would consider allowing the user to add more dynamic descriptions to their numerical data. The user could add a brief description to their specific number data (from each saved item), in both the saved calculation and saved next input / answer. To implement this, I would add an editing system, in which the user would press an edit button (within each item) to add a brief description. After pressing the button, the user would be able to click on each number within the saved item, and add a brief description, in order to edit it. The brief description would be within a tooltip next to the number data (after its saved), and upon hover the tooltip, the user would be able to view the brief description, i.e. next to the number '5' a tooltip might read 'apples'. I would also allow the user to edit the main 'description' section of each item.

- Further development to the delete or save functions - I may add a popup feature for the screen, when an item is deleted or saved, to alert the user about the changes. This might be a better way to alert the user. The user will be able to remove the popup as it will have an 'x' in the corner.

- Move the Save Form to the Main Calculator - In planning this project, I considered having the Save form at the top of the list of calculations would be best practice. In heinseight of developing this application, I think it might have been better to have the saving capabilities, with description input, loacated on the calculator itself and just have the list of calculations to the right of the main calculator. I now feel this would provide a better User Experience, particularly for users using the application for the first time. Users would of had a better innitial understanding of what the Save Form is for if its located on the Calculator device. With this in mind I would rename the the 'calculations-backup' section 'calculations-list'. The save button, followed by the description input, would be located bellow the number buttons, and I would of gave it the same margins and sizes of the 'Switch Calculations Display' button. In general, the functional changes for this would be minimal, but the process would be long. I would have to updated this README file, the Jasmine Testing files, CSS and main JavaScript code.

- A button to hide the 'calculations-backup' section - I may consider giving the user the option to hide the calculations backup section. This would be useful at larger screen sizes, where the calculations-backup-section is located to the right of the calculator-section. This would allow for wider width span of the enlarged screen, when the built calculations get bigger. I would have a 'Hide' button on the calculations-backup section. Rather than hiding the section completely, I would just have it reduced in width to one Bootstrap grid column, i.e. the bootstrap class 'col-md-1'. The 'Hide' button would then read 'Expand'. This button would also change the grid column of the 'calculator-section' to col-md-11, expanding this section. This may cause problems with Bootstraps CSS code, so I might have to remove Bootsrap from these sections and just use CSS. I may also look online to see if Bootstrap has feature that does this. If it doesn't, then I maybe look for other code.

- Putting the 'keyboard-instructions' in a tooltip - I am strongly considering putting the instructions in a tooltip. Next to the tooltip would be a heading saying 'Keyboard Input Instructions'. The keyboard instructions are only for laptop/desktop devices, so it would be more convenient to keep them in a tooltip. I would put the tooltip at the top of the page, or maybe within the header so it is visible upon loading the screen.

## Technologies Used

- [JavaScript / ES6](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
    - JavaScript and ES6 syntax was used to develop the majority of the functionality of the web page. I built multiple onclick and gloabal functions to create responses from interacting witht he DOM. 
- [smooth-scroll-without-the-use-of-jquery](https://stackoverflow.com/questions/10063380/smooth-scroll-without-the-use-of-jquery)
    - Code post I found on this stackoverflow page, which I used for my 'scrollToTop' function. It was the best vanilla JavaScript I used for my project, to allow for a smooth scroll to the top of the page. I tested it on Safari, Firefox and Chrome browsers and it worked on all three browsers. I used the majority of the code, but tweeked it for my project. Credit goes to Andrew Johnson for the use of his code, to [kamal](https://stackoverflow.com/users/1317883/kamal) for posting the code.
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

All CSS / SCSS related files were strictly used for styling the project. The main JavaScript files were mostly used for developing responses and functions from interating with the DOM. For most cases, I avoided changing the CSS styling  with the JavaScript file. If I needed to change the Styling of the DOM through JavaScript, I would use Javascript to add a class to the a DOM elements class list. The only style changing done through JavaScript was the changes to the 'enlarged-display', in which it was constantly changed between 'block' and 'none'. JavaScript files were also used for automatic testing through the Jasmine framework.

## Testing

The documentation on all testing can be found at the [testing document]().

## Deployment

The website is deployed on GitHub pages at: https://tommyjackson85.github.io/interactive-calculator/
from the Github repository: https://github.com/TommyJackson85/interactive-calculator

It has been deployed from the beginning of this project. All project folders and files have been pushed to the GitHub repository during development, with the exception of node_modules (see .gitignore file).

A '404' error occured when deploying the website, due to GitHub pages trying use the README.md file. The error was avoided when I excluded the README file from the _config.yml file.

I would develope the project in Visual Studio Code's editing system and I would keep pushing my changes from the its internal terminal.

## Credits

### Media
- [TheLJN Logo](https://en.wikipedia.org/wiki/List_of_Acclaim_Entertainment_subsidiaries)
    - An old video game/toy company sold to Acclaim Entertainment back in 1990, but was dissolved by 1995. Acclaim filed for bankruptcy in 2004. Current owenership of LJN brand is unknown.

### Acknowledgements

- I received inspiration and guide for the development of the calculator's functionality, from the [iPhone calculator](https://9to5mac.com/2018/05/21/iphone-calculator-app-tips-and-tricks/).
- Received further guidance from th wikipedia page about the Calculator [Calculator Wikipedia](https://en.wikipedia.org/wiki/Calculator)