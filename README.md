# Interactive Calculator 

This Calculator will allow the user's to build long calculations, build and push long numbers into the calculation. It will also allow the user to back track their calculations in case they made a mistake, even in the case where a calculation has already been evaluated. The user will also be able to completely clear the calculator and start over again. The user can also use their evaluated answer as a start of a new calculation.

Aside from the regular number and opperator buttons, the calcultor will also have additional functions. The calculator will also allow the user to turn a number negative or back to positive and will also be able to divide the number by 100. The calculation will also send the user important messages in relation to some of its functions. For example, the calculator will tell the user they "removed" a part of the calculation when they backtrack, and it will send them a "cleared" message when they completely cleared a calculation.  

note: I may add another feature to this calculator. I am considering adding a memory function that allows the user to temporarily store the their calculations, and reload them.

One or two paragraphs providing an overview of your project.

Essentially, this part is your sales pitch.
 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
As a user type...
- I want to be able to build long calculations, with numbers and opperators, and then evaluate the calculations with the 'equals' button.
- I want to be able to view my built calculation on one line and as much as possible within the calculation screen width.
- I want to be able to remove the last number and operator inputs and parts, continuously back track the calculation using a 'remove' button, ending the calculation at the next previous number in the calculation. 
- I want to be able to completely clear a calcualtion to restart it.
- I want to be able to build a long number from inputing the number button, with its maximum length as the width of the screen, and to be able to add a decimal point value in the number where it's needed.
- I want to be able to utilise a plus, multiply, substract or divide operator, and to continuously change my choice of operator, when clicking one of the operators.
- I want to be able to continuously see my input. When I build a number, I want to be able see it being built. When I switch to a an operator, I want to see the operator I will be using before using it (with the exception of the equals button).
- I want to be able to push my previously built numbers and utilised operators into the calculator, when switching between building numbers and utilising operators. i.e. When I build a number, it is pushed into the calculator from utilising an operator.
- I want to be able to evaluate a built calculation, which starts and ends with a number. The equals button should evaluate the calculation and then push '=' at the end of the calculation for extra display.
- I want to be able to view the answer of the evaluated calculation in the input field, and I want to be able to push the answer into a new calculation after I press a new operator button.
- I want to be able to turn a positive inputed number / answer into its negative equivilent, and visa versa. I want to be able to do this continuously.
- I want to be able to divide a inputed number / answer by 100 continuously.


This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Calculator screen - allows users to view all the reponsive information from pressing the calculator buttons. For most situations, the top of the screen displays the calculation being built while the bottom part displays the inputed data prior to being pushed into the calculation. However both parts can also display messages for the user in regards to certain situations. For example, upon refreshing the web page the top, displayedCalculation part says 'Begin Calculation'.
- Number buttons and number building function - When pressimg the number button, it activates the numberBuilder function. Once a number button is pushed, it pushes it's value into the a global array called 'newNumber'. The Array data is displayed stringed together to form a number as a string, and this is displayed bottom of the calculator screen, i.e. #displayedInput HTML. Each number button html ID is "num" + either one of the following: [1,2,3,4,5,6,7,8,9,"Dec"], i.e. #num1, #num4 and #numDec. #numDec pushes a decimal (".") into the newNumber array. Once this is pressed, the #numDec button is disabled until the number is finished being built. It's disable through boolean variable turning true, i.e. let disableDec = false, when begining a new number, and is turned true when the decimal button is used once.
- divide100 button and functionality - This allows the user to divide their built number by 100. It turns the stringed newNumber into an evaluated real number, and divides it by 100 before, then turns it back to a string, splits into a new array, and finally pushes it back into the newNumber global array (after newNumber is emptied).
Sometimes when a user divides the number by 100, it adds a decimal into the new Number. When this happens, disableDec is turned to true.
- 'negative' button and functionilty - this allows the user to turn their positive number into a negative version of the number and visa versa, i.e. '100' turns to '-100' and visa versa. This is done by adding '-' to the first index of the newNumber array function, or if its negative already it slices the '-' from it, i.e. ['1', '2'] turns to ['-1', '2'] and back to ['1', '2']. 
- operator buttons and utilize operator function - these buttons allows the user to utilize an operator for their calculation. They have the choice between, 'add' ("+"), 'subtract' ('-'), 'multiply' ('*'), 'divide' ('/') or 'answer' ('='). With the exception of the 'answer' button, the operator buttons allows the user constantly switch between a choice of operator. Upon clicking an operator button, it empties the newOperator array and pushes in a value of the operator button clickes, i.e. if the multiply button is clicked, it pushes '*' into the newOperator array, and then if the subtract button is clicked, it empties '*' out of the array and pushes '-' into the array. The clicked operator is displayed at the bottom of the screen (#displayedInput). Once the answer button is clicked, it fully evaluates the stringed calculation, if it starts with one number and ends with another.  Unlike the other operators, the '=' is not displayed at the #displayedInput, the evaluated calculation's answer is. The '=' is instead displayed at the end of the calculation, just for display.
- calculation array and switching between number buttons amd operator buttons - At the start of a calculation, when the calculation array is empty, and Operator button cannot be used, only a number button can. When a user finsishes building a number and decides to utilise an operator, the built number is pushed into the calculator array as the first or next index. When an operator is decided to be used and the user starts building another number, the operator is pushed into the calculation array as the next index. After a user has evaluated a full calculation (from pressing the 'answer button'), the user can use his answer response (from the displayedInput), as the first number of his next calculaton when the user presses an operator button. If a user decides to press a number button after evaluating the calculation, the calculation restarts, emptying the calculation array and starts building a new number.
- remove button and function - this button allows the user to back track their calculation even when the calculation is evaluated. When first clicking the remove button, it empties the input arrays (newNumber and newOperator). If it's a number displayed in the input and the last index of the calculation is an operator, it removes the operator at the end of the calculation. If its an operator that is displayed in the input, the button will just clear the input. If it is clicked a second time or more in a row, the remove function will remove the last two indexs of the calculation array on each click. When the remove button is clicked, it messages "removed" to the user in the input section. Once the the calculation is emptied it messages "cleared" to the user in the calculation section.
- cleared button and function - this button clears the calculation, newOperator and newNumber arrays, and displays 'cleared' in the calculation display and '0' in the input display.
- clearing arrays - when ever the JavaScript code needs to empty an array, it either sets the array to an empty array or it is spliced empty. It is spliced through a reusable function called empty. It is used when the array cant be set to a new empty array, so the empty function is used as a back up.
- other reusable global javascript functions - The empty function is also called twice in the clearInputs function, which is used to clear both the newOperator and newNumber arrays. The empty function is also used to clear the calculation in the clearAll function. The clearAll function also calls the the clearInput function and returns the disableDec as true. It is designed to clear everything and restart the claculator. The clearAll function is also called in the clearAllAndDisplay function. The clearAllAndDisplay function restarts the calculation and displays "cleared" in the displayed calculation and "0" in the displayed input. All these global functions are called for different scenarios in relation to which button is clicked and the content of the arrays at display. It helps create a chain of functions and keeps the code clean.

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [Babel](https://babeljs.io/)
    - The project uses Babel to compile any ES6 JavaScript syntax into traditional JavaScript, to make the website work on all browsers and devices. The Babel environment was downloaded through npm packages.
- [Jasmine](https://jasmine.github.io/)
    - The project uses Jasmine, so I could use the it to build the webpage though test driven development. I hard coded the Jasmine files into the head of the testing html file.

## Testing

- Jasmine testing - I set up the Jasmine testing environment in a 'spec' folder. The folder contains a tests.html file, aswell as spec jasmine/javascript files for the following buttons and function categories: (1) Number Buttons, (2) Operator Buttons, (3) Other Buttons, and (4) Reusable Functions.

    - tests html file - This file allows me to test the my main.js file on a separate html file. I copied and pasted the html from index.html to the tests.html in order for my tests to be able to read a DOM. This meant I didn't have to rebuild my main javascript code for testing. The HTML on the tests.html isnt styled but it's displayed when the tests.html file is ran.
    - Building the test basis - Prior to building my test files for each button, I would build most of the main code (i.e. for each button function or reusable function) on the main.js file. Then I would build the test basis of each button type ('answer button', other operator button, number button,) with the 'Describe' function. I would then build test scenarios related to the button with the use of the 'it' function. 
    - Test scenarios - For each scenario, I would set the related global variables to their correct setting that fits scenario. For examples, sometimes I would already have calculation array built, or I would set the disableDec to 'true'. I would then use the 'expect' function to test the calling of a function's outcomes or non outcomes ( i.e. expect(num4.onclick().toBe('4')) or expect(clearAll()).not.toBe(true) ; ) . I would also test all the global variables to make sure they have changed or haven't changed (i.e. expect(calculation).toEqual([]) and/or expect(disableDec).toBe(false);). I would do as much tests as I need on each related element of code in each function.
    - Refactering the code - I would usually have each expect test fail, pass it and then maybe refactor. The more test I built the more faults or errors I would come across in the code, which required me to refactor the code. Further more, when I moved onto another button function to test, I would sometimes find I need to add to the previous code of other functions. This was the case when I built and tested the operator utiliser function, in which I would also built and tested the pushToCalculation function. I found after building them I needed to go back to the number building function, to make sure it would push the newOperator data into the calculation when it was needed. 
    - Running the tests - When Running the tests, I would do it in linear order and not at random. This was because each each test is built as a separate scenario anyway and becuase when testing them at random, an odd error would occur. Whether or not these tests run at random is irrelevent to the collection of test beacuase they are not connected.


- Manual testing
    - While building each button, I would also test the calculator manually from the chrome browser. After compiling the code into the build/main.bundle.js through babel, I would test the calculator on chrome, firefox and safari browsers, to make sure it is compatable with all browsers.


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
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X