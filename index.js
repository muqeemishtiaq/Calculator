let string = "0"; 
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
   button.addEventListener('click', (e) => { 
      if (e.target.innerHTML === "=") {
       
         string = eval(string);
         document.querySelector('input').value = string;
      } 
      else if (e.target.innerHTML === "C") { 
      
         string = "0";
         document.querySelector('input').value = string;
      } 
      else {
        
         if (string === "0") {
            string = e.target.innerHTML;
         } else { 
          
            string += e.target.innerHTML;
         }
         document.querySelector('input').value = string;
      }
   });
});
