//--Form Js
console.log('Hello World');


$(document).ready(function(){
    $('.btn').click(function(event){
        event.preventDefault()
        console.log('clicked button')
    })

});

/*
const reset = function(ev){
    ev.preventDefault();
    document.getElementById("form-message").reset();
    console.log('I just cleared this box');
    
    
}

*/