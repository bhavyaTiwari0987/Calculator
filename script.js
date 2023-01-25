var gridItems = document.getElementsByClassName("grid-item");
var display = document.getElementById("display");
var operand1 = ' ';
var operand2 = ' ';
var operator = ' ';
var check = false;
for (var i =0; i < gridItems.length; i++) {
                    gridItems[i].addEventListener('click', function () {
                         var action = this.getAttribute('data-value');
                                        if (action == '+' || action == '-' || action == '*' || action == '/' || action == '%' || action == '+/-') {
                                                            operator = action;
                                                            check = true;
                                                            display.innerHTML += action;
                                        
                                        } else if (action == '=') {
                                                            console.log(+operand1);
                                                            console.log(+operand2);
                                                            console.log(operator);
                                                            var result = eval(operand1 + " " + operator + " " + operand2);
                                                            console.log(result);
                                                            display.innerHTML = result;
                                                            operand1 = result;
                                                            operand2 = ' ';
                                                            
                                             
                                        } else if(action=='AC'){
                                                            display.innerHTML = ' ';
                                                            operand1 = ' ';
                                                            operand2 = ' ';
                                                            operator = ' ';
                                                            check = false;
                                                            
                                        }
                                        else {
                                                            display.innerHTML += action;  
                                                            if (check) {
                                                               operand2 += action;
                                                            } else {
                                                               operand1 += action;                    
                                                            }
                                                            
                                                            
                         }
                    });
}




