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
   const plus = document.querySelector('#plus');
   const minus = document.querySelector('#minus');
   const multiply = document.querySelector('#multiply');
   const divide = document.querySelector('#divide');
   const equal = document.querySelector('#equal');

   const choices = [zero, one, two, three, plus, minus, multiply, divide]; // Declare the array
   let currentContent = '';

   for (let i = 0; i < choices.length; i++) {
      choices[i].addEventListener('click', function() {

         const userChoice = choices[i].textContent; // Get the clicked number
         let testCurrentContent = Number(currentContent[currentContent.length-1])
         let testUserChoice = Number(userChoice)

         
         if (Number.isInteger(testUserChoice) || Number.isInteger(testCurrentContent) || Number.isInteger(currentContent)) {
            
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

   function compute () {
      result = eval(currentContent);
      currentContent = result;
      screen.textContent = currentContent;
   };

});










