var _SlideNumber = 0;
var _MaxSlides = 12;
function TestKeyPress(){
    console.log("KeyPressed");
    _SlideNumber += 1;
    if (_SlideNumber > _MaxSlides){
        window.location.href = "#0"
        _SlideNumber = 0
    }
    else{
        window.location.href = "#" + _SlideNumber.toString();
    }
    
}

