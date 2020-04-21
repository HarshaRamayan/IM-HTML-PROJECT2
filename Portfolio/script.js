const navSlide = () => 
{
    const options = document.querySelector('.options');
    const nav = document.querySelector('.navigation');
    const navigation = document.querySelectorAll('.navigation li');
    //toggle nav
    options.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //Animate Links
    navigation.forEach((link, index) => 
    {
        if(link.style.animation){
            link.style.animation="";
    } else{
        link.style.animation = 'navLinkFade 0.5s ease forwards $ {index/7 + 0.3}s'; }
        
    });
    //option Animation
    options.classList.toggle('toggle');
    
});
}

navSlide();

function small(){
    document.getElementById("imgvision").width ="380";
    document.getElementById("imgvision").height ="220";
}
function medium(){
    document.getElementById("imgvision").width ="680";
    document.getElementById("imgvision").height ="400";
}
function large(){
    document.getElementById("imgvision").width ="1040";
    document.getElementById("imgvision").height ="720";
}
function medium1(){
    document.getElementById("i1").width ="680";
    document.getElementById("i1").height ="400";
}
function large1(){
    document.getElementById("i1").width ="1040";
    document.getElementById("i1").height ="720";
}

        