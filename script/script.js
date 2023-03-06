function menu(){
    const menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
    }
    else{
        menuMobile.classList.add('open');
    }
};

//about,contact,project
const contentContact = document.querySelector(".content-contact");
const contentProjects = document.querySelector(".content-projects");
const contentAbout = document.querySelector(".content-about");
const contenthome = document.querySelector(".home");

function about(){
    if (contentAbout.classList.contains('openAbout')){} 
    else{
        contentAbout.classList.add('openAbout');
        contentContact.classList.remove('openContact');
        contentProjects.classList.remove('openProjects');
        contenthome.classList.add('closehome');
    }
};

function contact(){
    if (contentContact.classList.contains('openContact')){} 
    else{
        contentContact.classList.add('openContact');
        contentProjects.classList.remove('openProjects');
        contentAbout.classList.remove('openAbout');
        contenthome.classList.add('closehome');
    }
};

function projects(){
    if (contentProjects.classList.contains('openProjects')){        } 
    else{
        contentProjects.classList.add('openProjects');
        contentContact.classList.remove('openContact');
        contentAbout.classList.remove('openAbout');
        contenthome.classList.add('closehome');
    }
};