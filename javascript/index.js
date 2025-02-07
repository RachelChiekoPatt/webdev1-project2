const button = document.getElementById('main-nav-btn');
const links = document.getElementById('main-nav-list');

const homeBtn = document.getElementById('homebtn');
const foodBtn = document.getElementById('foodbtn');
const exploreBtn = document.getElementById('explorebtn');
const creditsBtn = document.getElementById('creditsbtn');


//Colors on navigation bar

function changeNavBackgroundColor(color) {
    
    links.style.backgroundColor = color;

    links.querySelectorAll('li').forEach(li => {
        li.style.backgroundColor = color;
    });
}


homeBtn.addEventListener('mouseover', function(){
    changeNavBackgroundColor('rgb(214, 223, 226)');
});
homeBtn.addEventListener('mouseout', function(){
    changeNavBackgroundColor('');
});


foodBtn.addEventListener('mouseover', function(){
    changeNavBackgroundColor('rgb(253, 253, 217)');
});
foodBtn.addEventListener('mouseout', function(){
    changeNavBackgroundColor('');
});


exploreBtn.addEventListener('mouseover', function(){
    changeNavBackgroundColor('rgb(222, 235, 221)');
});
exploreBtn.addEventListener('mouseout', function(){
    changeNavBackgroundColor('');
});


creditsBtn.addEventListener('mouseover', function(){
    changeNavBackgroundColor('rgb(208, 198, 177)');
});
creditsBtn.addEventListener('mouseout', function(){
    changeNavBackgroundColor('');
});


// Menu toggle
button.addEventListener('click', function(){
    links.classList.toggle('toggled');
});

//Home page for Safari mobile view
const scrollToTopButton = document.getElementById('scroll-to-top');
const video = document.getElementById('bannerVideo');

document.addEventListener('DOMContentLoaded', function() {
    
    video.playsinline = true;
    video.autoplay = true;
    video.loop = true;

    window.addEventListener('scroll', function() {
        video.controls = false;
    });

   
    scrollToTopButton.addEventListener('click', function() {
        video.controls = false;
        video.play();
    });
});