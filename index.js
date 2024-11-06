let string = "0";  // Start with "0" initially
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
   button.addEventListener('click', (e) => { 
      if (e.target.innerHTML === "=") {
         // Evaluate the expression
         string = eval(string);
         document.querySelector('input').value = string;
      } 
      else if (e.target.innerHTML === "C") { 
         // Clear the input and set it to "0"
         string = "0";
         document.querySelector('input').value = string;
      } 
      else {
         // If the current display is "0", replace it with the new input
         if (string === "0") {
            string = e.target.innerHTML;
         } else { 
            // Otherwise, append the clicked button's text to the string
            string += e.target.innerHTML;
         }
         document.querySelector('input').value = string;
      }
   });
});
