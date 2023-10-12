const btn = document.querySelectorAll('.btn');
const numbers = document.querySelectorAll('.number');
const operations= document.querySelectorAll('.operator');
const display = document.querySelector('.display-value');
const clear = document.querySelector('#clear');
const backSpace = document.querySelector('#backspace');
const equal = document.querySelector('#operate');
 const point = document.querySelector('#point');
let operator ;
let numberOne = '';
let numberTwo = '';
 let negativeOne = false;
 let negativeTwo = false;
let result;


 function clearAll(){
   numberOne = '';
   numberTwo = '';
   operator = undefined;
  result = undefined;
   display.innerHTML = '';
 }

   function clearOne(){
    if(numberOne != '' && operator == undefined){
      pon = numberOne.substring(0, numberOne.length - 1)
      console.log(pon)
     numberOne = `${pon}`
     display.innerHTML = `${numberOne}`
    }
    if( operator != undefined && numberTwo == ''){
      operator = undefined;
      display.innerHTML = `${numberOne}`
    }
    if(numberTwo != '' && operator != undefined){
      pon2 = numberTwo.substring(0, numberTwo.length - 1)
      console.log(pon2)
      numberTwo = `${pon2}`
     display.innerHTML = `${numberOne} ${operator} ${numberTwo}`
    }
  }

   function toNegative(){
    if(numberOne != '' && numberTwo == '' && negativeOne == false && operator == undefined && result == undefined){
      numberOne = '-' + numberOne
      negativeOne = true
      display.innerHTML = numberOne;
      }
      else if(numberOne != '' && numberTwo == '' &&  operator == undefined &&  negativeOne == true && result == undefined){
      numberOne = numberOne.replace('-','');
      negativeOne = false
      display.innerHTML = numberOne;
    }
     else if(numberOne != '' && numberTwo == '' && negativeOne == false && operator == undefined && result != undefined){
      numberOne = '-' + `${result}`
      result = undefined
      negativeOne = true
      display.innerHTML = numberOne;
     }
     else if(numberOne != '' && numberTwo == '' &&  operator == undefined &&  negativeOne == true && result != undefined){
      numberOne = `${result}`;
      numberOne = numberOne.replace('-','');
      result = undefined;
      negativeOne = false;
      display.innerHTML = numberOne;
     }
     if(operator != undefined && numberTwo != '' && negativeTwo == false && result == undefined){
        numberTwo = '-' + numberTwo;
        negativeTwo = true;
        display.innerHTML = `${numberOne} ${operator} ${numberTwo}`;
     }
     else if(operator != undefined && numberTwo != '' && negativeTwo == true && result == undefined){
      numberTwo = numberTwo.replace('-', '');
      negativeTwo = false;
      display.innerHTML = `${numberOne} ${operator} ${numberTwo}`;
     }
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
     if(result < 0){
       negativeOne = true;
     } else if(result > 0) {
      negativeOne = false;
     }
 }


 clear.addEventListener('click', () =>{
      clearAll();
    });
 
    btn.forEach(addEventListener('click', function(e){
      if(!e.target.classList.contains('number') && !e.target.classList.contains('operator') && !e.target.classList.contains('point'))return;
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
        numberOne = `${result}`;
        operator = `${num}`;
        result = undefined;
        display.innerHTML = `${numberOne} ${operator} `;
       }
       if(operator != undefined && numberTwo != '' && (num == '+' || num == '-' || num == '/' || num =='*')){
        operate();
        numberOne = `${result}`;
        operator = `${num}`;
        result = undefined;
        display.innerHTML = `${numberOne} ${operator} `;
       }
       console.log(numberOne);
       console.log(operator);
       console.log(numberTwo);
    }
