
const navbar = document.getElementsByClassName("navbar-container")[0];
const navClass = 'showNav';

window.onscroll = (e) => {
    if (e.type === "scroll") {
        if (nav.classList.contains(navClass)) {
            nav.classList.remove(navClass);
            navMenu.classList.remove(navClass);
        }
    }
    
    const x = window.pageYOffset;

    if (x > 80) {
        if (navbar.classList[0] === "navbar-container") {
            navbar.classList.add("scrollNav");
        }
    }
    else if (x < 80) {
        navbar.classList.remove("scrollNav");
    }

    const slideTop = document.getElementsByClassName('slidetop')[0];
    const slideTop_class = 'slideAnimation';
    const slideTopRev_class = 'slideAnimationRev';

    slideTop.classList.add(slideTopRev_class);

    if (x > 450) {
        if (slideTop.classList.contains(slideTopRev_class)) {
            slideTop.classList.remove(slideTopRev_class);
            slideTop.classList.add(slideTop_class);
        }
    }
    
    const lists = document.getElementsByClassName("navList");

    if (x > 550) {
        lists[0].style.color = "";
        lists[0].style.transform = "";
        lists[1].style.color = "cornflowerblue";
        lists[1].style.transform = "scale(1.03)";
    }
    else {
        lists[1].style.color = "";
        lists[1].style.transform = "";
    }
    
    if (x > 1000) {
        lists[1].style.color = "";
        lists[1].style.transform = "";
        lists[2].style.color = "cornflowerblue";
        lists[2].style.transform = "scale(1.03)";
    }
    else {
        lists[2].style.color = "";
        lists[2].style.transform = "";
    }

    // if (x > ) {
    //     lists[1].style.color = "";
    //     lists[1].style.transform = "";
    //     lists[2].style.color = "";
    //     lists[2].style.transform = "";
    //     lists[3].style.color = "cornflowerblue";
    //     lists[3].style.transform = "scale(1.03)";
    // }
    // else {
    //     lists[3].style.color = "";
    //     lists[3].style.transform = "";
    // }

    const about_desc = document.getElementsByClassName('desc')[0];
    const about_btn_desc = document.getElementsByClassName('btn-desc')[0];
    const about_desc_class = 'parallaxAbout';
    const about_btn_desc_class = 'parallaxAboutBtn';
    if (x > 250) {
        if (!about_desc.classList.contains(about_desc_class)) {
            about_desc.classList.add(about_desc_class);
            about_desc.style.opacity = '1';
            about_desc.style.transform = 'translateY(0px)';
        }
        if (!about_btn_desc.classList.contains(about_btn_desc_class)) {
            about_btn_desc.classList.add(about_btn_desc_class);
            about_btn_desc.style.opacity = '1';
            about_btn_desc.style.transform = 'translateY(0px)';
        }
    }
}

function menu(i) {
    const childNavbar = navbar.childNodes[3];
    console.log(childNavbar);
    childNavbar.classList.toggle("showNav");
    i.classList.toggle("showNav");
}

const listLink = document.getElementsByClassName("navList");
const nav = document.getElementsByClassName("navbar")[0];
const navMenu = document.getElementsByClassName("navbar-menu")[0];
let i = 0;

for (i = 0; i < listLink.length; i++) {
    listLink[i].addEventListener("click", e => {
        const list = e.target;
        if (list) {
            nav.classList.remove(navClass);
            navMenu.classList.remove(navClass);
        }
        else {
            nav.classList.add(navClass);
            navMenu.classList.add(navClass);
        }
    });
}


const list = document.getElementsByClassName("navList");

function myList(t) {
    for (let i = 0; i < list.length; i++) {
        list[i].style.color = "";
        list[i].style.transform = "unset";
    }
    list[t].style.color = "cornflowerblue";
    list[t].style.transform = "scale(1.05)";
}


const showPass = document.getElementById('show_password');
const hidePass = document.getElementById('hide_password');
const delPass = document.getElementById('del_password');

const showPassParent = showPass.parentElement;
const anotherPassParent = showPassParent.parentElement;
const inputPass = anotherPassParent.childNodes[3];

showPass.onclick = () => {
    inputPass.removeAttribute("type");
    inputPass.setAttribute("type", "text");
    showPass.style.display = 'none';
    hidePass.style.display = 'inline';
}

hidePass.onclick = () => {
    inputPass.removeAttribute("type");
    inputPass.setAttribute("type", "password");
    hidePass.style.display = 'none';
    showPass.style.display = 'inline';
}

delPass.onclick = () => {
    inputPass.value = "";
}

const modal = document.getElementsByClassName('modal')[0];
const signBtn = document.getElementsByClassName('signUp-btn')[0];
const modalClose = document.getElementById('close-modal');

const showModalClass = 'showModal';

signBtn.addEventListener('click', () => {
    if (!modal.className.includes(showModalClass)) {
        modal.style.display = 'block';
        modal.classList.add(showModalClass);
        bgModal.style.display = 'block';
    }
});

modalClose.addEventListener('click', () => {
    if (modal.className.includes(showModalClass)) {
        modal.style.display = 'none';
        modal.classList.remove(showModalClass);
        bgModal.style.display = 'none';
    }
});

const bgModal = document.getElementsByClassName('bg-modal')[0];
bgModal.addEventListener('click', () => {
    const x = modal.style.display = 'none';
    if (x) {
        bgModal.style.display = 'none';
        if (modal.className.includes(showModalClass)) {
            modal.classList.remove(showModalClass);
        }
    }
});