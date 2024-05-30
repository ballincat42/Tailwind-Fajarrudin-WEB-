//add header style when scroll a lil bit
window.addEventListener('scroll', function() {
    var scroll = window.scrollY; // Use window.scrollY to get the scroll position
    var element = document.querySelector('#header'); // Select the element with the class .clearheader

    if (scroll >= 50) {
       element.classList.add('header');
     } 
    else{
     element.classList.remove('header');
     }
       });

   //make the main anchor scroll smoothly    
   document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('anchorr').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
           });
         });
        });
   
       //make the anchor1 scroll smoothly    
   document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('anchorc').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
           });
         });
        });

   //make the anchor2 scroll smoothly
   document.addEventListener('DOMContentLoaded', function() {
       document.getElementById('anchor').addEventListener('click', function(e) {
       e.preventDefault();
       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
          });
        });
       });

   //make the anchor3 scroll smoothly    
   document.addEventListener('DOMContentLoaded', function() {
       document.getElementById('anchor-2').addEventListener('click', function(e) {
       e.preventDefault();
       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
           });
         });
       });