
var toggleContent = function(param, prevElem) {
    
    var content;
    if(prevElem)
        content = param.parentElement.previousElementSibling;
    else content = param.parentElement.nextElementSibling;
    
    console.log(content);

    if (content.classList.contains("expandableHidden")) {
        param.style.rotate = "0deg";
        content.classList.remove("expandableHidden");
        content.classList.add("expandableExpanded");
    
    } else if (content.classList.contains("expandableExpanded")){
        content.classList.add("expandableHidden");
        content.classList.remove("expandableExpanded");
        param.style.rotate = "180deg";
    }
    else {
        content.classList.add("expandableExpanded");
        param.style.rotate = "0deg";
    }
    
};