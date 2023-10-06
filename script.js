const btn = document.querySelectorAll('.btn');
const numbers = document.querySelectorAll('.number');
const operations= document.querySelectorAll('.operator');
const display = document.querySelector('.display-value');
const clear = document.querySelector('#clear');
const backSpace = document.querySelector('#backspase');
const equal = document.querySelector('#operate');
let operator ;
let numberOne = '';
let numberTwo = '';
let result;



 function clearAll(){
   numberOne = '';
   numberTwo = '';
   operator = undefined;
  result = undefined;
   display.innerHTML = '';
 }

 clear.addEventListener('click', () =>{
      clearAll();
    });
 
    btn.forEach(addEventListener('click', function(e){
      if(!e.target.classList.contains('number') && !e.target.classList.contains('operator')) return;
      inputNumber(e.target.textContent);
    }));
         
     

    function inputNumber(num){
         if(numberTwo == '' &&  operator == undefined &&  num != '+' && num != '-' && num != '/' && num !='*'){
          numberOne += `${num}`;
         }
       if(numberOne != '' && num == '+' || num == '-' || num == '/' || num =='*'){
         operator = `${num}`;
         numberOne += ''
       }
       if(operator != undefined && num != '+' && num != '-' && num != '/' && num !='*'){
         numberTwo += `${num}`;
         numberOne += ''
       }
       console.log(numberOne);
       console.log(operator);
       console.log(numberTwo);
    }

     
  
 function add(){
   result = numberOne + numberTwo;
   display.innerHTML = result;
   console.log(  result);
   return result;
} 

 function subtract(){
    result = numberOne - numberTwo;
    display.innerHTML = result;
    return result;
 }

 function multiply(){
    result = numberOne * numberTwo;
    display.innerHTML = result;
    return result;
 }

 function divide(){
   result = numberOne / numberTwo;
    display.innerHTML = result;
    return result;
 }  
  
 function operate() {
    if(operator = '+'){
      return add();
    }
     if(operator = '-'){
       return subtract();
    }
     if(operator = '*'){
      return multiply();
    }
    if(operator = '/'){
       return divide();
    }
 }