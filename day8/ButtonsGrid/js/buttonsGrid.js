var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');
var btn6 = document.getElementById('btn6');
var btn7 = document.getElementById('btn7');
var btn8 = document.getElementById('btn8');
var btn9 = document.getElementById('btn9');
btn5.onclick = function()
{
    var init = [btn1.innerHTML, btn2.innerHTML, btn3.innerHTML, btn4.innerHTML, btn5.innerHTML, btn6.innerHTML, btn7.innerHTML, btn8.innerHTML, btn9.innerHTML];
    btn1.innerHTML = init[3];
    btn2.innerHTML = init[0];
    btn3.innerHTML = init[1];
    btn4.innerHTML = init[6];
    btn6.innerHTML = init[2];
    btn7.innerHTML = init[7];
    btn8.innerHTML = init[8];
    btn9.innerHTML = init[5];
}