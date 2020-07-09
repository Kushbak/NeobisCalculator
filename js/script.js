let nums = document.querySelectorAll('.num'); 
let equals = document.querySelector('.equals');
let output = document.querySelector('.output');
let allClear = document.querySelector('.allClear');
let clear = document.querySelector('.clear');
let operators = document.querySelectorAll('.operator');



// for output the value of tapped btn
let outputFunc = (num) => output.value += num;


// for clear whole output
let allClearFunc = () => output.value = '';
allClear.addEventListener('click', () => allClearFunc());
 


// for clear last symbol of output
let clearFunc = () => output.value = output.value.substring(0, output.value.length - 1);
clear.addEventListener('click', () => clearFunc());



// for insert equals
let equalsFunc = () => {
	if(output.value){
		output.value = eval(output.value)
	}
}
equals.addEventListener('click', () => equalsFunc())



// every tap on btn should call func and output  their values
nums.forEach(num => num.addEventListener('click', () => outputFunc(num.innerHTML)))


// you cannot tap operator second time and if output is empty  
operators.forEach(op => {
	op.addEventListener('click', () => {
		if(output.value && output.value[output.value.length - 1] != op.innerHTML){
			outputFunc(op.innerHTML)
		}
	})
})