
var entry = 0;

function change() {

if (entry == 0) {
document.getElementById("input").placeholder = "Esheku Eshemokhai";
entry++;
} 
else {
 var newuser = document.getElementById("input").value;  
 }}






function styleOne()
{  
        var nameElements = document.querySelectorAll('.upcomingEvents');
        var i;
        for(i =0; i < nameElements.length; i++)
        {
            var element = nameElements[i];
            element.style.backgroundColor = "burlywood"
            element.children[0].innerHTML = "seminar:"
            element.children[1].innerHTML = "Calgary"
            element.children[2].innerHTML = "May 03 2019"
            element.style.color = "black"
        }
        var nameElements = document.querySelectorAll('.upcoming');
        
        var i;
        for(i =0; i < nameElements.length; i++)
        {
            var elements = nameElements[i];
            elements.style.backgroundColor = "burlywood"
            elements.children[0].innerHTML = "seminar:"
            elements.children[1].innerHTML = "Calgary"
            elements.children[2].innerHTML = "May 15 2019"
            elements.style.color = "black"
        }
        var nameElements = document.querySelectorAll('.upcomingOne');
        
        var i;
        for(i =0; i < nameElements.length; i++)
        {
            var elementsOne = nameElements[i];
            elementsOne.style.backgroundColor = "burlywood"
            elementsOne.children[0].innerHTML = "seminar:"
            elementsOne.children[1].innerHTML = "Edmonton"
            elementsOne.children[2].innerHTML = "May 23 2019"
            elementsOne.style.color = "black"
        }


    }

    











