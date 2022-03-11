const navLink = document.querySelectorAll('nav ul li a');
const homeLink = document.querySelector('#homeLink');
const aboutLink = document.querySelector('#aboutLink');
const about = document.querySelector('#about');
const worksLink = document.querySelector('#worksLink');
const works = document.querySelector('#works');
const latestLink = document.querySelector('#latestLink');
const latest = document.querySelector('#latest');
const contactLink = document.querySelector('#contactLink');
const contact = document.querySelector('#contact');
const copyButton = document.querySelectorAll('.copyButton');
const copyText = document.querySelectorAll('.card-back-text textarea');
const message = document.querySelector('.message');


window.addEventListener('load', () => {
    if (window.innerWidth < 800) {
        setTimeout(() => {
            alert("Please visit this website from a desktop or laptop for a better experience");
        }, 5000);
    }
});

for (let i = 0; i < navLink.length; i++) {

    navLink[i].addEventListener('click', () => {
        if (navLink[i].getAttribute('class') && i != 0) {
            navLink[i].classList.add('active');
        } else {
            for (let a = 0; a < navLink.length; a++) {
                if (navLink[a].getAttribute('class')) {
                    navLink[a].classList.remove('active');
                }
            }
            navLink[i].classList.add('active');
        }
    });
}

homeLink.addEventListener('click', () => {
    if (about.style.top == '0px') {
        about.style.top = "150%";
    } else if (works.style.top == '0px') {
        works.style.top = "150%";
    } else if (contact.style.top == '0px') {
        contact.style.top = '150%';
    } else if (latest.style.top == '0px') {
        latest.style.top = "150%";
    }
});

aboutLink.addEventListener('click', () => {
    if (works.style.top == '0px') {
        works.style.top = "150%";
    } else if (latest.style.top == '0px') {
        latest.style.top = "150%";
    } else if (contact.style.top == '0px') {
        contact.style.top = '150%';
    }
    about.style.top = "0";
});

worksLink.addEventListener('click', () => {
    if (about.style.top == '0px') {
        about.style.top = "150%";
    } else if (latest.style.top == '0px') {
        latest.style.top = "150%";
    } else if (contact.style.top == '0px') {
        contact.style.top = '150%';
    }
    works.style.top = "0";
});

latestLink.addEventListener('click', () => {
    if (about.style.top == '0px') {
        about.style.top = "150%";
    } else if (works.style.top == '0px') {
        works.style.top = '150%';
    } else if (contact.style.top == '0px') {
        contact.style.top = '150%';
    }
    latest.style.top = "0";
});

contactLink.addEventListener('click', () => {
    if (about.style.top == '0px') {
        about.style.top = "150%";
    } else if (works.style.top == '0px') {
        works.style.top = '150%';
    } else if (latest.style.top == '0px') {
        latest.style.top = '150%';
    }
    contact.style.top = "0";
});



for (let i = 0; i < copyButton.length; i++) {
    copyButton[i].addEventListener('click', () => {
        navigator.clipboard.writeText(copyText[i].value);
        if (document.execCommand("copy")) {
            message.innerText = "Text Copied";
            message.style.bottom = "20px";
            setTimeout(() => {
                message.style.bottom = "-10%";
            }, 2000);
        }
    });
}