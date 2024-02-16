document.getElementById("facebookButton").addEventListener("click", function() {
    window.location.href = '#';
});

document.getElementById("instaButton").addEventListener("click", function() {
    window.location.href = '#';
});

document.getElementById("tweetButton").addEventListener("click", function() {
    window.location.href = '#';
});

document.getElementById("linkdButton").addEventListener("click", function() {
    window.location.href = '#';
});




 













let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};








document.getElementById("sspsitweb").addEventListener("click", function() {
    window.location.href = 'https://bit.ly/GERA-SPP';
});














let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let heihgt = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heihgt){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });

        };

    });



let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);







menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');




};



















ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content, .heading ,header ,.up-cv ', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form ,.content-cv ', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});












 


const typed = new Typed('.multiple-text',{
    strings: ['GREEN ENERGY RESSOURCES ASSESMENT'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true


});








function sendEmeil (){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdeldjabarportfolio@gmail.com",
        Password : "F23FF9C5884BB101841AB262DC6AB2A5AC26",
        To : 'abdeldjabarbellakhdar69@gmail.com',
        From : 'abdeldjabarportfolio@gmail.com',
        Subject : document.getElementById('email-sub').value,
        Body : "namFull Name : "+document.getElementById('Name').value
        +"<br> phone : "+document.getElementById('mobilenumber').value
        +"<br> Email-subject : "+ document.getElementById('email-sub').value
        +"<br> Email : <br> "+document.getElementById('message').value


    }).then(
      message => alert(message)
    );
}






