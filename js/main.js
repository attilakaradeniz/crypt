

$(document).ready(function(){

    let blip = document.getElementsByTagName("audio")[0];
    let box = $(".boxes");
    
    // let box = document.getElementsByClassName("boxes");
    
    console.log("test");
    
    box.mouseenter(function() {
        blip.play();
        
    });
    
    box.on("mouseover", function() {
        blip.play();
        console.log("su an mouseover");
        
    });
});


