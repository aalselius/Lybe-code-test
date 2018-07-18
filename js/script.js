var article1_link = document.getElementById('article1_link');
var article2_link = document.getElementById('article2_link');
var article1 = document.getElementById('article1');
var article2 = document.getElementById('article2');
var column1 = document.getElementById('column1');
var column2 = document.getElementById('column2');

// FUNCTIONS

function slideIn(article, load) {
    if (article === article1) {
        article1.childNodes[1].classList.add('slideIn');
        article1.childNodes[3].classList.add('slideIn');
        article1.childNodes[1].classList.remove('slideOut');
        article1.childNodes[3].classList.remove('slideOut'); 
        if (!load) {       
            article2.childNodes[1].classList.remove('slideIn');
            article2.childNodes[3].classList.remove('slideIn');
            article2.childNodes[1].classList.add('slideOut');
            article2.childNodes[3].classList.add('slideOut');
        }
    } else {
        article1.childNodes[1].classList.remove('slideIn');
        article1.childNodes[3].classList.remove('slideIn');
        article1.childNodes[1].classList.add('slideOut');
        article1.childNodes[3].classList.add('slideOut');        
        article2.childNodes[1].classList.add('slideIn');
        article2.childNodes[3].classList.add('slideIn');
        article2.childNodes[1].classList.remove('slideOut');
        article2.childNodes[3].classList.remove('slideOut');      
    }
}

// ON LOAD
window.onload = slideIn(article1, true);

// EVENT LISTENERS

article1_link.addEventListener('click', function() {
    article1.classList.add('active');
    article2.classList.add('closed');
    article2.classList.remove('active');
    article1.classList.remove('closed');
    slideIn(article1);
});

article2_link.addEventListener('click', function() {
    article2.classList.add('active');
    article1.classList.add('closed');
    article1.classList.remove('active');
    article2.classList.remove('closed');
    slideIn(article2);
});