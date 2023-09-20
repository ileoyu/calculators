const jsonFileLoc = '../_assets/json/TEMPLATE.json'

getJSON = async (jsonFileLoc) => {
   // $.getJSON('/assets/planning/libs/JSON/Bytes/MANIFEST.json?nocache=' + (new Date()).getTime(), (data) => {})
   const res = await fetch(jsonFileLoc);
   const items = await res.json();

   return items;
};

$(document).ready(() => {
   
});

document.addEventListener('DOMContentLoaded', function() {
   const screen = document.querySelector('.screen');
   const zero = document.querySelector('#num0');
   const one = document.querySelector('#num1');
   const two = document.querySelector('#num2');
   const three = document.querySelector('#num3');
   const four = document.querySelector('#num4');
   const five = document.querySelector('#num5');
   const six = document.querySelector('#num6');
   const seven = document.querySelector('#num7');
   const eight = document.querySelector('#num8');
   const nine = document.querySelector('#num9');

   const plus = document.querySelector('#plus');
   const minus = document.querySelector('#minus');
   const multiply = document.querySelector('#multiply');
   const divide = document.querySelector('#divide');
   const equal = document.querySelector('#equal');
   const allClear = document.querySelector('#allClear');


   const choices = [zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, multiply, divide]; // Declare the array
   let currentContent = '';

   for (let i = 0; i < choices.length; i++) {
      choices[i].addEventListener('click', function() {

         const userChoice = choices[i].textContent; // Get the clicked number

         // typeof() checks 
         let testCurrentContent = Number.isInteger(currentContent)
         let testLastElement = Number.isInteger(Number(currentContent[currentContent.length-1]))
         let testUserChoice = Number.isInteger(Number(userChoice))


         // if user selects 0 or operators when content is empty 
         if (currentContent === '' && userChoice === '0') {
            currentContent = ''
         } else if (currentContent === '' && !testUserChoice) {
            currentContent = `0${userChoice}`
         }
         
         
         // if typeof() checks are good, concatenate, else update user choice 
         if (testUserChoice || testLastElement || testCurrentContent) {
            
            currentContent += userChoice; // Concatenate the new number
            
         } else {

            currentContent = currentContent.slice(0, -1) + `${userChoice}`

         } 

         screen.textContent = currentContent; // Update the screen with the concatenated content

      });
   };

   equal.addEventListener('click', function() {
      compute();
   });

   allClear.addEventListener('click', function () {
      reset()
   });

   // evaluate the string 
   function compute () {
      result = eval(currentContent);
      currentContent = result;
      screen.textContent = currentContent;
      console.log(currentContent)
   };

   // reset everything back to blank slate
   function reset () {
      
      if (currentContent === '0') {
         console.log ('hello')
      } else if (currentContent != '' || currentContent != '0') {
         currentContent = ''
      }

      console.log(currentContent)
      screen.textContent = currentContent;

   }
});










