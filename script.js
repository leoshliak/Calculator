const btn = document.querySelectorAll('.btn');
const numbers = document.querySelectorAll('.number');
const operations= document.querySelectorAll('.operator');
const display = document.querySelector('.display-value');
const clear = document.querySelector('#clear');
const backSpace = document.querySelector('#backspase');
const equal = document.querySelector('#operate');
 const point = document.querySelector('#point');
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


 
  function add(){
  result = Number(numberOne) + Number(numberTwo);
  display.innerHTML = result;
  console.log(result);
  return result;
} 

function subtract(){
   result = Number(numberOne) - Number(numberTwo);
   display.innerHTML = result;
   console.log(result);
   return result;
}

function multiply(){
   result = Number(numberOne) * Number(numberTwo);
   display.innerHTML = result;
   console.log(result);
   return result;
}

function divide(){
  result = Number(numberOne) / Number(numberTwo);
   display.innerHTML = result;
   console.log(result);
   return result;
}  


 function operate(){
   if(operator === '+'){
    add()
     if(operator === '+' && result == 0.30000000000000004){
      display.innerHTML = 0.3;
    }
   }
   if(operator === '-'){
    subtract()
    if(result == 0.30000000000000004){
      display.innerHTML = 0.3;
    }
    if(result == 0.19999999999999998){
      display.innerHTML = 0.2;
    } else if(result == -0.10000000000000003){
      display.innerHTML = -0.1;
    }
    else if(result == 0.09999999999999998){
      display.innerHTML = 0.1;
    }
   }
   if(operator === '*'){
    multiply()
    switch(result){
      case 0.30000000000000004:
        display.innerHTML = 0.3;
        case 0.19999999999999998:
          display.innerHTML = 0.2;
          case 0.09999999999999998:
            display.innerHTML = 0.1;
            case 0.09999999999999999:
              display.innerHTML = 0.1;
            case -0.10000000000000003:
             display.innerHTML = -0.1;
    }
   }
   if(operator === '/'){
    divide()
    switch(result){
      case 0.30000000000000004:
        display.innerHTML = 0.3;
        case 0.19999999999999998:
          display.innerHTML = 0.2;
          case 0.09999999999999998:
            display.innerHTML = 0.1;
            case 0.09999999999999999:
              display.innerHTML = 0.1;
            case -0.10000000000000003:
             display.innerHTML = -0.1;
    }
   }
   numberOne = result
   numberTwo = ''
   operator = undefined;
 }


 clear.addEventListener('click', () =>{
      clearAll();
    });
 
    btn.forEach(addEventListener('click', function(e){
      if(!e.target.classList.contains('number') && !e.target.classList.contains('operator') && !e.target.classList.contains('point')) return;
      inputNumber(e.target.textContent); 
    }));
         
     

    function inputNumber(num){
         if(numberTwo == '' &&  operator == undefined &&  num != '+' && num != '-' && num != '/' && num !='*'){
          numberOne += `${num}`;
          display.innerHTML = numberOne;
         }
       if( numberOne != '' && numberTwo == '' && (num == '+' || num == '-' || num == '/' || num =='*')){
         operator = `${num}`;
         numberOne += '';
         display.innerHTML = `${numberOne} ${operator}`;
       }
       if(operator != undefined && result == undefined && num != '+' && num != '-' && num != '/' && num !='*'){
         numberTwo += `${num}`;
         numberOne += '';
         display.innerHTML = `${numberOne} ${operator} ${numberTwo}`;
       }
       if(result != undefined && (num == '+' || num == '-' || num == '/' || num =='*')){
        numberOne == `${result}`;
        operator = `${num}`;
        result = undefined;
        display.innerHTML = `${numberOne} ${operator} `;
       }
       console.log(numberOne);
       console.log(operator);
       console.log(numberTwo);
    }
