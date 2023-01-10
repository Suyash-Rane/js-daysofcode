var htmlButton = document.getElementById('btn');
var i = 0;
htmlButton.onclick = function()
{
    i++;
    htmlButton.innerHTML = i;
}