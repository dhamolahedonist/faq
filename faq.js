function hideAll() {
    const toggleElements = document.querySelectorAll('.faq') // This is an array because there are more than 1 element.
    for(i = 0; i < toggleElements.length; i++) {
        // Get the element we are dealing with and set its display to none
        toggleElements[i].style.display = 'none'
    }
}

hideAll()

function toggle(divId) {
    const display = document.getElementById(divId).style.display
    hideAll() 
    if (display == 'none') {
        document.getElementById(divId).style.display = 'block'
    }
   
}

