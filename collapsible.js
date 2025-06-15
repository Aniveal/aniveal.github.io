

var coll = document.getElementsByClassName("expandButton");
var i;

for (i = 0; i < coll.length; i++) 
{

    coll[i].addEventListener("click", function() 
    {
        this.classList.toggle("active");
        if (this.classList.contains("active")) {
            this.innerText = "Hide";
        } else {
            this.innerText = "Show";
            
        }
        var content = this.parentElement.nextElementSibling;
        if (content.classList.contains("expandableHidden")) {
            content.classList.remove("expandableHidden");
            content.classList.add("expandableExpanded");
        
        } else {
            content.classList.add("expandableHidden");
            content.classList.remove("expandableExpanded");
        }
    });
} 